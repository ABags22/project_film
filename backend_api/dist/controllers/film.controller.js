"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteFilm = exports.updateFilm = exports.getFilmById = exports.getAllFilms = exports.createManyFilms = exports.createFilm = void 0;
const film_model_1 = __importDefault(require("../models/film.model"));
// CREATE - Tambah satu film
const createFilm = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newFilm = new film_model_1.default(req.body);
        const savedFilm = yield newFilm.save();
        return res.status(201).json(savedFilm);
    }
    catch (error) {
        return res.status(400).json({ message: "Gagal menambahkan film", error });
    }
});
exports.createFilm = createFilm;
// ✅ CREATE MANY - Tambah banyak film sekaligus
const createManyFilms = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const savedFilms = yield film_model_1.default.insertMany(req.body);
        return res.status(201).json(savedFilms);
    }
    catch (error) {
        return res.status(400).json({ message: "Gagal menambahkan banyak film", error });
    }
});
exports.createManyFilms = createManyFilms;
// READ - Ambil semua film
const getAllFilms = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const films = yield film_model_1.default.find();
        return res.status(200).json(films);
    }
    catch (error) {
        return res.status(500).json({ message: "Server error", error });
    }
});
exports.getAllFilms = getAllFilms;
// READ - Ambil satu film berdasarkan ID
const getFilmById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const film = yield film_model_1.default.findById(req.params.id);
        if (!film) {
            return res.status(404).json({ message: "Film tidak ditemukan" });
        }
        return res.status(200).json(film);
    }
    catch (error) {
        return res.status(500).json({ message: "Server error", error });
    }
});
exports.getFilmById = getFilmById;
// UPDATE - Update film berdasarkan ID
const updateFilm = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const updatedFilm = yield film_model_1.default.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        });
        if (!updatedFilm) {
            return res.status(404).json({ message: "Film tidak ditemukan" });
        }
        return res.status(200).json(updatedFilm);
    }
    catch (error) {
        return res.status(400).json({ message: "Gagal mengupdate film", error });
    }
});
exports.updateFilm = updateFilm;
// DELETE - Hapus film berdasarkan ID
const deleteFilm = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const deletedFilm = yield film_model_1.default.findByIdAndDelete(req.params.id);
        if (!deletedFilm) {
            return res.status(404).json({ message: "Film tidak ditemukan" });
        }
        return res.status(200).json({ message: "Film berhasil dihapus" });
    }
    catch (error) {
        return res.status(500).json({ message: "Server error", error });
    }
});
exports.deleteFilm = deleteFilm;
