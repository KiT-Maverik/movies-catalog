import DeleteIcon from "@mui/icons-material/DeleteRounded";
import EditIcon from "@mui/icons-material/EditRounded";
import OperationsIcon from "@mui/icons-material/MoreVertRounded";
import {
  Box,
  Button,
  Divider,
  CircularProgress,
  IconButton,
  Menu,
  MenuItem,
  Rating,
  Skeleton,
  Stack,
  Typography,
  Fade,
} from "@mui/material";
import React, {
  ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import { useNavigate, useParams } from "react-router-dom";

import { route, useToast } from "App";
import { useDeleteMovieMutation, useGetMovieByIdQuery } from "api";
import { Movie } from "api/contracts/movie/entities/entities";
import { Page, Modal } from "design/templates";

import { EditMovieModal } from "./EditMovieModal/EditMovieModal";
import style from "./MoviePage.styles";

export function MoviePage() {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [menuAnchor, setMenuAnchor] = useState<null | HTMLElement>(null);
  const { movieId } = useParams();
  const { showToast } = useToast();
  const navigate = useNavigate();

  const { deleteMovieMutation } = useDeleteMovieMutation();
  const { getMovieByIdQuery } = useGetMovieByIdQuery({ id: movieId || "" });

  useEffect(() => {
    getMovieByIdQuery.refetch();
  }, [movieId]);

  const handleCloseMenu = useCallback(() => {
    setMenuAnchor(null);
  }, []);

  const handleMovieDelete = useCallback(() => {
    deleteMovieMutation.mutateAsync(
      { id: movieId || "" },
      {
        onSuccess: () => {
          showToast({ type: "info", message: "Movie deleted" });
          navigate(route.home);
        },
      },
    );
  }, []);

  const { cover, cast, year, title, director, genre, rating, plotSummary } =
    useMemo<{ [key in keyof Omit<Movie, "id" | "thumb">]: ReactNode }>(() => {
      if (getMovieByIdQuery.isLoading || !getMovieByIdQuery.data?.data)
        return {
          cover: <Skeleton sx={style.skeleton.cover} />,
          cast: [1, 2, 3].map((item) => (
            <Skeleton key={item} sx={style.skeleton.cast} />
          )),
          title: <Skeleton sx={style.skeleton.title} />,
          year: <Skeleton sx={style.skeleton.year} />,
          director: <Skeleton sx={style.skeleton.director} />,
          genre: <Skeleton sx={style.skeleton.genre} />,
          rating: <Rating value={0} disabled />,
          plotSummary: (
            <Box>
              {[1, 2, 3, 4].map((item) => (
                <Skeleton key={item} />
              ))}
            </Box>
          ),
        };
      else {
        const {
          cover,
          cast,
          year,
          title,
          director,
          genre,
          rating,
          plotSummary,
        } = getMovieByIdQuery.data.data;

        return {
          cover: <Box component="img" src={cover} sx={style.cover.image} />,
          cast: <Typography component="span">{cast.join(", ")}</Typography>,
          year: `Year: ${year}`,
          title: <Typography variant="h3">{title}</Typography>,
          director: `Director: ${director}`,
          genre: `Genre: ${genre}`,
          rating: <Rating value={rating} readOnly />,
          plotSummary: <Typography>{plotSummary}</Typography>,
        };
      }
    }, [getMovieByIdQuery]);

  return (
    <Page containerStyle={style.container}>
      <Box sx={style.cover.container}>{cover}</Box>
      <Box sx={style.info}>
        <Stack>
          <Box sx={style.header.container}>
            {title}
            <IconButton
              disabled={getMovieByIdQuery.isLoading}
              onClick={(event) => setMenuAnchor(event.currentTarget)}
            >
              <OperationsIcon />
            </IconButton>
            <Menu
              anchorEl={menuAnchor}
              open={!!menuAnchor}
              onClose={handleCloseMenu}
            >
              <MenuItem
                sx={style.header.menuItem}
                onClick={() => {
                  setShowEditModal(true);
                  handleCloseMenu();
                }}
              >
                <EditIcon />
                Edit
              </MenuItem>
              <Divider />
              <MenuItem
                sx={style.header.menuItem}
                onClick={() => {
                  setShowDeleteModal(true);
                  handleCloseMenu();
                }}
              >
                <DeleteIcon color="error" />
                Delete
              </MenuItem>
            </Menu>
          </Box>
          <Stack direction="row" gap={2}>
            <Typography variant="caption" color="text.secondary">
              {director}
            </Typography>
            <Typography variant="caption" color="text.secondary">
              {genre}
            </Typography>
            <Typography variant="caption" color="text.secondary">
              {year}
            </Typography>
          </Stack>
        </Stack>
        {rating}
        <Typography fontWeight="bold">
          {`Cast: `}
          {cast}
        </Typography>
        {plotSummary}
      </Box>
      <Modal open={showDeleteModal} onClose={() => setShowDeleteModal(false)}>
        <Modal.Header
          title="Are you sure you want to delete this movie?"
          onClose={() => setShowDeleteModal(false)}
        />
        <Modal.Body>
          <Typography>You can not undo this action</Typography>
        </Modal.Body>
        <Modal.Actions>
          <Button variant="text" onClick={() => setShowDeleteModal(false)}>
            Cancel
          </Button>
          <Button
            variant="contained"
            sx={{
              position: "relative",
              color: getMovieByIdQuery.isPending ? "transparent" : "",
            }}
            color="error"
            disabled={deleteMovieMutation.isPending}
            onClick={handleMovieDelete}
          >
            <CircularProgress
              size={20}
              color="inherit"
              sx={{
                position: "absolute",
                display: deleteMovieMutation.isPending ? "block" : "none",
              }}
            />
            Delete
          </Button>
        </Modal.Actions>
      </Modal>
      <EditMovieModal
        open={showEditModal}
        onClose={() => {
          setShowEditModal(false);
        }}
      />
    </Page>
  );
}
