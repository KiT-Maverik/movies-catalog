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

const cover: SxProps = {
    gridArea: AREA.COVER,
    background: 'aliceblue'
} as const

const info: SxProps = {
    gridArea: AREA.INFO,
    background: 'aliceblue'
} as const

const tabs: SxProps = {
    gridArea: AREA.TABS,
    background: 'aliceblue'
} as const

export default {container, info, tabs, cover}
