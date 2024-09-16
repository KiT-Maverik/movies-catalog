import {useMutation, useQueryClient} from "@tanstack/react-query";

import {queryKey, endpoint, api, Movie} from "api";

type NewType = Pick<Movie, 'id'> & Partial<Omit<Movie, 'id'>>;


export const useUpdateMovieMutation = () => {
    const queryClient = useQueryClient()

    const updateMovieMutation = useMutation({
        mutationFn: async ({id, title}: NewType) => await api.patch(endpoint.movie.getById(id), {title}),
        onSuccess: (_, {id}) => {
            queryClient.invalidateQueries({ queryKey: [queryKey.getMoviesList] })
            queryClient.invalidateQueries({ queryKey: [queryKey.getMovieById(id)] })
        },
    })

    return {updateMovieMutation}
}
