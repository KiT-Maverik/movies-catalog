import { useQuery } from "@tanstack/react-query";

import { queryKey, GetMoviesList_Response, endpoint, api } from "api";

export const useGetMoviesListQuery = () => {
  const { isLoading, data } = useQuery({
    queryKey: [queryKey.getMoviesList],
    queryFn: async () =>
      await api.get<GetMoviesList_Response>(endpoint.movie.getList),
  });

  return { getMoviesListQuery: { isLoading, moviesList: data?.data || [] } };
};
