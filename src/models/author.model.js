const { DataTypes } = require("sequelize");
const sequelize = require("../models/config/db");

const Author = sequelize.define("Author", {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  name: { type: DataTypes.STRING, allowNull: false },
  birthdate: { type: DataTypes.DATEONLY, allowNull: false },
  email: { type: DataTypes.STRING, unique: true, allowNull: false },
});

module.exports = Author;
