const sequelize = require("../models/config/db");
const Author = require("./author.model");
const Book = require("./book.model");
const Genre = require("./genre.model");

Book.belongsToMany(Genre, { through: "BookGenres" });
Genre.belongsToMany(Book, { through: "BookGenres" });

module.exports = { sequelize, Author, Book, Genre };
