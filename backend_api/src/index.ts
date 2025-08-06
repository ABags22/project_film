import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db";
import filmRoutes from "./routes/film.routes";

// ✅ Inisialisasi environment variables
dotenv.config();

// ✅ Koneksi ke database
connectDB();

// ✅ Inisialisasi express
const app = express();
const PORT = process.env.PORT || 10000;

// ✅ Middleware global
app.use(cors());
app.use(express.json()); // untuk parsing body JSON

// ✅ Serve file statis (jika ada gambar lokal)
app.use("/uploads", express.static("public/uploads"));

// ✅ Routes
app.use("/api/films", filmRoutes);

// ✅ Test route (opsional)
app.get("/", (_req, res) => {
  res.send("🎬 API Film is running...");
});

// ✅ Jalankan server
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
