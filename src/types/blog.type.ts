import z from "zod";

export const BlogSchema = z.object({
    title: z.string().min(1).max(200),
    content: z.string().min(1),
    authorId: z.string().min(1),
});
export type BlogType = z.infer<typeof BlogSchema>;