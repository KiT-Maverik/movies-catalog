import React from 'react';

import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import './App.css';
import {PageWrapper} from "design/templates/page-wrapper/page-wrapper";
import {routes} from "api/constants/routes.constats";
import {HomePage} from "design/pages/home/home";
import {MoviePage} from "design/pages/movie/movie";

const router = createBrowserRouter([
    {
        path: routes.home,
        element: <HomePage />,
    },
    {
        path: routes.movie,
        element: <MoviePage />,
    },
]);

function App() {
  return (
      <PageWrapper>
          <RouterProvider router={router} />
      </PageWrapper>
  );
}

export default App;
