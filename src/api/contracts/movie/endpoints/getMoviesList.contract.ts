import {z} from "zod";
import {movieThumbnail} from "api/contracts/movie/entities/entities";

const response = z.object({ movies: z.array(movieThumbnail)})
