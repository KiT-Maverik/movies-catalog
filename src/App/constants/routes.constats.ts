export const routes = {
    root: '/',
    home: '/HomePage',
    movie: (id = ':movieId') => `movie/${id}`,
}
