import { z } from "zod";

export const movie = z.object({
    title: z.string(),
    cover: z.string(),
    year: z.number().positive().min(1900),
    genre: z.string(),
    director: z.string(),
    cast: z.array(z.string()),
    plotSummary: z.string(),
    rating: z.number().min(0).max(5),
})

export const movieThumbnail = movie.pick({title: true, year: true, genre: true, cover: true})
