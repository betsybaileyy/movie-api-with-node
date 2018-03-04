const express = require('express');

const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());


const movies = [
    {
        name: 'Forrest Gump',
        year: 1995,
        id: 1,
    },

    {
        name: 'Momento',
        year: 2001,
        id: 2,
    },
    {
        name: 'Frozen',
        year: 2014,
        id: 3,
    },
];

app.get('/', (req, res) => {
    res.json('hello Nashville');
});

app.get('/movies', (req, res) => {
    res.json(movies);
});

app.get('/movies/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const movie = movies.find((m) => m.id === id);
    res.json(movie)
})

app.post('/movies', (req, res) => {
    const name = req.body.name;
    const year = req.body.year;
    const id = movies[movies.length - 1].id + 1;
    const movie = {
        name: name,
        year: year,
        id: id
    }
    movies.push(movie);
    res.json(id)
})

app.listen(3000);

console.log('server running on port 3000');
