import {SxProps} from "@mui/material";
import {Theme} from "@mui/material/styles";

const container: SxProps<Theme> = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 5,
} as const

const title: SxProps<Theme> = ({palette, typography}) => ({
    flexGrow: 1,
    zIndex: 10,
    backgroundColor: palette.background.paper,

    input: {
        ...typography.h3
    }
}) as const

const editControls: SxProps<Theme> = {
    display: "inline-block",
    transition: ({transitions}) => transitions.create('margin', {
        easing: transitions.easing.sharp,
        duration: transitions.duration.leavingScreen,
    }),
} as const


const skeleton: SxProps<Theme> = {
        fontSize: theme => theme.typography.h3.fontSize,
        maxWidth: 250,
    } as const

export default {
    container,
    editControls,
    skeleton,
    title,
}
