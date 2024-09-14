import axios, { AxiosResponse } from "axios";
import {useQuery} from "@tanstack/react-query";
import {query} from "api/constants/query-keys.constants";
import {Movie} from "../../contracts/movie/entities/entities";

export const useGetMoviesQuery = () => {
    const {isLoading, data} = useQuery({ queryKey: [query.getMoviesList], queryFn: async () => await axios.get<Movie[]>("/movies") })

    return { isLoading, moviesList: data?.data || [] }
}
