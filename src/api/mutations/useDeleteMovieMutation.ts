import { useMutation, useQueryClient } from "@tanstack/react-query";

import { queryKey, endpoint, api } from "api";

export const useDeleteMovieMutation = () => {
  const queryClient = useQueryClient();

  const deleteMovieMutation = useMutation({
    mutationFn: async (id: number) =>
      await api.delete(endpoint.movie.getById(id)),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [queryKey.getMoviesList] });
    },
  });

  return { deleteMovieMutation };
};
