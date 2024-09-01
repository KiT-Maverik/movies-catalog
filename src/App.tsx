import React from 'react';
import {CssBaseline} from "@mui/material";

import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
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
          <CssBaseline/>
          <RouterProvider router={router} />
      </PageWrapper>
  );
}

export default App;
