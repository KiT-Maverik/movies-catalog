import React from 'react';
import {CssBaseline} from "@mui/material";
import {
    QueryClient,
    QueryClientProvider,
} from '@tanstack/react-query'

import {Router} from './Router/Router'


const queryClient = new QueryClient()

export const App = () => {
  return (
      <>
          <QueryClientProvider client={queryClient}>
          <CssBaseline/>
              <Router/>
          </QueryClientProvider>
      </>
  );
}
