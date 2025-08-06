import { Request, Response } from "express";
import Film from "../models/film.model";

// CREATE - Tambah film baru
export const createFilm = async (req: Request, res: Response) => {
  try {
    const newFilm = new Film(req.body);
    const savedFilm = await newFilm.save();
    res.status(201).json(savedFilm);
  } catch (error) {
    res.status(400).json({ message: "Gagal menambahkan film", error });
  }
};

// READ - Ambil semua film
export const getAllFilms = async (_req: Request, res: Response) => {
  try {
    const films = await Film.find();
    res.json(films);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

// READ - Ambil satu film berdasarkan ID
export const getFilmById = async (req: Request, res: Response) => {
  try {
    const film = await Film.findById(req.params.id);
    if (!film) {
      return res.status(404).json({ message: "Film tidak ditemukan" });
    }
    res.json(film);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

// UPDATE - Update film berdasarkan ID
export const updateFilm = async (req: Request, res: Response) => {
  try {
    const updatedFilm = await Film.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true } // mengembalikan data yang sudah diupdate
    );

    if (!updatedFilm) {
      return res.status(404).json({ message: "Film tidak ditemukan" });
    }

    res.json(updatedFilm);
  } catch (error) {
    res.status(400).json({ message: "Gagal mengupdate film", error });
  }
};

// DELETE - Hapus film berdasarkan ID
export const deleteFilm = async (req: Request, res: Response) => {
  try {
    const deletedFilm = await Film.findByIdAndDelete(req.params.id);

    if (!deletedFilm) {
      return res.status(404).json({ message: "Film tidak ditemukan" });
    }

    res.json({ message: "Film berhasil dihapus" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};
