import { z } from "zod";

export const schema = z.object({
  title: z.string().min(1,"Fill a task here please !!"),
});

export type Task = z.infer<typeof schema> & { id: number };
