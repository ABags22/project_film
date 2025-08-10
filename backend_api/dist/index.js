"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const db_1 = __importDefault(require("./config/db"));
const film_routes_1 = __importDefault(require("./routes/film.routes"));
// ✅ Inisialisasi environment variables
dotenv_1.default.config();
// ✅ Koneksi ke database
(0, db_1.default)();
// ✅ Inisialisasi express
const app = (0, express_1.default)();
const PORT = process.env.PORT || 10000;
// ✅ Middleware global
app.use((0, cors_1.default)());
app.use(express_1.default.json()); // untuk parsing body JSON
// ✅ Serve file statis (jika ada gambar lokal)
app.use("/uploads", express_1.default.static("public/uploads"));
// ✅ Routes
app.use("/api/films", film_routes_1.default);
// ✅ Test route (opsional)
app.get("/", (_req, res) => {
    res.send("🎬 API Film is running...");
});
// ✅ Jalankan server
app.listen(PORT, () => {
    console.log(`🚀 Server running at http://localhost:${PORT}`);
});
