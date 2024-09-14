import React from 'react';
import {CssBaseline, GlobalStyles, ThemeProvider} from "@mui/material";
import {
    QueryClient,
    QueryClientProvider,
} from '@tanstack/react-query'

import {globalStyles, theme} from "styles";

import {Router} from './Router/Router'

const queryClient = new QueryClient()

export const App = () => {
  return (
      <>
          <QueryClientProvider client={queryClient}>
              <ThemeProvider theme={theme()}>
                <CssBaseline/>
                  <GlobalStyles styles={globalStyles} />
                <Router/>
              </ThemeProvider>
          </QueryClientProvider>
      </>
  );
}
