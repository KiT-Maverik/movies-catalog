import { createTheme } from "@mui/material/styles";

import { breakpoints } from "./breakpoints";
import { shape } from "./shape";
import {mixins} from "./mixins";

export const theme = () =>
  createTheme({
    breakpoints,
      mixins,
    shape,
    spacing: 4,
  });
