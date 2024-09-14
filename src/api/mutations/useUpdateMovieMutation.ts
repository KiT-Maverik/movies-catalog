import axios from "axios";
import {useMutation, useQuery, useQueryClient} from "@tanstack/react-query";

import {queryKey, endpoint} from "api";

export const useUpdateMovieMutation = (updatedData: { id: number; name: string; }) => {
    const {isLoading} = useQuery({ queryKey: [queryKey.deleteMovie], queryFn: async () => await axios.delete(endpoint.movie.getById(updatedData.id)) })

    const queryClient = useQueryClient()

    useMutation({
        mutationFn: async () => await axios.patch(endpoint.movie.getById(updatedData.id), {...updatedData}),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: [queryKey.getMoviesList] })
        },
    })

    return {deleteMovieMutation: { isLoading}}
}
