import { z } from "zod";

export const checkScoreSchema = z.object({
    sbd: z.string({message: 'Registration number is required'}).min(1, 'Registration number is required').max(8, 'Registration number must be less than 8 characters'),
})

export type CheckScoreSchema = z.infer<typeof checkScoreSchema>;
