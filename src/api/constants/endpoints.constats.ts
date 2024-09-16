import { MovieId } from "api";

export const endpoint = {
  movie: {
    getById: (id: MovieId) => `movies/${id}`,
    getList: "movies",
  },
};
