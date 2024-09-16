import { z } from "zod";
import { movie } from "api";

const response = z.array(movie);

export const getMoviesListContract = { response };

export type getMoviesList_Response = z.infer<typeof response>;
