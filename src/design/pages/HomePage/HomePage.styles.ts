import {SxProps, Theme} from "@mui/material";

export const container:SxProps<Theme> = {
    display: "flex",
    flexDirection: "column",
    justifyContent: 'center',
    alignItems: "center",
    gap: 5,
    height: 1,
    userSelect: "none",
    flexGrow: 1,
} as const

export const icon:SxProps<Theme> = {
    fontSize: 120,
} as const

export default { container, icon };
