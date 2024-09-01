import {SxProps, Theme} from "@mui/material";

export const container:SxProps<Theme> = {
    display: "flex",
    flexDirection: "column",
    justifySelf: 'center',
    alignItems: "center",
    gap: 5,
    height: 1,
}

export const icon:SxProps<Theme> = {
    fontSize: 120,
}

export default { container, icon };
