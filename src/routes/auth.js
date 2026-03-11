const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const router = express.Router();
const { Usuario } = require("../models");

const SECRET_KEY = "mi_clave_secreta"; // Cambiarla y guardarla en .env

// POST/Login
router.post("/login", async (req, res) => {
	try {
		const { email, password } = req.body;

		const usuario = await Usuario.findOne({ where: { email }});
		if (!usuario) {
			return res.status(401).json({ error: "Usuario no encontrado" });
		}

		const validPassword = await bcrypt.compare(password, usuario.password);
		if (!validPassword) {
			return res.status(401).json({ error: "Contraseña incorrecta" });
		}

		// Generar token
		const token = jwt.sign(
			{ id: usuario.id, email: usuario.email },
			SECRET_KEY,
			{ expiresIn: "1h" }
		);

		res.json({ token, usuario: { id: usuario.id, nombre: usuario.nombre }});
	} catch (err) {
		console.error("Error en login:", err);
		res.status(500).json({ error: "❌ Error en el servidor" });
	}
});

module.exports = router;