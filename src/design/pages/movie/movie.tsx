import React, {useEffect} from 'react';
import {Box, Container, Rating, Stack, Typography} from "@mui/material";

import style from './movie.styles'
import {useGetMovieByIdQuery} from "api/queries/movies/getMovieById.query";

export function MoviePage() {
    const {loading, movie, getMovieById} = useGetMovieByIdQuery()

    useEffect(() => {
        getMovieById(2)
    }, [])

    if (!movie) return null
    if (loading) return null

    const {cover, cast, year, title, director, genre, rating, plotSummary} = movie

    return (
        <Container sx={style.container}>
            <Box sx={style.cover.container}>
                <Box component='img' src={cover}  sx={style.cover.image}/>
            </Box>
            <Box sx={style.info}>
                <Stack>
                    <Typography variant='h3'>{title}</Typography>
                    <Stack direction='row' gap={2}>
                        <Typography variant='caption' color="text.secondary">{`Director: ${director}`}</Typography>
                        <Typography variant='caption' color="text.secondary">{`Genre: ${genre}`}</Typography>
                        <Typography variant='caption' color="text.secondary">{`Year: ${year}`}</Typography>
                    </Stack>
                </Stack>
                <Rating value={rating} readOnly />
                <Typography fontWeight='bold'>{`Cast: `}
                <Typography component='span'>{cast.join(', ')}</Typography>
                </Typography>
            </Box>
            <Box sx={style.tabs}>tabs</Box>
        </Container>
    );
}
