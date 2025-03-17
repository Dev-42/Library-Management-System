const express = require("express");
const { Author, Book } = require("../models");
const router = express.Router();

router.get("/:authorId/books", async (req, res) => {
  const { authorId } = req.params;
  const books = await Book.findAll({ where: { authorId }, include: [Author] });
  res.json(books);
});

module.exports = router;
