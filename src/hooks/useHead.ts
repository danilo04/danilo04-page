import { useEffect } from 'react';

const SITE_NAME = 'Danilo Dominguez';
const SITE_URL = 'https://danilo04.dev';
const DEFAULT_OG_IMAGE = `${SITE_URL}/software-quality-mobile-header.svg`;

export interface HeadOptions {
  title: string;
  description: string;
  ogImage?: string;
  canonicalPath?: string;
  type?: 'website' | 'article';
  publishedTime?: string;
  author?: string;
  tags?: string[];
  lang?: 'en' | 'es';
  alternateLangPath?: string;
}

function setMetaTag(property: string, content: string, isName = false) {
  const attr = isName ? 'name' : 'property';
  let el = document.querySelector(`meta[${attr}="${property}"]`) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, property);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function setLinkTag(rel: string, href: string, attrs?: Record<string, string>) {
  // Build a selector that matches rel and any additional attributes
  let selector = `link[rel="${rel}"]`;
  if (attrs) {
    for (const [key, value] of Object.entries(attrs)) {
      selector += `[${key}="${value}"]`;
    }
  }

  let el = document.querySelector(selector) as HTMLLinkElement | null;
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', rel);
    if (attrs) {
      for (const [key, value] of Object.entries(attrs)) {
        el.setAttribute(key, value);
      }
    }
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}

function removeMetaTag(property: string, isName = false) {
  const attr = isName ? 'name' : 'property';
  const el = document.querySelector(`meta[${attr}="${property}"]`);
  if (el) el.remove();
}

function removeLinkTag(rel: string, attrs?: Record<string, string>) {
  let selector = `link[rel="${rel}"]`;
  if (attrs) {
    for (const [key, value] of Object.entries(attrs)) {
      selector += `[${key}="${value}"]`;
    }
  }
  const el = document.querySelector(selector);
  if (el) el.remove();
}

export function useHead(options: HeadOptions) {
  useEffect(() => {
    const {
      title,
      description,
      ogImage = DEFAULT_OG_IMAGE,
      canonicalPath,
      type = 'website',
      publishedTime,
      author,
      tags,
      lang,
      alternateLangPath,
    } = options;

    const fullTitle = title.includes(SITE_NAME) ? title : `${title} | ${SITE_NAME}`;
    const canonicalUrl = canonicalPath ? `${SITE_URL}${canonicalPath}` : SITE_URL;
    const fullOgImage = ogImage.startsWith('http') ? ogImage : `${SITE_URL}${ogImage}`;

    // Document title
    document.title = fullTitle;

    // Basic meta
    setMetaTag('description', description, true);
    setMetaTag('author', author || 'Danilo Dominguez', true);

    // Open Graph
    setMetaTag('og:title', fullTitle);
    setMetaTag('og:description', description);
    setMetaTag('og:image', fullOgImage);
    setMetaTag('og:url', canonicalUrl);
    setMetaTag('og:type', type);
    setMetaTag('og:site_name', SITE_NAME);
    if (lang) {
      setMetaTag('og:locale', lang === 'es' ? 'es_ES' : 'en_US');
    }

    // Twitter Card
    setMetaTag('twitter:card', 'summary_large_image', true);
    setMetaTag('twitter:title', fullTitle, true);
    setMetaTag('twitter:description', description, true);
    setMetaTag('twitter:image', fullOgImage, true);
    setMetaTag('twitter:site', '@danilo04', true);

    // Canonical
    if (canonicalPath) {
      setLinkTag('canonical', canonicalUrl);
    }

    // Article-specific meta
    if (type === 'article') {
      if (publishedTime) {
        setMetaTag('article:published_time', publishedTime);
      }
      if (author) {
        setMetaTag('article:author', author);
      }
      if (tags) {
        // Remove old article:tag entries
        document.querySelectorAll('meta[property="article:tag"]').forEach(el => el.remove());
        tags.forEach(tag => {
          const el = document.createElement('meta');
          el.setAttribute('property', 'article:tag');
          el.setAttribute('content', tag);
          document.head.appendChild(el);
        });
      }
    }

    // Hreflang alternate
    if (alternateLangPath && lang) {
      const altLang = lang === 'en' ? 'es' : 'en';
      setLinkTag('alternate', `${SITE_URL}${alternateLangPath}`, { hreflang: altLang });
      setLinkTag('alternate', canonicalUrl, { hreflang: lang });
      setLinkTag('alternate', canonicalUrl, { hreflang: 'x-default' });
    }

    // Update html lang attribute
    if (lang) {
      document.documentElement.setAttribute('lang', lang);
    }

    // Cleanup on unmount
    return () => {
      document.title = `${SITE_NAME} | Mobile & Backend Engineer, Researcher`;
      removeMetaTag('article:published_time');
      removeMetaTag('article:author');
      document.querySelectorAll('meta[property="article:tag"]').forEach(el => el.remove());
      removeLinkTag('alternate', { hreflang: 'en' });
      removeLinkTag('alternate', { hreflang: 'es' });
      removeLinkTag('alternate', { hreflang: 'x-default' });
    };
  }, [
    options.title,
    options.description,
    options.ogImage,
    options.canonicalPath,
    options.type,
    options.publishedTime,
    options.author,
    options.lang,
    options.alternateLangPath,
    // tags are compared by reference; callers should memoize if needed
    options.tags,
  ]);
}
