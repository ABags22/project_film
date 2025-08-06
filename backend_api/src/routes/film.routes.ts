import express from "express";
import {
  getAllFilms,
  createFilm,
  getFilmById,
  updateFilm,
  deleteFilm,
} from "../controllers/film.controller";

const router = express.Router();

// Get all films
router.get("/", getAllFilms); // GET /api/films

// Get single film by ID
router.get("/:id", getFilmById); // GET /api/films/:id

// Create new film
router.post("/", createFilm); // POST /api/films

// Update film by ID
router.put("/:id", updateFilm); // PUT /api/films/:id

// Delete film by ID
router.delete("/:id", deleteFilm); // DELETE /api/films/:id

export default router;
