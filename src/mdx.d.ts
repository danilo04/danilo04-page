/// <reference types="@mdx-js/react" />

declare module '*.mdx' {
  import type { MDXProps } from 'mdx/types';
  
  export const frontmatter: {
    slug: string;
    title: string;
    summary: string;
    category: 'engineering' | 'security' | 'research' | 'mobile';
    coverImage: string;
    author: string;
    date: string;
    readTime: string;
    tags: string[];
    published: boolean;
  };
  
  export default function MDXContent(props: MDXProps): JSX.Element;
}
