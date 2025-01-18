import { z } from "zod";

export const GenderEnum = z.enum(['male', 'female'] as const);
export const OrientationEnum = z.enum(['straight', 'gay', 'bisexual'] as const);

export const userSchema = z.object({
    id: z.string(),
    is_active: z.boolean(),
    name: z.string().optional(),
    age: z.number().min(18).max(100).optional(),
    city: z.string().optional(),
    coordinates: z.string().optional(), // JSON as TEXT
    email: z.string().email().optional(),
    telegram_id: z.string().optional(),
    about: z.string().optional(),
    work: z.string().optional(),
    education: z.string().optional(),
    height: z.number().optional(),
    weight: z.number().optional(),
    gender: GenderEnum.optional(),
    orientation: OrientationEnum.optional(),
    languages: z.string().optional(),
    looking_for: z.string().optional(),
    created_at: z.string().datetime().optional(),
    updated_at: z.string().datetime().optional()
});

export const parsedCoordinatesSchema = z.object({
    latitude: z.number(),
    longitude: z.number()
});
export const parsedLookingForSchema = z.array(z.string());
export const parsedLanguagesSchema = z.array(z.string());

export type parsedCoordinatesType = z.infer<typeof parsedCoordinatesSchema>;
export type parsedLookingForType = z.infer<typeof parsedLookingForSchema>;
export type parsedLanguagesType = z.infer<typeof parsedLanguagesSchema>;
export type GenderType = z.infer<typeof GenderEnum>;
export type OrientationType = z.infer<typeof OrientationEnum>;
export type UserType = z.infer<typeof userSchema>;