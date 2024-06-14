import { z } from "zod";

export const schema = z.object({
  text: z.string(),
});

export type Task = z.infer<typeof schema> & { id: number };
