import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { HomePage, MoviePage } from "design/pages";

import { Layout } from "../Layout/Layout";
import { route } from "../constants/routes.constats";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={route.home} element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path={route.movie()} element={<MoviePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
