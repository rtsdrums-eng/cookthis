import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

export default defineConfig({
  branch,
  clientId: process.env.TINA_CLIENT_ID, // Get this from tina.io
  token: process.env.TINA_TOKEN, // Get this from tina.io

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },

  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public",
    },
  },

  // Build the schema
  schema: {
    collections: [
      {
        name: "recipes",
        label: "Recipes",
        path: "src/content/recipes",
        format: "md",
        ui: {
          // Allow reordering in the CMS UI
          router: ({ collection, document }) => {
            return `/recipes/${document._sys.filename}`;
          },
        },
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "description",
            label: "Description",
            ui: {
              component: "textarea",
            },
            required: true,
          },
          {
            type: "string",
            name: "author",
            label: "Author",
            required: true,
          },
          {
            type: "number",
            name: "prepTime",
            label: "Prep Time (minutes)",
            required: true,
          },
          {
            type: "number",
            name: "cookTime",
            label: "Cook Time (minutes)",
            required: true,
          },
          {
            type: "number",
            name: "totalTime",
            label: "Total Time (minutes)",
            required: true,
          },
          {
            type: "number",
            name: "servings",
            label: "Servings",
            required: true,
          },
          {
            type: "string",
            name: "category",
            label: "Category",
            options: ["breakfast", "lunch", "dinner", "dessert", "snack", "appetizer"],
            required: true,
          },
          {
            type: "string",
            name: "tags",
            label: "Tags",
            list: true,
          },
          {
            type: "image",
            name: "image",
            label: "Recipe Image",
          },
          {
            type: "string",
            name: "imageAlt",
            label: "Image Alt Text",
          },
          {
            type: "datetime",
            name: "date",
            label: "Date",
            required: true,
          },
          {
            type: "number",
            name: "sortOrder",
            label: "Sort Order (lower numbers appear first)",
          },
          {
            type: "boolean",
            name: "draft",
            label: "Draft",
          },
          {
            type: "rich-text",
            name: "body",
            label: "Recipe Content",
            isBody: true,
          },
        ],
      },
    ],
  },
});