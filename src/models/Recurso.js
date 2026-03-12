const { Model, DataTypes } = require("sequelize");
const { sequelize } = require(".");

class Recurso extends Model {
	static associate(models) {
		Recurso.hasMany(models.Reserva, { onDelete: "CASCADE" });
	}
}

module.exports = (sequelize) => {
	Recurso.init(
		{
			nombre: {
				type: DataTypes.STRING,
				allowNull: false,
			},
		},
		{
			sequelize,
			modelName: "Recurso",
		}
	);
	return Recurso;
}