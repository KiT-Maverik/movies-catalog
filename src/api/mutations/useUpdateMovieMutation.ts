import { useMutation, useQueryClient } from "@tanstack/react-query";

import {
  queryKey,
  endpoint,
  api,
  UpdateMovie_Request,
  UpdateMovie_Response,
} from "api";

export const useUpdateMovieMutation = () => {
  const queryClient = useQueryClient();

  const updateMovieMutation = useMutation({
    mutationFn: async ({ id, data }: UpdateMovie_Request) =>
      await api.patch<UpdateMovie_Response>(endpoint.movie.getById(id), {
        data,
      }),
    onSuccess: (_, { id }) => {
      queryClient.invalidateQueries({ queryKey: [queryKey.getMoviesList] });
      queryClient.invalidateQueries({
        queryKey: [queryKey.getMovieById({ id })],
      });
    },
  });

  return { updateMovieMutation };
};
