import React from 'react';
import { useParams, Link, useSearchParams } from 'react-router-dom';
import { useTranslations } from '../hooks/useTranslations';
import { useLanguage } from '../components/language-provider';
import { useHead } from '../hooks/useHead';
import { JsonLd, getBlogPostingSchema } from '../components/JsonLd';
import { getPostBySlug, getRelatedPosts } from '../content/blog';
import { MDXProvider } from '../components/MDXProvider';
import { BlogInteractions } from '../components/BlogInteractions';

const BlogPostPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [searchParams] = useSearchParams();
  const t = useTranslations();
  const { language: contextLanguage } = useLanguage();
  
  // Use lang query param if valid, otherwise fall back to context language
  const langParam = searchParams.get('lang');
  const language = (langParam === 'en' || langParam === 'es') ? langParam : contextLanguage;
  
  const post = slug ? getPostBySlug(slug, language) : undefined;
  const relatedPosts = slug ? getRelatedPosts(slug, language, 2) : [];

  const altLang = language === 'en' ? 'es' : 'en';

  useHead({
    title: post ? post.frontmatter.title : t.blog.postNotFound,
    description: post ? post.frontmatter.summary : t.blog.postNotFoundDescription,
    ogImage: post?.frontmatter.coverImage,
    canonicalPath: slug ? `/blog/${slug}` : '/blog',
    type: post ? 'article' : 'website',
    publishedTime: post?.frontmatter.date,
    author: post?.frontmatter.author,
    tags: post?.frontmatter.tags,
    lang: language,
    alternateLangPath: slug ? `/blog/${slug}?lang=${altLang}` : undefined,
  });

  const categoryColors: Record<string, { bg: string; text: string; darkBg: string; darkText: string }> = {
    engineering: { bg: 'bg-blue-100', text: 'text-blue-600', darkBg: 'dark:bg-blue-900/30', darkText: 'dark:text-blue-400' },
    security: { bg: 'bg-red-100', text: 'text-red-600', darkBg: 'dark:bg-red-900/30', darkText: 'dark:text-red-400' },
    research: { bg: 'bg-purple-100', text: 'text-purple-600', darkBg: 'dark:bg-purple-900/30', darkText: 'dark:text-purple-400' },
    mobile: { bg: 'bg-emerald-100', text: 'text-emerald-600', darkBg: 'dark:bg-emerald-900/30', darkText: 'dark:text-emerald-400' },
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString(language === 'es' ? 'es-ES' : 'en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate-400"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/></svg>
          </div>
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">{t.blog.postNotFound}</h1>
          <p className="text-slate-500 dark:text-slate-400 mb-6">{t.blog.postNotFoundDescription}</p>
          <Link 
            to="/blog" 
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-bold rounded-xl hover:bg-primary/90 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>
            {t.blog.back}
          </Link>
        </div>
      </div>
    );
  }

  const { frontmatter, Content } = post;
  const colors = categoryColors[frontmatter.category] || categoryColors.engineering;

  return (
    <div className="min-h-screen">
      <JsonLd data={getBlogPostingSchema({
        title: frontmatter.title,
        description: frontmatter.summary,
        slug: frontmatter.slug,
        datePublished: frontmatter.date,
        author: frontmatter.author,
        coverImage: frontmatter.coverImage,
        tags: frontmatter.tags,
      })} />
      {/* Hero Section */}
      <section className="relative pt-24 pb-12 overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-primary/5 dark:from-cyan-500/10 dark:to-primary/10" />
          <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2" />
        </div>

        <div className="max-w-4xl mx-auto px-4 md:px-10">
          {/* Back button */}
          <Link 
            to="/blog" 
            className="inline-flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-primary transition-colors mb-8 group"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:-translate-x-1 transition-transform"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>
            {t.blog.back}
          </Link>

          {/* Category badge */}
          <div className="mb-4">
            <span className={`px-3 py-1.5 ${colors.bg} ${colors.text} ${colors.darkBg} ${colors.darkText} text-xs font-bold rounded-full uppercase tracking-wider`}>
              {t.blog.section.categories[frontmatter.category as keyof typeof t.blog.section.categories] || frontmatter.category}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 dark:text-white mb-6 leading-tight">
            {frontmatter.title}
          </h1>

          {/* Meta info */}
          <div className="flex flex-wrap items-center gap-4 text-slate-600 dark:text-slate-400 mb-8">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                {frontmatter.author.split(' ').map(n => n[0]).join('')}
              </div>
              <span className="font-medium">{frontmatter.author}</span>
            </div>
            <span className="text-slate-300 dark:text-slate-600">•</span>
            <div className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>
              <span>{formatDate(frontmatter.date)}</span>
            </div>
            <span className="text-slate-300 dark:text-slate-600">•</span>
            <div className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              <span>{frontmatter.readTime}</span>
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-8">
            {frontmatter.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-sm font-medium rounded-lg"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Cover Image */}
      <section className="max-w-5xl mx-auto px-4 md:px-10 mb-12">
        <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl">
          <img
            src={frontmatter.coverImage}
            alt={frontmatter.title}
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* Content - MDX Rendered */}
      <section className="max-w-4xl mx-auto px-4 md:px-10 pb-20">
        <article className="prose prose-lg dark:prose-invert max-w-none">
          <MDXProvider>
            <Content />
          </MDXProvider>
        </article>

        {/* Likes and Comments */}
        <BlogInteractions slug={post.frontmatter.slug} />

        {/* Share Section */}
        <div className="mt-16 pt-8 border-t border-slate-200 dark:border-slate-700">
          <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">
            {language === 'es' ? 'Compartir este artículo' : 'Share this article'}
          </h3>
          <div className="flex gap-3">
            <a
              href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(frontmatter.title)}&url=${encodeURIComponent(window.location.href)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-slate-100 dark:bg-slate-800 rounded-xl hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
              aria-label="Share on Twitter"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate-600 dark:text-slate-400"><path d="M4 4l11.733 16h4.267l-11.733 -16z"/><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"/></svg>
            </a>
            <a
              href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(window.location.href)}&title=${encodeURIComponent(frontmatter.title)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-slate-100 dark:bg-slate-800 rounded-xl hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
              aria-label="Share on LinkedIn"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate-600 dark:text-slate-400"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
            <button
              onClick={() => navigator.clipboard.writeText(window.location.href)}
              className="p-3 bg-slate-100 dark:bg-slate-800 rounded-xl hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
              aria-label="Copy link"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate-600 dark:text-slate-400"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
            </button>
          </div>
        </div>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">
              {language === 'es' ? 'Artículos relacionados' : 'Related Articles'}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relatedPosts.map((relatedPost) => (
                <Link
                  key={relatedPost.frontmatter.slug}
                  to={`/blog/${relatedPost.frontmatter.slug}`}
                  className="group flex gap-4 p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                >
                  <div className="w-24 h-24 rounded-lg overflow-hidden flex-shrink-0">
                    <img
                      src={relatedPost.frontmatter.coverImage}
                      alt={relatedPost.frontmatter.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors line-clamp-2 mb-2">
                      {relatedPost.frontmatter.title}
                    </h4>
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                      {relatedPost.frontmatter.readTime}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </section>
    </div>
  );
};

export default BlogPostPage;
