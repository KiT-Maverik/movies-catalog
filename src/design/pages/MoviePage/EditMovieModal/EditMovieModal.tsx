import CancelIcon from '@mui/icons-material/CloseRounded';
import SaveIcon from '@mui/icons-material/CheckRounded';
import {Button, TextField} from "@mui/material";
import {useFormik} from "formik";
import {useParams} from "react-router-dom";

import {useGetMovieByIdQuery, useUpdateMovieMutation} from "api";
import {Modal} from "design/templates";
import {useToast} from "App";

interface EditMovieModalProps {
    open: boolean
    onClose: () => void
}

export const EditMovieModal = ({onClose, open}: EditMovieModalProps) => {
    const { movieId } = useParams();
    const { showToast } = useToast();
    const {getMovieByIdQuery} = useGetMovieByIdQuery(parseInt(movieId || ""))
    const { updateMovieMutation } = useUpdateMovieMutation();

    const {handleBlur, handleChange, values, submitForm} = useFormik({
        initialValues: {
            title: getMovieByIdQuery.data?.data.title,
        },
        onSubmit: (values) => {
            updateMovieMutation.mutateAsync({
                id: parseInt(movieId || ""),
                title: values.title}, {onSuccess: () => {
                    showToast({type: 'success', message: 'Movie updated'})
                    onClose();
                }
            })
        },
    });

    return (
        <Modal open={open} onClose={onClose}>
            <Modal.Header title="Edit movie" onClose={onClose}/>
            <Modal.Body>
                <TextField label='Title'
                           name='title'
                           value={values.title}
                           onChange={handleChange}
                           onBlur={handleBlur}
                           defaultValue={getMovieByIdQuery.data?.data.title}
                />
            </Modal.Body>
            <Modal.Actions>
                <Button startIcon={<CancelIcon/>} onClick={onClose} variant='text'>Cancel</Button>
                <Button startIcon={<SaveIcon/>} variant='contained'onClick={submitForm}>Save</Button>
            </Modal.Actions>
        </Modal>
    )
}
