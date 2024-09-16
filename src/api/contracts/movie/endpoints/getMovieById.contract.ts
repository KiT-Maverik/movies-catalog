import { z } from "zod";
import { movie } from "api";

const request = z.object({ id: z.string() });

const response = z.array(movie);

export const getMovieByIdContract = { request, response };

export type GetMovieById_Request = z.infer<typeof request>;
export type GetMovieById_Response = z.infer<typeof response>;
