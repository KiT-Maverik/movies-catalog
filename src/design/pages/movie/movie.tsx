import {Box, Container, Rating, Skeleton, Stack, Typography} from "@mui/material";
import React, {ReactNode, useEffect, useMemo} from 'react';
import {useParams} from "react-router-dom";

import {useGetMovieByIdQuery} from "api/queries/movies/getMovieById.query";
import {Movie} from "api/contracts/movie/entities/entities";

import style from './movie.styles'

export function MoviePage() {
    const {loading, movie, getMovieById} = useGetMovieByIdQuery()

    const { movieId } = useParams();

    useEffect(() => {
        if (movieId) getMovieById(parseInt(movieId))
    }, [movieId])

    const {cover, cast, year, title, director, genre, rating, plotSummary} = useMemo<{ [key in keyof Omit<Movie, 'id' | 'thumb'>]: ReactNode }>(() => {
        if (loading || !movie) return {
            cover: <Skeleton sx={style.skeleton.cover}/>,
            cast: [1,2,3].map(item => <Skeleton key={item} sx={style.skeleton.cast}/>),
            year: <Skeleton sx={style.skeleton.year}/>,
            title: <Skeleton sx={style.skeleton.title}/>,
            director: <Skeleton sx={style.skeleton.director}/>,
            genre: <Skeleton sx={style.skeleton.genre}/>,
            rating: <Rating value={0} disabled />,
            plotSummary: <Box>
                {[1, 2, 3, 4].map((item) => <Skeleton key={item}/>)}
            </Box>,
        }
        else return {
            cover: <Box component='img' src={movie.cover} sx={style.cover.image}/>,
            cast: <Typography component='span'>{movie.cast.join(', ')}</Typography>,
            year: `Year: ${movie.year}`,
            title: <Typography variant='h3'>{movie.title}</Typography>,
            director: `Director: ${movie.director}`,
            genre: `Genre: ${movie.genre}`,
            rating: <Rating value={movie.rating} readOnly />,
            plotSummary: <Typography>{movie.plotSummary}</Typography>,
        }
    }, [movie, loading]);

    return (
        <Container sx={style.container}>
            <Box sx={style.cover.container}>
                {cover}
            </Box>
            <Box sx={style.info}>
                <Stack>
                    {title}
                    <Stack direction='row' gap={2}>
                        <Typography variant='caption' color="text.secondary">{director}</Typography>
                        <Typography variant='caption' color="text.secondary">{genre}</Typography>
                        <Typography variant='caption' color="text.secondary">{year}</Typography>
                    </Stack>
                </Stack>
                {rating}
                <Typography fontWeight='bold'>{`Cast: `}
                    {cast}
                </Typography>
                {plotSummary}
            </Box>
        </Container>
    );
}
