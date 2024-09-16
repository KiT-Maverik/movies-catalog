require("dotenv").config();
const cors = require("cors"); // Import cors package
const express = require("express");
let movies = require("./data/movies.data");
const app = express();
const port = process.env.SERVER_PORT;
const delay = process.env.RESPONSE_DELAY;

// Delay middleware
const delayMiddleware = (req, res, next) => {
  setTimeout(() => {
    next();
  }, delay);
};

app.use(cors());
app.use(express.json());
app.use(delayMiddleware);

app.get("/movies", (req, res) => {
  res.json(movies);
});

app.get("/movies/:id", (req, res) => {
  res
    .status(200)
    .json(movies.find((movie) => movie.id === parseInt(req.params.id)));
});

app.patch("/movies/:id", (req, res) => {
  movies = movies.map((movie) => {
    if (movie.id === parseInt(req.params.id, 10))
      return { ...movie, ...req.body };
    else return movie;
  });
  res.status(200).json({ message: "Movie updated" });
});

app.delete("/movies/:id", (req, res) => {
  movies = movies.filter((movie) => movie.id !== parseInt(req.params.id, 10));
  res.status(204).json({ message: "Movie deleted" });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
