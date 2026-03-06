const { DataTypes } = require("sequelize");
const sequelize = require("../config/db.js");
const Usuario = require("./Usuario.js");
const Recurso = require("./Recurso.js");

const Reserva = sequelize.define("Reserva", {
	fecha: { type: DataTypes.DATE, allowNull: false }
});

// Relaciones
Usuario.hasMany(Reserva);
Reserva.belongsTo(Usuario);

Recurso.hasMany(Reserva);
Reserva.belongsTo(Recurso);

module.exports = Reserva;