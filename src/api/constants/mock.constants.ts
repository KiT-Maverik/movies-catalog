import {Movie} from "api/contracts/movie/entities/entities";

export const movies: Movie[] = [
    {
        id: 1,
        title: "Inception",
        cover: "https://example.com/inception.jpg",
        year: 2010,
        genre: "Science Fiction",
        director: "Christopher Nolan",
        cast: ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Ellen Page"],
        plotSummary: "A skilled thief is given a chance at redemption if he can successfully plant an idea into a target's subconscious.",
        rating: 4.8
    },
    {
        id: 2,
        title: "The Godfather",
        cover: "https://example.com/godfather.jpg",
        year: 1972,
        genre: "Crime",
        director: "Francis Ford Coppola",
        cast: ["Marlon Brando", "Al Pacino", "James Caan"],
        plotSummary: "The aging patriarch of an organized crime dynasty transfers control of his empire to his reluctant son.",
        rating: 5.0
    },
    {
        id: 3,
        title: "The Dark Knight",
        cover: "https://example.com/dark_knight.jpg",
        year: 2008,
        genre: "Action",
        director: "Christopher Nolan",
        cast: ["Christian Bale", "Heath Ledger", "Aaron Eckhart"],
        plotSummary: "Batman faces the Joker, a criminal mastermind who wants to plunge Gotham City into anarchy.",
        rating: 4.9
    },
    {
        id: 4,
        title: "Pulp Fiction",
        cover: "https://example.com/pulp_fiction.jpg",
        year: 1994,
        genre: "Crime",
        director: "Quentin Tarantino",
        cast: ["John Travolta", "Uma Thurman", "Samuel L. Jackson"],
        plotSummary: "The lives of two mob hitmen, a boxer, a gangster's wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
        rating: 4.7
    },
    {
        id: 5,
        title: "Forrest Gump",
        cover: "https://example.com/forrest_gump.jpg",
        year: 1994,
        genre: "Drama",
        director: "Robert Zemeckis",
        cast: ["Tom Hanks", "Robin Wright", "Gary Sinise"],
        plotSummary: "The story of a man with a low IQ who unintentionally influences several historical events in the 20th century USA.",
        rating: 4.6
    },
    {
        id: 6,
        title: "Gladiator",
        cover: "https://example.com/gladiator.jpg",
        year: 2000,
        genre: "Action",
        director: "Ridley Scott",
        cast: ["Russell Crowe", "Joaquin Phoenix", "Connie Nielsen"],
        plotSummary: "A betrayed Roman general sets out to exact vengeance against the corrupt emperor who murdered his family.",
        rating: 4.5
    },
    {
        id: 7,
        title: "Titanic",
        cover: "https://example.com/titanic.jpg",
        year: 1997,
        genre: "Romance",
        director: "James Cameron",
        cast: ["Leonardo DiCaprio", "Kate Winslet", "Billy Zane"],
        plotSummary: "A young couple from different social classes fall in love aboard the ill-fated voyage of the RMS Titanic.",
        rating: 4.4
    },
    {
        id: 8,
        title: "Jurassic Park",
        cover: "https://example.com/jurassic_park.jpg",
        year: 1993,
        genre: "Adventure",
        director: "Steven Spielberg",
        cast: ["Sam Neill", "Laura Dern", "Jeff Goldblum"],
        plotSummary: "During a preview tour, a theme park suffers a major power breakdown that allows its cloned dinosaur exhibits to run amok.",
        rating: 4.7
    },
    {
        id: 9,
        title: "The Shawshank Redemption",
        cover: "https://example.com/shawshank_redemption.jpg",
        year: 1994,
        genre: "Drama",
        director: "Frank Darabont",
        cast: ["Tim Robbins", "Morgan Freeman", "Bob Gunton"],
        plotSummary: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
        rating: 5.0
    },
    {
        id: 10,
        title: "The Matrix",
        cover: "https://example.com/matrix.jpg",
        year: 1999,
        genre: "Science Fiction",
        director: "Lana Wachowski, Lilly Wachowski",
        cast: ["Keanu Reeves", "Laurence Fishburne", "Carrie-Anne Moss"],
        plotSummary: "A computer hacker learns about the true nature of his reality and his role in the war against its controllers.",
        rating: 4.9
    },
];
