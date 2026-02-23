// tina/config.js
import { defineConfig } from "tinacms";
var branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";
var config_default = defineConfig({
  branch,
  clientId: "3795c97b-9434-4f41-b7f6-bdafcf6816d3",
  // Your Client ID
  token: "de5d4387fc303f0ec0cb21d8194574dd9089f830",
  // Your Read-Only Token
  build: {
    outputFolder: "admin",
    publicFolder: "public"
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public"
    }
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
          }
        },
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true
          },
          {
            type: "string",
            name: "description",
            label: "Description",
            ui: {
              component: "textarea"
            },
            required: true
          },
          {
            type: "string",
            name: "author",
            label: "Author",
            required: true
          },
          {
            type: "number",
            name: "prepTime",
            label: "Prep Time (minutes)",
            required: true
          },
          {
            type: "number",
            name: "cookTime",
            label: "Cook Time (minutes)",
            required: true
          },
          {
            type: "number",
            name: "totalTime",
            label: "Total Time (minutes)",
            required: true
          },
          {
            type: "number",
            name: "servings",
            label: "Servings",
            required: true
          },
          {
            type: "string",
            name: "category",
            label: "Category",
            options: ["breakfast", "lunch", "dinner", "dessert", "snack", "appetizer"],
            required: true
          },
          {
            type: "string",
            name: "tags",
            label: "Tags",
            list: true
          },
          {
            type: "image",
            name: "image",
            label: "Recipe Image"
          },
          {
            type: "string",
            name: "imageAlt",
            label: "Image Alt Text"
          },
          {
            type: "datetime",
            name: "date",
            label: "Date",
            required: true
          },
          {
            type: "number",
            name: "sortOrder",
            label: "Sort Order (lower numbers appear first)"
          },
          {
            type: "boolean",
            name: "draft",
            label: "Draft"
          },
          {
            type: "rich-text",
            name: "body",
            label: "Recipe Content",
            isBody: true
          }
        ]
      }
    ]
  }
});
export {
  config_default as default
};
