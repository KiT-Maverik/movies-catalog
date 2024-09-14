import { createTheme } from "@mui/material/styles";

import { breakpoints } from "./breakpoints";
import { shape } from "./shape";

export const theme = () =>
  createTheme({
    breakpoints,
    shape,
    spacing: 4,
  });
