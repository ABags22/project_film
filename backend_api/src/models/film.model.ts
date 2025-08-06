import mongoose from "mongoose";

const FilmSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    year: { type: Number, required: true },
    genre: [{ type: String }],
    rating: { type: Number },
    image: { type: String },
  },
  { timestamps: true }
);

const Film = mongoose.model("Film", FilmSchema);

export default Film;
