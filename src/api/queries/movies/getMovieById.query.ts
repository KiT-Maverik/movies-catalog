import {useCallback, useState} from "react";
import axios from "axios";
import {endpoint} from "api/constants/endpoints.constats";

export const useGetMovieByIdQuery = () => {
    const [loading, setLoading] = useState(false)
    const [movie, setMovie] = useState({})

    const getMovieById = useCallback((id: string) => {
        setLoading(true)
        axios.get(endpoint.movie.getById(id))
            .then((response) => { setMovie(response.data) })
            .catch((error) => {})
            .finally(() => setLoading(false))
    }, []);

    return {loading, movie }
}
