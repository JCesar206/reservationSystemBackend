const express = require("express");
const Reserva = require("../models/Reserva");
const Usuario = require("../models/Usuario");
const Recurso = require("../models/Recurso");
const router = express.Router();

// Crear reserva
router.post("/", async (req, res) => {
  try {
    const { fecha, UsuarioId, RecursoId } = req.body;
    const reserva = await Reserva.create({ fecha, UsuarioId, RecursoId });
    res.status(201).json(reserva);
  } catch (error) {
    console.error("❌ Error al crear reserva:", error);
    res.status(500).json({ error: "Error al crear reserva" });
  }
});

// Listar reservas con relaciones
router.get("/", async (req, res) => {
  try {
    const reservas = await Reserva.findAll({ include: [Usuario, Recurso] });
    res.json(reservas);
  } catch (error) {
    console.error("❌ Error al listar reservas:", error);
    res.status(500).json({ error: "Error al listar reservas" });
  }
});

// Obtener reserva por ID
router.get("/:id", async (req, res) => {
  try {
    const reserva = await Reserva.findByPk(req.params.id, { include: [Usuario, Recurso] });
    reserva ? res.json(reserva) : res.status(404).json({ error: "Reserva no encontrada" });
  } catch (error) {
    console.error("❌ Error al obtener reserva:", error);
    res.status(500).json({ error: "Error al obtener reserva" });
  }
});

// Actualizar reserva
router.put("/:id", async (req, res) => {
  try {
    const reserva = await Reserva.findByPk(req.params.id);
    if (!reserva) return res.status(404).json({ error: "Reserva no encontrada" });
    await reserva.update(req.body);
    res.json(reserva);
  } catch (error) {
    console.error("❌ Error al actualizar reserva:", error);
    res.status(500).json({ error: "Error al actualizar reserva" });
  }
});

// Eliminar reserva
router.delete("/:id", async (req, res) => {
  try {
    const reserva = await Reserva.findByPk(req.params.id);
    if (!reserva) return res.status(404).json({ error: "Reserva no encontrada" });
    await reserva.destroy();
    res.json({ message: "Reserva eliminada" });
  } catch (error) {
    console.error("❌ Error al eliminar reserva:", error);
    res.status(500).json({ error: "Error al eliminar reserva" });
  }
});

module.exports = router;