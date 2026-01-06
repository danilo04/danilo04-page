import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import mdx from '@mdx-js/rollup'
import remarkFrontmatter from 'remark-frontmatter'
import remarkMdxFrontmatter from 'remark-mdx-frontmatter'
import remarkGfm from 'remark-gfm'
import rehypeHighlight from 'rehype-highlight'

import { cloudflare } from "@cloudflare/vite-plugin";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    // MDX plugin must come before React and run in pre phase
    {
      enforce: 'pre',
      ...mdx({
        remarkPlugins: [
          remarkFrontmatter,
          remarkMdxFrontmatter,
          remarkGfm, // GitHub Flavored Markdown (tables, strikethrough, etc.)
        ],
        rehypePlugins: [
          rehypeHighlight, // Syntax highlighting for code blocks
        ],
        providerImportSource: '@mdx-js/react',
      }),
    },
    // React plugin - exclude mdx files as they're handled by MDX plugin
    react({
      include: /\.(jsx|js|tsx|ts)$/,
    }),
    cloudflare(),
  ],
})
