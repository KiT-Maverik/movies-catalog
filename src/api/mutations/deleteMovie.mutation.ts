import {useCallback, useState} from "react";
import axios from "axios";
import {routes} from "api/constants/routes.constats";

export const useDeleteMovieMutation = () => {
    const [loading, setLoading] = useState(false)

    const getMovieById = useCallback((id: string) => {
        setLoading(true)
        axios.get(routes.movie.getMovieById(id))
            .then((response) => { })
            .catch((error) => {})
            .finally(() => setLoading(false))
    }, []);

    return {loading }
}
