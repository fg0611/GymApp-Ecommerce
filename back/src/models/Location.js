const { DataTypes } = require("sequelize");
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "location",
    {
      description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      lat: {
        type: DataTypes.FLOAT,
        defaultValue: 0,
        allowNull: false,
      },
      lng: {
        type: DataTypes.FLOAT,
        defaultValue: 0,
        allowNull: false,
      },
      images: {
        type: DataTypes.ARRAY(DataTypes.STRING),
      },
    },

    {
      freezeTableName: true,
    },
    { timestamps: false }
  );
};
