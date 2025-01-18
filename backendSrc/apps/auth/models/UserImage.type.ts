import { z } from "zod";

export const userImageSchema = z.object({
    id: z.string(),
    user_id: z.string(),
    order: z.number(),
    image_url: z.string(),
});

export type UserImageType = z.infer<typeof userImageSchema>;