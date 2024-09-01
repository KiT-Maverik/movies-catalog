import React from 'react';
import {Box, Container, Typography} from "@mui/material";
import MovieCreationRoundedIcon from '@mui/icons-material/MovieCreationRounded';

import style from './home.styles'

export function HomePage() {
    return (
        <Container sx={style.container}>
            <MovieCreationRoundedIcon color="disabled" sx={style.icon}/>
            <Typography variant="h5" color="text.disabled" textTransform="capitalize">Choose a movie to see the details</Typography>
        </Container>
    );
}
