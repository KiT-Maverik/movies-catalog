import {useCallback, useState} from "react";
import axios from "axios";
import {endpoint} from "api/constants/endpoints.constats";
import {movies} from "../../constants/mock.constants";
import {delay} from "../../../constants/environment.constants";

export const useGetMovieByIdQuery = () => {
    const [loading, setLoading] = useState(false)
    const [movie, setMovie] = useState({})

    const getMovieById = useCallback((id: number) => {
        setLoading(true)

        setTimeout(() => {
            setMovie(movies.filter((item) => item.id === id));
            setLoading(false);
        }, delay);
    }, []);

    return {loading, movie, getMovieById }
}
