import { z } from "zod";
import { movie, movieId } from "../entities/entities";
import { message } from "../../utility/entities/generic";

const request = z.object({ id: movieId, data: movie.partial() });

const response = message;

export const updateMovieContract = { request, response };

export type UpdateMovie_Request = z.infer<typeof request>;
export type UpdateMovie_Response = z.infer<typeof response>;
