import {z} from 'zod';
export const loginSchema = z.object({
    email:z.string().email(),
    password:z.string().min(6,{message:"Password Must be minimum of 6 Charachters"})
});

export type LoginSchema = z.infer<typeof loginSchema>