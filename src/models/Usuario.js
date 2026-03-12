const { Model, DataTypes } = require("sequelize");
const { sequelize } = require(".");

class Usuario extends Model {
	static associate(models) {
		Usuario.hasMany(models.Reserva, { onDelete: "CASCADE" });
	}
}

module.exports = (sequelize) => {
	Usuario.init(
		{
			nombre: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			email: {
				type: DataTypes.STRING,
				allowNull: false,
				unique: true,
			},
		},
		{
			sequelize,
			modelName: "Usuario",
		}
	);
	return Usuario;
};