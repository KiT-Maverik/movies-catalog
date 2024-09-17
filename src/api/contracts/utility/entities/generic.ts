import { z } from "zod";

export const message = z.object({ message: z.string() });

export const paginator = z.object({
  offset: z.number().positive(),
  limit: z.number().positive(),
});
