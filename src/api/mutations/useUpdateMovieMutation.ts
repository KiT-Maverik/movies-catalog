import {useMutation, useQueryClient} from "@tanstack/react-query";

import {queryKey, endpoint, api} from "api";

export const useUpdateMovieMutation = (updatedData: { id: number; name: string; }) => {
    const queryClient = useQueryClient()

    const deleteMovieMutation = useMutation({
        mutationFn: async () => await api.patch(endpoint.movie.getById(updatedData.id), {...updatedData}),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: [queryKey.getMoviesList] })
        },
    })

    return {deleteMovieMutation}
}
