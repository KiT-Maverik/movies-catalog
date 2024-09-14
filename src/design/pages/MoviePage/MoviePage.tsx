import {Box, Container, Rating, Skeleton, Stack, Typography} from "@mui/material";
import React, {ReactNode, useEffect, useMemo} from 'react';
import {useParams} from "react-router-dom";

import {useGetMovieByIdQuery} from "api";
import {Movie} from "api/contracts/movie/entities/entities";

import style from './MoviePage.styles'

export function MoviePage() {
    const { movieId } = useParams();

    const {getMovieByIdQuery} = useGetMovieByIdQuery(parseInt(movieId || ""))

    useEffect(() => {
        getMovieByIdQuery.refetch()
    }, [movieId]);

    const {cover, cast, year, title, director, genre, rating, plotSummary} = useMemo<{ [key in keyof Omit<Movie, 'id' | 'thumb'>]: ReactNode }>(() => {
        if (getMovieByIdQuery.isLoading || !getMovieByIdQuery.data?.data) return {
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
        else {
            const {cover, cast, year, title, director, genre, rating, plotSummary} = getMovieByIdQuery.data.data

            return {
                cover: <Box component='img' src={cover} sx={style.cover.image}/>,
                cast: <Typography component='span'>{cast.join(', ')}</Typography>,
                year: `Year: ${year}`,
                title: <Typography variant='h3'>{title}</Typography>,
                director: `Director: ${director}`,
                genre: `Genre: ${genre}`,
                rating: <Rating value={rating} readOnly/>,
                plotSummary: <Typography>{plotSummary}</Typography>,
            }
        }
    }, [getMovieByIdQuery]);

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
