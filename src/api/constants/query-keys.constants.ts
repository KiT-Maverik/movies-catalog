import { GetMovieById_Request } from "api";

export const queryKey = {
  getMoviesList: "Get Movies List",
  getMovieById: ({ id }: GetMovieById_Request) => `Get Movie By Id (${id})`,
  updateMovie: "Update Movie",
  deleteMovie: "Delete Movie",
};
