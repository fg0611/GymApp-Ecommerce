const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "user",
    {
      uuid: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
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
      isAdmin: {
        type: DataTypes.BOOLEAN,
        default: false,
      },
      shippingCost: {
        type: DataTypes.FLOAT,
      },
      shippingAddress: {
        type: DataTypes.STRING,
      },
      shippingZip: {
        type: DataTypes.STRING,
      },
      shippingCity: {
        type: DataTypes.STRING,
      },
      shippingState: {
        type: DataTypes.STRING,
      },
      firstName: {
        type: DataTypes.STRING,
      },
      lastName: {
        type: DataTypes.STRING,
      },
      comments: {
        type: DataTypes.STRING,
      },
      paymentDetails: {
        type: DataTypes.STRING,
      },
    },
    { timestamps: false }
  );
};
