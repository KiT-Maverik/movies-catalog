import {useMutation, useQueryClient} from "@tanstack/react-query";

import {queryKey, endpoint, api} from "api";

export const useDeleteMovieMutation = (id: number) => {
    const queryClient = useQueryClient()

    const deleteMovieMutation = useMutation({
        mutationFn: async () => await api.delete(endpoint.movie.getById(id)),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: [queryKey.getMoviesList] })
        },
    })

    return {deleteMovieMutation}
}
