import {useCallback, useState} from "react";
import axios from "axios";
import {endpoint} from "api/constants/endpoints.constats";
import {movies} from "../../constants/mock.constants";
import {Movie} from "../../contracts/movie/entities/entities";
import {delay} from "../../../constants/environment.constants";

export const useGetMovieByIdQuery = () => {
    const [loading, setLoading] = useState(false)
    const [movie, setMovie] = useState<Movie>()

    const getMovieById = useCallback((id: number) => {
        setLoading(true)

        setTimeout(() => {
            setMovie(movies.find((item) => item.id === id));
            setLoading(false);
        }, delay);
    }, []);

    return {loading, movie, getMovieById }
}
