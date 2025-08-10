import express from "express";
import {
  getAllFilms,
  createFilm,
  createManyFilms, // 👈 Tambahan fungsi bulk insert
  getFilmById,
  updateFilm,
  deleteFilm,
} from "../controllers/film.controller";

const router = express.Router();

// Get all films
router.get("/", getAllFilms); // GET /api/films

// Get single film by ID
router.get("/:id", getFilmById); // GET /api/films/:id

// Create single film
router.post("/", createFilm); // POST /api/films

// Create many films (bulk)
router.post("/bulk", createManyFilms); // POST /api/films/bulk

// Update film by ID
router.put("/:id", updateFilm); // PUT /api/films/:id

// Delete film by ID
router.delete("/:id", deleteFilm); // DELETE /api/films/:id

export default router;
