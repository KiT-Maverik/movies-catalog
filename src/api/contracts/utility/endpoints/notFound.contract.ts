import { z } from "zod";

import { message } from "../entities/generic";

const response = message;

export const notFoundContract = { response };

export type NotFound_Response = z.infer<typeof response>;
