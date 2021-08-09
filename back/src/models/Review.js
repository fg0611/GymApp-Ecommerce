const { DataTypes, NUMBER, STRING, INTEGER } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "review",
    {
      comment: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      rating: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      productId: {
        type: INTEGER,
        allowNull: false,
      },
      userId: {
        type: STRING,
        allowNull: false,
      },
    },
    { timestamps: false }
  );
};
