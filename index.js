require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { sequelize } = require("./src/models");
const bookRoutes = require("./src/routes/book.routes");
const authorRoutes = require("./src/routes/author.routes");
const genreRoutes = require("./src/routes/genre.routes");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/books", bookRoutes);
app.use("/authors", authorRoutes);
app.use("/genres", genreRoutes);

sequelize.sync().then(() => {
  app.listen(5000, () => console.log("Server running on port 5000"));
});
