import { remarkDocGen, fileGenerator } from "fumadocs-docgen";
import { defineCollections, defineConfig } from "fumadocs-mdx/config";
import { z } from "zod";

export const posts = defineCollections({
  dir: "content/posts",
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    date: z.string().date().or(z.date()).optional(),
  }),
  type: "doc",
});

export const lab = defineCollections({
  dir: "content/lab",
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    date: z.string().date().or(z.date()).optional(),
  }),
  type: "doc",
});

export default defineConfig({
  mdxOptions: {
    rehypeCodeOptions: {
      inline: "tailing-curly-colon",
      themes: {
        light: "catppuccin-latte",
        dark: "catppuccin-mocha",
      },
    },
    remarkPlugins: [[remarkDocGen, { generators: [fileGenerator()] }]],
  },
});
