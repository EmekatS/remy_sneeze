import z from 'zod';

export const contactSchema = z.object({
    name: z.string().min(3, 'Nah I need something longer').max(12, 'All these Yoruba ppl ehn'),
    message: z.string().min(10, 'Come On tell me a little bit more, This is too short',).max(100, 'I love you... but woahhh!!!, Too long')
})