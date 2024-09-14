import React from 'react';
import {CssBaseline, ThemeProvider} from "@mui/material";
import {
    QueryClient,
    QueryClientProvider,
} from '@tanstack/react-query'

import {theme} from "styles";

import {Router} from './Router/Router'

const queryClient = new QueryClient()

export const App = () => {
  return (
      <>
          <QueryClientProvider client={queryClient}>
              <ThemeProvider theme={theme()}>
                <CssBaseline/>
                <Router/>
              </ThemeProvider>
          </QueryClientProvider>
      </>
  );
}
