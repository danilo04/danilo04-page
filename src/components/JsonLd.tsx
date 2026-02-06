import React from 'react';

interface JsonLdProps {
  data: Record<string, unknown>;
}

/**
 * Renders a JSON-LD structured data script tag for SEO.
 */
export const JsonLd: React.FC<JsonLdProps> = ({ data }) => {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
};

const SITE_URL = 'https://danilo04.dev';

export function getWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Danilo Dominguez',
    url: SITE_URL,
    description: 'Personal website of Danilo Dominguez — Senior Mobile & Backend Engineer, PhD Researcher.',
    author: getPersonSchema(),
  };
}

export function getPersonSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Danilo Dominguez',
    url: SITE_URL,
    jobTitle: 'Senior Mobile & Backend Engineer',
    description: 'Senior Mobile & Backend Engineer with a PhD in Computer Science. Specializing in Android, Kotlin, security, and static analysis.',
    sameAs: [
      'https://github.com/danilo04',
      'https://www.linkedin.com/in/danilo-dominguez/',
      'https://x.com/danilo04',
    ],
    alumniOf: [
      {
        '@type': 'CollegeOrUniversity',
        name: 'Iowa State University',
      },
      {
        '@type': 'CollegeOrUniversity',
        name: 'Rochester Institute of Technology',
      },
    ],
    knowsAbout: ['Android Development', 'Kotlin', 'Java', 'Static Analysis', 'Mobile Security', 'Software Architecture'],
  };
}

export function getBlogPostingSchema(post: {
  title: string;
  description: string;
  slug: string;
  datePublished: string;
  author: string;
  coverImage: string;
  tags: string[];
}) {
  const fullImageUrl = post.coverImage.startsWith('http')
    ? post.coverImage
    : `${SITE_URL}${post.coverImage}`;

  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    image: fullImageUrl,
    datePublished: post.datePublished,
    author: {
      '@type': 'Person',
      name: post.author,
      url: SITE_URL,
    },
    publisher: {
      '@type': 'Person',
      name: 'Danilo Dominguez',
      url: SITE_URL,
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${SITE_URL}/blog/${post.slug}`,
    },
    keywords: post.tags,
  };
}

export function getBlogSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'Danilo Dominguez Blog',
    url: `${SITE_URL}/blog`,
    description: 'Thoughts on software engineering, mobile development, architecture, and technology.',
    author: {
      '@type': 'Person',
      name: 'Danilo Dominguez',
      url: SITE_URL,
    },
  };
}
