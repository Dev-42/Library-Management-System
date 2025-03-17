const express = require("express");
const { Book, Genre, Author } = require("../models");
const router = express.Router();

// Route to fetch all the books
router.get("/", async (req, res) => {
  const books = await Book.findAll({ include: [Author, Genre] });
  res.json(books);
});
// Route to add a new book
router.post("/", async (req, res) => {
  const { title, description, publicationYear, authorId, genreIds } = req.body;

  if (!title || !authorId)
    return res.status(400).json({ message: "Title and AuthorId are required" });

  const book = await Book.create({
    title,
    description,
    publicationYear,
    authorId,
  });
  if (genreIds && genreIds.length) {
    const genres = await Genre.findAll({ where: { id: genreIds } });
    await book.setGenres(genres);
  }

  res.status(201).json(book);
});

// Get authors by the genre id
router.get("/genres/:genreId", async (req, res) => {
  try {
    const { genreId } = req.params;
    const books = await Book.findAll({
      where: { genreId },
      include: [{ model: Author, attributes: ["name"] }],
    });
    const response = books.map((book) => ({
      authorName: book.Author.name,
      bookTitle: book.title,
    }));
    res.json(response);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
