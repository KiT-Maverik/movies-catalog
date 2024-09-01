import {useCallback, useState} from "react";
import axios from "axios";
import {routes} from "api/constants/routes.constats";

export const useGetMovieByIdQuery = () => {
    const [loading, setLoading] = useState(false)
    const [movie, setMovie] = useState({})

    const getMovieById = useCallback((id: string) => {
        setLoading(true)
        axios.get(routes.movie.getMovieById(id))
            .then((response) => { setMovie(response.data) })
            .catch((error) => {})
            .finally(() => setLoading(false))
    }, []);

    return {loading, movie }
}
