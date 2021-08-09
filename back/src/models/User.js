const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "user",
    {
      id: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        isEmail: true,
      },
      password: {
        type: DataTypes.STRING,
      },
      userType: {
        type: DataTypes.ENUM("S", "A", "B", "C", "D", "F"), // usuario S superusuario, A admin, B usuario normal. C invitado / usuario no registrado, D usuario baneado, F usuario inactivo
        defaultValue: "B", // por defecto se crean usuarios normales
        allowNull: true,
      },
      firstName: {
        type: DataTypes.STRING,
      },
      lastName: {
        type: DataTypes.STRING,
      },
    },
    { timestamps: false }
  );
};
