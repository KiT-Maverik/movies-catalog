import {useCallback, useState} from "react";
import axios from "axios";
import {routes} from "api/constants/routes.constats";

export const useGetMoviesListQuery = () => {
    const [loading, setLoading] = useState(false)
    const [movies, setMovies] = useState({})

    const getMoviesList = useCallback(() => {
        setLoading(true)
        axios.get(routes.movie.getMoviesList)
            .then((response) => { setMovies(response.data) })
            .catch((error) => {})
            .finally(() => setLoading(false))
    }, []);

    return {loading, movies }
}
