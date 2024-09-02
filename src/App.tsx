import React from 'react';
import {CssBaseline} from "@mui/material";

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import {PageWrapper} from "design/templates/page-wrapper/page-wrapper";
import {routes} from "api/constants/routes.constats";
import {HomePage} from "design/pages/home/home";
import {MoviePage} from "design/pages/movie/movie";

function App() {
  return (
      <>
          <CssBaseline/>
          <Router>
              <Routes>
                <Route path={routes.root} element={<PageWrapper />}>
                    <Route index element={<HomePage />} />
                    <Route path={routes.movie()} element={<MoviePage />} />
                 </Route>
              </Routes>
          </Router>
      </>
  );
}

export default App;
