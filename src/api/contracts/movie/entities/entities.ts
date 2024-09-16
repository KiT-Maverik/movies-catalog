import { z } from "zod";

export const movieId = z.string().uuid();

export type MovieId = z.infer<typeof movieId>;

export const movie = z.object({
  id: movieId,
  title: z.string(),
  cover: z.string(),
  thumb: z.string(),
  year: z.number().positive().min(1900),
  genre: z.string(),
  director: z.string(),
  cast: z.array(z.string()),
  plotSummary: z.string(),
  rating: z.number().min(0).max(5),
});

export type Movie = z.infer<typeof movie>;

export const movieThumbnail = movie.pick({
  id: true,
  title: true,
  year: true,
  thumb: true,
});

export type MovieThumbnail = z.infer<typeof movieThumbnail>;
