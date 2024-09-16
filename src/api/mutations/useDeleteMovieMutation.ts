import { useMutation, useQueryClient } from "@tanstack/react-query";

import {
  queryKey,
  endpoint,
  DeleteMovie_Request,
  DeleteMovie_Response,
  api,
} from "api";

export const useDeleteMovieMutation = () => {
  const queryClient = useQueryClient();

  const deleteMovieMutation = useMutation({
    mutationFn: async ({ id }: DeleteMovie_Request) =>
      await api.delete<DeleteMovie_Response>(endpoint.movie.getById(id)),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [queryKey.getMoviesList] });
    },
  });

  return { deleteMovieMutation };
};
