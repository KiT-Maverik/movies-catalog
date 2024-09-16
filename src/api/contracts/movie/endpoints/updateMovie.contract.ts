import { z } from "zod";

const request = z.object({ id: z.string() });

const response = z.object({ message: z.string() });

export const updateMovieContract = { request, response };

export type UpdateMovie_Request = z.infer<typeof request>;
export type UpdateMovie_Response = z.infer<typeof response>;
