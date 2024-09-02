import {SxProps, Theme} from "@mui/material";

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

    [theme.breakpoints.up("sm")]: {
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

const skeleton: { cover: SxProps<Theme>; title: SxProps<Theme>; director: SxProps<Theme>; genre: SxProps<Theme>; year: SxProps<Theme>; } = {
    cover: {
        ...cover.image
    },
    title: {
        fontSize: theme => theme.typography.h3.fontSize,
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
} as const

export default {container, info, cover, skeleton}
