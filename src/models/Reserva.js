const { Model, DataTypes } = require("sequelize");
const { sequelize } = require(".");

class Reserva extends Model {
  static associate(models) {
    Reserva.belongsTo(models.Usuario, {
      foreignKey: { allowNull: false },
      onDelete: "CASCADE",
    });
    Reserva.belongsTo(models.Recurso, {
      foreignKey: { allowNull: false },
      onDelete: "CASCADE",
    });
  }
}

module.exports = (sequelize) => {
  Reserva.init(
    {
      fecha: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Reserva",
    }
  );
  return Reserva;
}