import { defineCollection, z } from "astro:content";

const recipeCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    author: z.string().optional(),
    prepTime: z.union([z.string(), z.number()]).optional(),
    cookTime: z.union([z.string(), z.number()]).optional(),
    totalTime: z.union([z.string(), z.number()]).optional(),
    servings: z.union([z.string(), z.number()]).optional(),
    category: z.string(),
    tags: z.array(z.string()).optional(),
    image: z.string().optional(),
    imageAlt: z.string().optional(),
    date: z.date(),
    draft: z.boolean().optional(),
  }),
});

export const collections = {
  recipes: recipeCollection,
};