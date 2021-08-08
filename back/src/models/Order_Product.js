const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Order_Product",
    {
      price: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      quantity: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
    },
    // { freezeTableName: true },
    { timestamps: false } 
  );
};
