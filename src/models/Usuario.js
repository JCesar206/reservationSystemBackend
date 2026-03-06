const { DataTypes } = require("sequelize");
const sequelize = require("../config/db.js");

const Usuario = sequelize.define("Usuario", {
	nombre: { type: DataTypes.STRING, allowNull: false },
	email: { type: DataTypes.STRING, unique: true, allowNull: false }
});

module.exports = Usuario;