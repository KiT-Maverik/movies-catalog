require('dotenv').config();
const cors = require('cors');  // Import cors package
const express = require('express')
let movies = require('./data/movies.data')
const app = express()
const port = process.env.SERVER_PORT;

app.use(cors());
app.use(express.json());

app.get('/movies', (req, res) => {
    res.json(movies)
})

app.patch('/movies/:id', (req, res) => {
    movies = movies.map(movie => {
        if (movie.id === parseInt(req.params.id, 10)) return {...movie, ...req.body}
        else return movie
    });
    res.status(200).json({status: 'Movie updated'});
});

app.delete('/movies/:id', (req, res) => {
    movies = movies.filter(movie => movie.id !== parseInt(req.params.id, 10));
    res.status(204);
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
