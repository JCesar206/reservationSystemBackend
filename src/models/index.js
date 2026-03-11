const { Sequelize } = require("sequelize");
const sequelize = new Sequelize("reservas_db", "root", "password",{ 
	host: "localhost",
	dialect: "mysql",
});

// Importar modelos
const Usuario = require("./usuario")(sequelize);
const Recurso = require("./recurso")(sequelize);
const Reserva = require("./reserva")(sequelize);

// Asociaciones
Usuario.associate && Usuario.associate({ Reserva, Recurso });
Recurso.associate && Recurso.associate({ Reserva, Usuario });
Reserva.associate && Reserva.associate({ Usuario, Recurso });

module.exports = { sequelize, Usuario, Recurso, Reserva };