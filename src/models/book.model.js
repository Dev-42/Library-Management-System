const { DataTypes } = require("sequelize");
const sequelize = require("../models/config/db");
const Author = require("./author.model");

const Book = sequelize.define("Book", {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  title: { type: DataTypes.STRING, allowNull: false },
  description: { type: DataTypes.TEXT },
  publicationYear: { type: DataTypes.INTEGER, allowNull: false },
});

Book.belongsTo(Author, { foreignKey: { name: "authorId", allowNull: false } });

module.exports = Book;
