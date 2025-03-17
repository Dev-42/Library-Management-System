const { DataTypes } = require("sequelize");
const sequelize = require("../models/config/db");

const Genre = sequelize.define("Genre", {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  name: { type: DataTypes.STRING, allowNull: false, unique: true },
  description: { type: DataTypes.TEXT },
});

module.exports = Genre;
