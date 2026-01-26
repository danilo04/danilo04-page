import type { BlogPost, BlogPostFrontmatter, Language, LocalizedBlogPost } from './types';

// Import English MDX posts
import ReactiveAndroidKotlinFlowsEn, { 
  frontmatter as reactiveAndroidKotlinFlowsEnFrontmatter 
} from './posts/en/reactive-android-kotlin-flows.mdx';
import SoftwareQualityMobileAppsEn, { 
  frontmatter as softwareQualityMobileAppsEnFrontmatter 
} from './posts/en/software-quality-mobile-apps.mdx';
import ZoomAndOtherEffectsComposeEn, { 
  frontmatter as zoomAndOtherEffectsComposeEnFrontmatter 
} from './posts/en/zoom-and-other-effects-compose.mdx';

// Import Spanish MDX posts
import ReactiveAndroidKotlinFlowsEs, { 
  frontmatter as reactiveAndroidKotlinFlowsEsFrontmatter 
} from './posts/es/reactive-android-kotlin-flows.mdx';
import SoftwareQualityMobileAppsEs, { 
  frontmatter as softwareQualityMobileAppsEsFrontmatter 
} from './posts/es/software-quality-mobile-apps.mdx';
import ZoomAndOtherEffectsComposeEs, { 
  frontmatter as zoomAndOtherEffectsComposeEsFrontmatter 
} from './posts/es/zoom-and-other-effects-compose.mdx';

// All blog posts organized by slug with both languages
const blogPostsMap: Record<string, LocalizedBlogPost> = {
  'reactive-android-kotlin-flows': {
    en: {
      frontmatter: reactiveAndroidKotlinFlowsEnFrontmatter as unknown as BlogPostFrontmatter,
      Content: ReactiveAndroidKotlinFlowsEn,
    },
    es: {
      frontmatter: reactiveAndroidKotlinFlowsEsFrontmatter as unknown as BlogPostFrontmatter,
      Content: ReactiveAndroidKotlinFlowsEs,
    },
  },
  'software-quality-mobile-apps': {
    en: {
      frontmatter: softwareQualityMobileAppsEnFrontmatter as unknown as BlogPostFrontmatter,
      Content: SoftwareQualityMobileAppsEn,
    },
    es: {
      frontmatter: softwareQualityMobileAppsEsFrontmatter as unknown as BlogPostFrontmatter,
      Content: SoftwareQualityMobileAppsEs,
    },
  },
  'zoom-and-other-effects-compose': {
    en: {
      frontmatter: zoomAndOtherEffectsComposeEnFrontmatter as unknown as BlogPostFrontmatter,
      Content: ZoomAndOtherEffectsComposeEn,
    },
    es: {
      frontmatter: zoomAndOtherEffectsComposeEsFrontmatter as unknown as BlogPostFrontmatter,
      Content: ZoomAndOtherEffectsComposeEs,
    },
  },
};

// Get all post slugs
export function getAllPostSlugs(): string[] {
  return Object.keys(blogPostsMap);
}

// Get all published posts for a specific language (sorted by date, newest first)
export function getAllPosts(language: Language): BlogPost[] {
  return Object.values(blogPostsMap)
    .map(post => post[language])
    .filter(post => post.frontmatter.published)
    .sort((a, b) => new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime());
}

// Get post by slug for a specific language
export function getPostBySlug(slug: string, language: Language): BlogPost | undefined {
  const post = blogPostsMap[slug];
  if (!post) return undefined;
  
  const localizedPost = post[language];
  return localizedPost.frontmatter.published ? localizedPost : undefined;
}

// Get posts metadata for listing (without Content component)
export function getPostsMeta(language: Language): BlogPostFrontmatter[] {
  return getAllPosts(language).map(post => post.frontmatter);
}

// Get posts by category
export function getPostsByCategory(category: BlogPostFrontmatter['category'], language: Language): BlogPost[] {
  return getAllPosts(language).filter(post => post.frontmatter.category === category);
}

// Get related posts (same category, excluding current)
export function getRelatedPosts(slug: string, language: Language, limit: number = 3): BlogPost[] {
  const currentPost = getPostBySlug(slug, language);
  if (!currentPost) return [];
  
  return getAllPosts(language)
    .filter(post => post.frontmatter.slug !== slug && post.frontmatter.category === currentPost.frontmatter.category)
    .slice(0, limit);
}

export type { BlogPost, BlogPostFrontmatter, Language, LocalizedBlogPost } from './types';
