import {SxProps, Theme} from "@mui/material";
import {theme} from "../../../styles";

enum AREA {
    COVER = 'cover',
    INFO = 'info',
}

export const container: SxProps<Theme> = (theme: Theme) => ({
    display: "grid",
    gap: 5,
    gridTemplateColumns: '1fr 1fr',
    gridTemplateAreas: `
        "${AREA.COVER}"
        "${AREA.INFO}"
    `,

    [theme.breakpoints.up("tablet")]: {
        gridTemplateAreas: `
        "${AREA.COVER} ${AREA.INFO}"
    `,
    }
} as const)

const cover: { container: SxProps; image: SxProps  }= {
container: {
    gridArea: AREA.COVER,
        display: "flex",
    justifyContent: "center",
},
    image: {
        width: 1,
        height: 1,
        aspectRatio: 1,
        maxHeight: 480,
        maxWidth: 480,
    }
} as const

const header: { container: SxProps<Theme>; menuItem: SxProps<Theme>; title: SxProps<Theme>; editControls: {
        idle: SxProps<Theme>
    } } = {
    container: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap: 5,
    },
    menuItem: {
      display: "flex",
      gap: 3,
    },
    title: ({palette, typography}) => ({
      flexGrow: 1,
        zIndex: 10,
        backgroundColor: palette.background.paper,

        input: {
            ...typography.h3
        }
    }),
    editControls: {
        idle: {
            display: "inline-block",
            transition: ({transitions}) => transitions.create('margin', {
                easing: transitions.easing.sharp,
                duration: transitions.duration.leavingScreen,
            }),
        },
    },
} as const

const info: SxProps = {
    gridArea: AREA.INFO,
    display: "flex",
    gap: 2,
    flexDirection: "column",
} as const

const skeleton: { cast: SxProps<Theme>;  cover: SxProps<Theme>; title: SxProps<Theme>; director: SxProps<Theme>; genre: SxProps<Theme>; year: SxProps<Theme>; } = {
    cover: {
        ...cover.image,
        transform: 'none',
    },
    title: {
        fontSize: theme => theme.typography.h3.fontSize,
        width: 1,
        maxWidth: 250,
    },
    genre: {
        fontSize: theme => theme.typography.caption.fontSize,
        width: 50,
    },
    director: {
        fontSize: theme => theme.typography.caption.fontSize,
        width: 100,
    },
    year: {
        fontSize: theme => theme.typography.caption.fontSize,
        width: 50,
    },
    cast: {
        display: 'inline-block',
        width: 50,
        mr: 1
    }
} as const

export default {container, header, info, cover, skeleton}
