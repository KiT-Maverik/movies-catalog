import {useCallback, useState} from "react";
import axios from "axios";
import {endpoint} from "api/constants/endpoints.constats";

export const useDeleteMovieMutation = () => {
    const [loading, setLoading] = useState(false)

    const getMovieById = useCallback((id: string) => {
        setLoading(true)
        axios.get(endpoint.movie.getById(id))
            .then((response) => { })
            .catch((error) => {})
            .finally(() => setLoading(false))
    }, []);

    return {loading }
}
