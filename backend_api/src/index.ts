import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db";
import filmRoutes from "./routes/film.routes";

// Inisialisasi dotenv dan koneksi database terlebih dahulu
dotenv.config();
connectDB();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Serve static image files from public/uploads
app.use("/uploads", express.static("public/uploads"));

// Gunakan route film setelah deklarasi app
app.use("/api/films", filmRoutes);

// (Opsional) Route testing manual
app.get("/", (req, res) => {
  res.send("API is running...");
});

// Jalankan server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
