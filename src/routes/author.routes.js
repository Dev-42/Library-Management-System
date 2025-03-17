const express = require("express");
const { Author, Book } = require("../models");
const router = express.Router();

// retrive all the authors
router.get("/", async (req, res) => {
  try {
    const authors = await Author.findAll();
    if (authors) {
      return res.status(200).json({ authors });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

// Add a new author
router.post("/new", async (req, res) => {
  try {
    const { name, birthdate, email } = req.body;
    const author = await Author.create({ name, birthdate, email });
    res.status(201).json(author);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

router.get("/:authorId/books", async (req, res) => {
  const { authorId } = req.params;
  const books = await Book.findAll({ where: { authorId }, include: [Author] });
  res.json(books);
});

module.exports = router;
