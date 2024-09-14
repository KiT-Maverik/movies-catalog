import { SxProps, Theme } from "@mui/material";

const container: SxProps<Theme> = (theme: Theme) => ({
  backgroundColor: "aliceblue",
  display: "flex",
  flexGrow: 1,
  justifyContent: 'center',
  alignItems: "center",
  px: theme => theme.mixins.contentSpacingX.sm,
  py: 10,

  [theme.breakpoints.up("tablet")]: {
    px: theme => theme.mixins.contentSpacingX.sm,
  }
} as const);

export default {
  container,
};
