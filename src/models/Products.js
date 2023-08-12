const { DataTypes } = require("sequelize");
module.exports = (database) => {
  database.define(
    "Products",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true, // Marcar como clave primaria
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      image: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      precio: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      descuento: {
        type: DataTypes.STRING,
        // allowNull: false,
      },
      unidades: {
        type: DataTypes.STRING,
        // allowNull: false,
      },
      tallas: {
        type: DataTypes.STRING,
        // allowNull: false,
      },
    },
    { timestamps: false }
  );
};
// image,
// description,
// precio,
// descuento,
// unidades,
