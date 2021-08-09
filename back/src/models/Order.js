const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "order",
    {
      uuid: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      orderState: {
        type: DataTypes.ENUM("cart", "processing", "cancelled", "completed"),
        defaultValue: "cart",
        allowNull: true,
      },
      shippingState: {
        type: DataTypes.ENUM(
          "initial", //appears as soon as payment is verified
          "created",
          "processing",
          "cancelled",
          "completed"
        ),
        allowNull: true,
      },
    },
    { timestamps: false }
    // createdAT does not appear
    // updateAT does not appear
  );
};
