import { z, defineCollection } from 'astro:content';

const jobCollection = defineCollection({
  type: 'content', // v2.5.0 and later
  schema: z.object({
    title: z.string(),
    type: z.string(),
    location: z.string(),
    salary: z.string(),
  }),
});

// 3. Export a single `collections` object to register your collection(s)
export const collections = {
  'jobs': jobCollection,
};
