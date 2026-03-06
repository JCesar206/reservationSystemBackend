const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const usuariosRoutes = require("./routes/usuarios.js");
const recursosRoutes = require("./routes/recursos.js");
const reservasRoutes = require("./routes/reservas.js");

const app = express();

// Middlewares
app.use(cors()); // Habilita CORS para todas las rutas
app.use(express.json()); // Parse JSON en body
app.use(morgan("dev")); // Logs Http

// Rutas
app.use("/usuarios", usuariosRoutes);
app.use("/recursos", recursosRoutes);
app.use("/reservas", reservasRoutes);

module.exports = app;