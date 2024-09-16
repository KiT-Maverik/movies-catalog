import CancelIcon from '@mui/icons-material/CloseRounded';
import SaveIcon from '@mui/icons-material/CheckRounded';
import {Button} from "@mui/material";

import {Modal} from "design/templates";

import style from './EditMovieModal.styles'

interface EditMovieModalProps {
    open: boolean
    onClose: () => void
}

export const EditMovieModal = ({onClose, open}: EditMovieModalProps) => {
    return (
        <Modal open={open} onClose={onClose}>
            <Modal.Header title="Edit movie" onClose={onClose}/>
            <Modal.Body>

            </Modal.Body>
            <Modal.Actions>
                <Button startIcon={<CancelIcon/>} onClick={onClose} variant='text'>Cancel</Button>
                <Button startIcon={<SaveIcon/>} variant='contained'>Save</Button>
            </Modal.Actions>
        </Modal>
    )
}
