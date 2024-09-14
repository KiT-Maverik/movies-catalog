import axios from "axios";
import {useMutation, useQuery, useQueryClient} from "@tanstack/react-query";

import {queryKey, endpoint} from "api";

export const useDeleteMovieMutation = (id: number) => {
    const {isLoading} = useQuery({ queryKey: [queryKey.deleteMovie], queryFn: async () => await axios.delete(endpoint.movie.getById(id)) })

    const queryClient = useQueryClient()

    useMutation({
        mutationFn: async () => await axios.delete(endpoint.movie.getById(id)),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: [queryKey.getMoviesList] })
        },
    })

    return {deleteMovieMutation: { isLoading}}
}
