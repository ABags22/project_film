"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const film_controller_1 = require("../controllers/film.controller");
const router = express_1.default.Router();
// Get all films
router.get("/", film_controller_1.getAllFilms); // GET /api/films
// Get single film by ID
router.get("/:id", film_controller_1.getFilmById); // GET /api/films/:id
// Create single film
router.post("/", film_controller_1.createFilm); // POST /api/films
// Create many films (bulk)
router.post("/bulk", film_controller_1.createManyFilms); // POST /api/films/bulk
// Update film by ID
router.put("/:id", film_controller_1.updateFilm); // PUT /api/films/:id
// Delete film by ID
router.delete("/:id", film_controller_1.deleteFilm); // DELETE /api/films/:id
exports.default = router;
