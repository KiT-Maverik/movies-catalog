const express = require('express')
const movies = require('./data/movies.data')
const app = express()
const port = 3001

app.get('/movies', (req, res) => {
    res.json(movies)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
