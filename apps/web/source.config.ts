import { defineConfig, defineDocs, frontmatterSchema, metaSchema } from "fumadocs-mdx/config";
import { z } from "zod";

export const docs = defineDocs({
  dir: "content/docs",
  docs: {
    postprocess: {
      includeProcessedMarkdown: true,
    },
    schema: frontmatterSchema.extend({
      author: z
        .object({
          name: z.string(),
          url: z.string().url().optional(),
        })
        .optional(),
      date: z.string().optional(),
    }),
  },
  meta: {
    schema: metaSchema,
  },
});

export const blog = defineDocs({
  dir: "content/blog",
  docs: {
    schema: frontmatterSchema.extend({
      description: z.string(),
      author: z.object({
        name: z.string(),
        url: z.string().url().optional(),
      }),
      date: z.string().date(),
      tags: z.array(z.string()).default([]),
    }),
  },
  meta: {
    schema: metaSchema,
  },
});

export default defineConfig({
  mdxOptions: {
    remarkNpmOptions: {
      persist: {
        id: "package-manager",
      },
    },
  },
});
