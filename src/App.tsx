import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import {PageWrapper} from "design/templates/page-wrapper/page-wrapper";
import {routes} from "api/constants/routes.constats";
import {HomePage} from "design/pages/home/home";
import {MoviePage} from "design/pages/movie/movie";


function App() {
  return (
      <PageWrapper>
        <Router>
            <Switch>
              <Route path={routes.home}>
                <HomePage />
              </Route>
              <Route path={routes.movie}>
                <MoviePage />
              </Route>
            </Switch>
        </Router>
      </PageWrapper>
  );
}

export default App;
