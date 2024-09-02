import {SxProps, Theme} from "@mui/material";

enum AREA {
    COVER = 'cover',
    INFO = 'info',
    TABS = 'tabs',
}

export const container: SxProps<Theme> = (theme: Theme) => ({
    display: "grid",
    gap: 5,
    gridTemplateAreas: `
        "${AREA.COVER}"
        "${AREA.INFO}"
        "${AREA.TABS}"
    `,

    [theme.breakpoints.up("sm")]: {
        gridTemplateAreas: `
        "${AREA.COVER} ${AREA.INFO}"
        "${AREA.TABS} ${AREA.TABS}"
    `,
    }
} as const)

const cover: { container: SxProps; image: SxProps  }= {
container: {
    gridArea: AREA.COVER,
        display: "flex",
    justifyContent: "center",
    alignItems: "center",
},
    image: {
        width: 1,
        height: 1,
        maxHeight: 480,
        maxWidth: 480,
    }
} as const

const info: SxProps = {
    gridArea: AREA.INFO,
    display: "flex",
    gap: 2,
    flexDirection: "column",
} as const

const tabs: SxProps = {
    gridArea: AREA.TABS,
    background: 'aliceblue'
} as const

export default {container, info, tabs, cover}
