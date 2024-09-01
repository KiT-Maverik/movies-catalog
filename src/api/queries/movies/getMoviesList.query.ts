import {useCallback, useState} from "react";
import axios from "axios";
import {endpoint} from "api/constants/endpoints.constats";

export const useGetMoviesListQuery = () => {
    const [loading, setLoading] = useState(false)
    const [movies, setMovies] = useState({})

    const getMoviesList = useCallback(() => {
        setLoading(true)
        axios.get(endpoint.movie.getList)
            .then((response) => { setMovies(response.data) })
            .catch((error) => {})
            .finally(() => setLoading(false))
    }, []);

    return {loading, movies }
}
