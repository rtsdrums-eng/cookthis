import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const recipes = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/recipes" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    author: z.string().default("Ryan"),
    prepTime: z.string(),
    cookTime: z.string(),
    totalTime: z.string().optional(),
    servings: z.number(),
    category: z.enum([
      "breakfast",
      "lunch",
      "dinner",
      "snack",
      "dessert",
      "side",
      "drink",
    ]),
    tags: z.array(z.string()).default([]),
    image: z.string().optional(),
    imageAlt: z.string().optional(),
    date: z.coerce.date(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { recipes };
