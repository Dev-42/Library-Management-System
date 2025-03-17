const express = require("express");
const { Genre, Book } = require("../models");
const router = express.Router();

router.get("/:genreId/books", async (req, res) => {
  const { genreId } = req.params;
  const genre = await Genre.findByPk(genreId, { include: Book });

  if (!genre) return res.status(404).json({ message: "Genre not found" });

  res.json(genre.Books);
});

module.exports = router;
