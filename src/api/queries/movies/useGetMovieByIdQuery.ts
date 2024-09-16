import { useQuery } from "@tanstack/react-query";

import {
  queryKey,
  GetMovieById_Response,
  GetMovieById_Request,
  endpoint,
  api,
} from "api";

export const useGetMovieByIdQuery = ({ id }: GetMovieById_Request) => ({
  getMovieByIdQuery: useQuery({
    queryKey: [queryKey.getMovieById({ id })],
    queryFn: async () =>
      await api.get<GetMovieById_Response>(endpoint.movie.getById(id)),
  }),
});
