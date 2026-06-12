import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    source: z.string().optional(),
    sourceTitle: z.string().optional(),
    tags: z.array(z.string()).default([]),
    lang: z.string().default('id'),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
