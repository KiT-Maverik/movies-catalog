import { z } from "zod";
import { movie, movieId } from "api";

const request = z.object({ id: movieId });

const response = movie;

export const getMovieByIdContract = { request, response };

export type GetMovieById_Request = z.infer<typeof request>;
export type GetMovieById_Response = z.infer<typeof response>;
