import type { ComponentType } from 'react';

export interface BlogPostFrontmatter {
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
}

export interface BlogPost {
  frontmatter: BlogPostFrontmatter;
  Content: ComponentType;
}

export interface LocalizedBlogPost {
  en: BlogPost;
  es: BlogPost;
}

export type Language = 'en' | 'es';
