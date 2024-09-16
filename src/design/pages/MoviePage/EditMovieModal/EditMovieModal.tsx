import CancelIcon from "@mui/icons-material/CloseRounded";
import SaveIcon from "@mui/icons-material/CheckRounded";
import { Button, CircularProgress, TextField } from "@mui/material";
import { useFormik } from "formik";
import { useParams } from "react-router-dom";
import { toFormikValidationSchema } from "zod-formik-adapter";

import { useGetMovieByIdQuery, useUpdateMovieMutation, movie } from "api";
import { useToast } from "App";
import { Modal } from "design/templates";
import React from "react";

interface EditMovieModalProps {
  open: boolean;
  onClose: () => void;
}

export const EditMovieModal = ({ onClose, open }: EditMovieModalProps) => {
  const { movieId } = useParams();
  const { showToast } = useToast();
  const { getMovieByIdQuery } = useGetMovieByIdQuery({ id: movieId || "" });
  const { updateMovieMutation } = useUpdateMovieMutation();

  const { handleBlur, handleChange, values, submitForm } = useFormik({
    initialValues: {
      title: getMovieByIdQuery.data?.data.title,
    },
    validationSchema: toFormikValidationSchema(movie.pick({ title: true })),
    onSubmit: (values) => {
      updateMovieMutation.mutateAsync(
        {
          id: movieId || "",
          data: { title: values.title },
        },
        {
          onSuccess: () => {
            showToast({ type: "success", message: "Movie updated" });
            onClose();
          },
        },
      );
    },
  });

  return (
    <Modal open={open} onClose={onClose}>
      <Modal.Header title="Edit movie" onClose={onClose} />
      <Modal.Body>
        <TextField
          label="Title"
          name="title"
          value={values.title}
          onChange={handleChange}
          onBlur={handleBlur}
          defaultValue={getMovieByIdQuery.data?.data.title}
        />
      </Modal.Body>
      <Modal.Actions>
        <Button startIcon={<CancelIcon />} onClick={onClose} variant="text">
          Cancel
        </Button>
        <Button
          variant="contained"
          startIcon={<SaveIcon />}
          sx={{
            position: "relative",
            color: getMovieByIdQuery.isPending ? "transparent" : "",
          }}
          disabled={updateMovieMutation.isPending}
          onClick={submitForm}
        >
          <CircularProgress
            size={20}
            color="inherit"
            sx={{
              position: "absolute",
              display: updateMovieMutation.isPending ? "block" : "none",
            }}
          />
          Save
        </Button>
      </Modal.Actions>
    </Modal>
  );
};
