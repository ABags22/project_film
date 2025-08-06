import mongoose from "mongoose";

const filmSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    year: { type: Number, required: true },
    genre: { type: [String], required: true },
    rating: { type: Number },
    image: { type: String },
  },
  { timestamps: true }
);

const Film = mongoose.model("Film", filmSchema); // gunakan 'filmSchema' (huruf kecil)

export default Film;
