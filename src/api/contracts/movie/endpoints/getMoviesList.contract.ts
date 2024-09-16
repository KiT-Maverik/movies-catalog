import { z } from "zod";
import { movie } from "../entities/entities";

const response = z.array(movie);

export const getMoviesListContract = { response };

export type GetMoviesList_Response = z.infer<typeof response>;
