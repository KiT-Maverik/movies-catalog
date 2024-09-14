import axios from "axios";
import {useQuery} from "@tanstack/react-query";

import {queryKey, Movie, endpoint} from "api";

export const useGetMoviesListQuery = () => {
    const {isLoading, data} = useQuery({ queryKey: [queryKey.getMoviesList], queryFn: async () => await axios.get<Movie[]>(endpoint.movie.getList) })

    return {getMoviesListQuery: { isLoading, moviesList: data?.data || [] }}
}
