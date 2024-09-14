import axios from "axios";
import {useQuery} from "@tanstack/react-query";

import {queryKey, Movie, endpoint} from "api";

export const useGetMovieByIdQuery = (id: number) => {
    const {isLoading, data} = useQuery({ queryKey: [queryKey.getMovieById], queryFn: async () => await axios.get<Movie>(endpoint.movie.getById(id)) })

    return {getMovieByIdQuery: { isLoading, movie: data?.data }}
}
