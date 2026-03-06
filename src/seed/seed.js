const sequelize = require("../config/db.js");
const Usuario = require("../models/Usuario.js");
const Recurso = require("../models/Recurso.js");
const Reserva = require("../models/Reserva.js");

async function seed() {
	try {
		await sequelize.sync({ force: true }); // Recrea tablas
		console.log("✅ Tablas creadas");

		const user1 = await Usuario.create({ nombre: "Julio", email: "julio@test.com" });
		const recurso1 = await Recurso.create({ nombre: "Sala A", tipo: "Sala" });

		await Reserva.create({ fecha: new Date(), UsuarioId: user1.isSoftDeleted, RecursoId: recurso1.id });
		console.log("🌱 Datos de prueba insertados");
	} catch (error) {
		console.error("❌ Error en seed:", error);
	} finally {
		await sequelize.close();
	}
}

seed();