export const route = {
  home: "/",
  movie: (id: string = ":movieId") => `movie/${id}`,
};
