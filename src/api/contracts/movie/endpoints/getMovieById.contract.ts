import { movie } from "api/contracts/movie/entities/entities";
import { z } from "zod";

const request = z.object({});

const response = z.object({
  movie: movie,
});
