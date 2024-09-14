import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";

import {HomePage, MoviePage} from "design/pages";

import {Layout} from "../Layout/Layout";
import {routes} from "../constants/routes.constats";

export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={routes.root} element={<Layout />}>
                    <Route index element={<HomePage />} />
                    <Route path={routes.movie()} element={<MoviePage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
