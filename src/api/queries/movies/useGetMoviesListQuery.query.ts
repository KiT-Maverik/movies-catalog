import axios from "axios";
import {useQuery} from "@tanstack/react-query";
import {query} from "api/constants/query-keys.constants";
import {Movie} from "../../contracts/movie/entities/entities";

export const useGetMoviesListQuery = () => {
    const {isLoading, data} = useQuery({ queryKey: [query.getMoviesList], queryFn: async () => await axios.get<Movie[]>("/movies") })

    return {getMoviesListQuery: { isLoading, moviesList: data?.data || [] }}
}
