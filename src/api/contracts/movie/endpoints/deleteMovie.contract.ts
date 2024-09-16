import { z } from "zod";
import { movieId } from "../entities/entities";

const request = z.object({ id: movieId });

const response = z.object({ message: z.string() });

export const deleteMovieContract = { request, response };

export type DeleteMovie_Request = z.infer<typeof request>;
export type DeleteMovie_Response = z.infer<typeof response>;
