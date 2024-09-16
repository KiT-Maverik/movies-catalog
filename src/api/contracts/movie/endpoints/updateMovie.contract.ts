import { z } from "zod";
import { movieId } from "api";

const request = z.object({ id: movieId });

const response = z.object({ message: z.string() });

export const updateMovieContract = { request, response };

export type UpdateMovie_Request = z.infer<typeof request>;
export type UpdateMovie_Response = z.infer<typeof response>;
