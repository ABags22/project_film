import { Request, Response } from "express";
import Film from "../models/film.model";

// CREATE - Tambah satu film
export const createFilm = async (req: Request, res: Response) => {
  try {
    const newFilm = new Film(req.body);
    const savedFilm = await newFilm.save();
    return res.status(201).json(savedFilm);
  } catch (error: any) {
    return res.status(400).json({ message: "Gagal menambahkan film", error });
  }
};

// ✅ CREATE MANY - Tambah banyak film sekaligus
export const createManyFilms = async (req: Request, res: Response) => {
  try {
    const savedFilms = await Film.insertMany(req.body);
    return res.status(201).json(savedFilms);
  } catch (error: any) {
    return res.status(400).json({ message: "Gagal menambahkan banyak film", error });
  }
};

// READ - Ambil semua film
export const getAllFilms = async (_req: Request, res: Response) => {
  try {
    const films = await Film.find();
    return res.status(200).json(films);
  } catch (error: any) {
    return res.status(500).json({ message: "Server error", error });
  }
};

// READ - Ambil satu film berdasarkan ID
export const getFilmById = async (req: Request, res: Response) => {
  try {
    const film = await Film.findById(req.params.id);
    if (!film) {
      return res.status(404).json({ message: "Film tidak ditemukan" });
    }
    return res.status(200).json(film);
  } catch (error: any) {
    return res.status(500).json({ message: "Server error", error });
  }
};

// UPDATE - Update film berdasarkan ID
export const updateFilm = async (req: Request, res: Response) => {
  try {
    const updatedFilm = await Film.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    if (!updatedFilm) {
      return res.status(404).json({ message: "Film tidak ditemukan" });
    }

    return res.status(200).json(updatedFilm);
  } catch (error: any) {
    return res.status(400).json({ message: "Gagal mengupdate film", error });
  }
};

// DELETE - Hapus film berdasarkan ID
export const deleteFilm = async (req: Request, res: Response) => {
  try {
    const deletedFilm = await Film.findByIdAndDelete(req.params.id);

    if (!deletedFilm) {
      return res.status(404).json({ message: "Film tidak ditemukan" });
    }

    return res.status(200).json({ message: "Film berhasil dihapus" });
  } catch (error: any) {
    return res.status(500).json({ message: "Server error", error });
  }
};
