import React from "react";
import { CssBaseline, GlobalStyles, ThemeProvider } from "@mui/material";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { globalStyles, theme } from "styles";

import { Router } from "./Router/Router";
import { ToastProvider } from "./ToastProvider/ToastProvider";

const queryClient = new QueryClient();

export const App = () => {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme()}>
          <CssBaseline />
          <GlobalStyles styles={globalStyles} />
          <ToastProvider>
            <Router />
          </ToastProvider>
        </ThemeProvider>
      </QueryClientProvider>
    </>
  );
};
