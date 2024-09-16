import { useQuery } from "@tanstack/react-query";

import { queryKey, Movie, endpoint, api } from "api";

export const useGetMovieByIdQuery = (id: number) => ({
  getMovieByIdQuery: useQuery({
    queryKey: [queryKey.getMovieById(id)],
    queryFn: async () => await api.get<Movie>(endpoint.movie.getById(id)),
  }),
});
