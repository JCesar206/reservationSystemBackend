const app = require("./app.js");
const sequelize = require("./config/db.js");

const PORT = process.env.PORT || 4000;

sequelize.authenticate()
.then(() => {
	console.log("✅ Conectado a MySQL");
	app.listen(PORT, () => console.log(`Servidor escuchando en http://localhost:${PORT}`));
})
.catch(err => console.error("❌ Error de conexión:", err));

// npm run seed -> Correr el seed de la DB
// npm start -> Correr el server