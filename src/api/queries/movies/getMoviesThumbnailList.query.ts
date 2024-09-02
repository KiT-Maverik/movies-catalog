import {useCallback, useState} from "react";
import axios from "axios";
import {endpoint} from "api/constants/endpoints.constats";
import {movies} from "../../constants/mock.constants";
import {MovieThumbnail} from "../../contracts/movie/entities/entities";
import {delay} from "../../../constants/environment.constants";

export const useGetMoviesThumbnailListQuery = () => {
    const [loading, setLoading] = useState(false)
    const [moviesList, setMoviesList] = useState<MovieThumbnail[]>([])

    const getMoviesThumbnailList = useCallback(() => {
        setLoading(true)

        setTimeout(() => {
            setMoviesList(movies.map(({id, title, year, thumb}) => ({id, title, year, thumb})));
            setLoading(false);
        }, delay);
    }, []);

    return {getMoviesThumbnailList, loading, moviesThumbnailList: moviesList }
}
