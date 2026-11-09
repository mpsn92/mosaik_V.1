// server.js
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json()); // Para parsear JSON en las peticiones POST

// Conexión a MongoDB
const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017/mosaik";
mongoose
  .connect(MONGO_URI)
  .then(() => console.log("✅ Conectado a MongoDB"))
  .catch((err) => console.error("❌ Error de conexión a MongoDB:", err));

// Modelo de Datos (Mongoose)
const ExperienciaSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  descripcion: { type: String, required: true },
  precio: { type: Number, required: true },
  categoria: { type: String, default: "General" },
});

const Experiencia = mongoose.model("Experiencia", ExperienciaSchema);

// Rutas de la API
// 1. Obtener todas las experiencias
app.get("/api/experiencias", async (req, res) => {
  try {
    const experiencias = await Experiencia.find();
    res.json(experiencias);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener las experiencias" });
  }
});

// 2. Crear una nueva experiencia (Útil para la demo de tu proyecto)
app.post("/api/experiencias", async (req, res) => {
  try {
    const nuevaExperiencia = new Experiencia(req.body);
    await nuevaExperiencia.save();
    res.status(201).json(nuevaExperiencia);
  } catch (error) {
    res.status(400).json({ error: "Error al crear la experiencia" });
  }
});

// Servir el frontend estático
app.use(express.static("."));

app.listen(PORT, () => {
  console.log(`🚀 Servidor backend corriendo en http://localhost:${PORT}`);
});
