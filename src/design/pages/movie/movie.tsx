import React from 'react';
import {Box, Container} from "@mui/material";

import style from './movie.styles'
import {useGetMovieByIdQuery} from "api/queries/movies/getMovieById.query";

export function MoviePage() {
    const {loading, movie} = useGetMovieByIdQuery()

    if (loading) return null

    return (
        <Container sx={style.container}>
            <Box sx={style.cover}>cover</Box>
            <Box sx={style.info}>info</Box>
            <Box sx={style.tabs}>tabs</Box>
        </Container>
    );
}
