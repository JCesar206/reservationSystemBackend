const { DataTypes } = require("sequelize");
const sequelize = require("../config/db.js");

const Recurso = sequelize.define("Recurso", {
	nombre: { type: DataTypes.STRING, allowNull: false },
	tipo: { type: DataTypes.STRING }
});

module.exports = Recurso;