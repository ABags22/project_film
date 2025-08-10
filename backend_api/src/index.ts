import express, { Application, Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db";
import filmRoutes from "./routes/film.routes";

// ✅ Load environment variables
dotenv.config();

// ✅ Pastikan MONGO_URI ada
if (!process.env.MONGO_URI) {
  console.error("❌ MONGO_URI is not defined in environment variables");
  process.exit(1);
}

// ✅ Koneksi ke MongoDB
connectDB();

// ✅ Inisialisasi Express
const app: Application = express();
const PORT: number = Number(process.env.PORT) || 10000;

// ✅ Middleware global
app.use(cors());
app.use(express.json());

// ✅ Serve file statis
app.use("/uploads", express.static("public/uploads"));

// ✅ Routes
app.use("/api/films", filmRoutes);

// ✅ Test route
app.get("/", (_req: Request, res: Response) => {
  res.send("🎬 API Film is running...");
});

// ✅ Jalankan server
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
