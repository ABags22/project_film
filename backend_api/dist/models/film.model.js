"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const filmSchema = new mongoose_1.default.Schema({
    title: { type: String, required: true },
    year: { type: Number, required: true },
    genre: { type: [String], required: true },
    rating: { type: Number },
    image: { type: String },
}, { timestamps: true });
const Film = mongoose_1.default.model("Film", filmSchema); // gunakan 'filmSchema' (huruf kecil)
exports.default = Film;
