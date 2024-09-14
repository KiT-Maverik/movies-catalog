import {BrowserRouter, Route, Routes} from "react-router-dom";
import {PageWrapper} from "design/templates";
import {HomePage, MoviePage} from "design/pages";
import React from "react";
import {routes} from "../constants/routes.constats";

export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={routes.root} element={<PageWrapper />}>
                    <Route index element={<HomePage />} />
                    <Route path={routes.movie()} element={<MoviePage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
