import React from "react";
import { Typography } from "@mui/material";
import MovieCreationRoundedIcon from "@mui/icons-material/MovieCreationRounded";

import { Page } from "design/templates";

import style from "./HomePage.styles";

export function HomePage() {
  return (
    <Page containerStyle={style.container}>
      <MovieCreationRoundedIcon color="disabled" sx={style.icon} />
      <Typography variant="h5" color="text.disabled" textTransform="capitalize">
        Choose a movie to see the details
      </Typography>
    </Page>
  );
}
