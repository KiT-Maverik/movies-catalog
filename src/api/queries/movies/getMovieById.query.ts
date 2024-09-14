import {useCallback, useState} from "react";
import axios from "axios";
import {endpoint} from "api/constants/endpoints.constats";
import {Movie} from "api/contracts/movie/entities/entities";

export const useGetMovieByIdQuery = () => {
    const [loading, setLoading] = useState(false)
    const [movie, setMovie] = useState<Movie>()

    const getMovieById = useCallback((id: string) => {
        setLoading(true)
        axios
            .get<Movie>(endpoint.movie.getById(id))
            .then((rs) => setMovie(rs.data))
            .finally(() => setLoading(false))
    }, []);

    return {loading, movie, getMovieById }
}
