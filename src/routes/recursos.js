const express = require("express");
const Recurso = require("../models/Recurso");
const router = express.Router();

// CRUD similar al de usuarios
router.post("/", async (req, res) => {
  try {
    const recurso = await Recurso.create(req.body);
    res.status(201).json(recurso);
  } catch (error) {
    console.error("❌ Error al crear recurso:", error);
    res.status(500).json({ error: "Error al crear recurso" });
  }
});

router.get("/", async (req, res) => {
  try {
    const recursos = await Recurso.findAll();
    res.json(recursos);
  } catch (error) {
    console.error("❌ Error al listar recursos:", error);
    res.status(500).json({ error: "Error al listar recursos" });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const recurso = await Recurso.findByPk(req.params.id);
    recurso ? res.json(recurso) : res.status(404).json({ error: "Recurso no encontrado" });
  } catch (error) {
    console.error("❌ Error al obtener recurso:", error);
    res.status(500).json({ error: "Error al obtener recurso" });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const recurso = await Recurso.findByPk(req.params.id);
    if (!recurso) return res.status(404).json({ error: "Recurso no encontrado" });
    await recurso.update(req.body);
    res.json(recurso);
  } catch (error) {
    console.error("❌ Error al actualizar recurso:", error);
    res.status(500).json({ error: "Error al actualizar recurso" });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const recurso = await Recurso.findByPk(req.params.id);
    if (!recurso) return res.status(404).json({ error: "Recurso no encontrado" });
    await recurso.destroy();
    res.json({ message: "Recurso eliminado" });
  } catch (error) {
    console.error("❌ Error al eliminar recurso:", error);
    res.status(500).json({ error: "Error al eliminar recurso" });
  }
});

module.exports = router;