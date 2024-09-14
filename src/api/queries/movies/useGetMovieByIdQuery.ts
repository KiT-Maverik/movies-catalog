import {useQuery} from "@tanstack/react-query";

import {queryKey, Movie, endpoint, api} from "api";

export const useGetMovieByIdQuery = (id: number) => {
    const {isLoading, data} = useQuery({ queryKey: [queryKey.getMovieById], queryFn: async () => await api.get<Movie>(endpoint.movie.getById(id)) })

    return {getMovieByIdQuery: { isLoading, movie: data?.data }}
}
