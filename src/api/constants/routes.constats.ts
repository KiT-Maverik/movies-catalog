export const routes = {
    root: '/',
    home: '/home',
    movie: (id = ':movieId') => `movie/${id}`,
}
