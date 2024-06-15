import {z} from 'zod';
export const registerSchema = z.object({
    name:z.string().min(3,{message:"name should be mimimum of 3 Characters"}),
    email:z.string().email(),
    password:z.string().min(6,{message:"Password Must be minimum of 6 Characters"})
});

export type RegisterSchema = z.infer<typeof registerSchema>