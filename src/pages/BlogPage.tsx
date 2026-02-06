import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslations } from '../hooks/useTranslations';
import { useLanguage } from '../components/language-provider';
import { useHead } from '../hooks/useHead';
import { JsonLd, getBlogSchema } from '../components/JsonLd';
import { getAllPosts } from '../content/blog';

const BlogPage: React.FC = () => {
  const t = useTranslations();
  const { language } = useLanguage();
  const posts = getAllPosts(language);

  useHead({
    title: 'Blog',
    description: language === 'es'
      ? 'Pensamientos sobre ingeniería de software, arquitectura y tecnología.'
      : 'Thoughts on software engineering, architecture, and technology.',
    canonicalPath: '/blog',
    lang: language,
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

  return (
    <div className="min-h-screen">
      <JsonLd data={getBlogSchema()} />
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-primary/5 dark:from-cyan-500/10 dark:to-primary/10" />
          <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl translate-y-1/2 translate-x-1/2" />
          {/* Floating elements */}
          <div className="absolute top-20 right-20 text-cyan-500/20 dark:text-cyan-400/10 text-6xl font-mono hidden lg:block">&lt;/&gt;</div>
          <div className="absolute bottom-32 left-20 text-primary/20 dark:text-primary/10 text-4xl font-mono hidden lg:block">{ }</div>
        </div>

        <div className="max-w-6xl mx-auto px-4 md:px-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 text-sm font-semibold mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 19l7-7 3 3-7 7-3-3z"/><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/><path d="M2 2l7.586 7.586"/><circle cx="11" cy="11" r="2"/></svg>
              Blog
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 dark:text-white mb-6">
              {t.blog.title}
            </h1>
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
              {t.blog.description}
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts Section */}
      <section className="py-20 bg-white dark:bg-slate-900/50">
        <div className="max-w-6xl mx-auto px-4 md:px-10">
          <div className="flex items-center gap-3 mb-12">
            <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-500">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/></svg>
            </div>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white">{t.blog.section.heading}</h2>
          </div>

          {posts.length === 0 ? (
            <div className="text-center py-20">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate-400"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/></svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{t.blog.empty.title}</h3>
              <p className="text-slate-500 dark:text-slate-400">{t.blog.empty.description}</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => {
                const { frontmatter } = post;
                const colors = categoryColors[frontmatter.category] || categoryColors.engineering;
                
                return (
                  <article
                    key={frontmatter.slug}
                    className="group flex flex-col bg-gradient-to-br from-slate-50 to-white dark:from-slate-800/50 dark:to-slate-800/30 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700/50 hover:border-cyan-500/50 transition-all hover:-translate-y-2 hover:shadow-xl"
                  >
                    {/* Cover Image */}
                    <Link to={`/blog/${frontmatter.slug}`} className="relative aspect-video overflow-hidden">
                      <img
                        src={frontmatter.coverImage}
                        alt={frontmatter.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                      
                      {/* Category badge */}
                      <div className="absolute top-4 left-4">
                        <span className={`px-3 py-1.5 ${colors.bg} ${colors.text} ${colors.darkBg} ${colors.darkText} text-xs font-bold rounded-full uppercase tracking-wider`}>
                          {t.blog.section.categories[frontmatter.category as keyof typeof t.blog.section.categories] || frontmatter.category}
                        </span>
                      </div>
                    </Link>

                    {/* Content */}
                    <div className="p-6 flex flex-col flex-1">
                      <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 mb-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>
                        <span>{formatDate(frontmatter.date)}</span>
                      </div>

                      <Link to={`/blog/${frontmatter.slug}`}>
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-primary transition-colors line-clamp-2">
                          {frontmatter.title}
                        </h3>
                      </Link>

                      <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-4 flex-1 line-clamp-3">
                        {frontmatter.summary}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {frontmatter.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="px-2.5 py-1 bg-slate-100 dark:bg-slate-700/50 text-slate-600 dark:text-slate-400 text-xs font-medium rounded-md"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Footer */}
                      <div className="pt-4 border-t border-slate-100 dark:border-slate-700/50 flex items-center justify-between">
                        <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                          {frontmatter.author}
                        </span>
                        <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400">
                          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                          {frontmatter.readTime}
                        </div>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-cyan-500/10 via-transparent to-primary/10 dark:from-cyan-500/20 dark:to-primary/20">
        <div className="max-w-4xl mx-auto px-4 md:px-10 text-center">
          <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-cyan-500/10 flex items-center justify-center text-cyan-500">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"/></svg>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">
            {t.aboutPage.cta.title}
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto">
            {t.aboutPage.cta.description}
          </p>
          <a
            href="mailto:danilo.dominguez.0416@gmail.com"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-bold rounded-xl hover:bg-primary/90 transition-colors shadow-lg shadow-primary/25 text-lg"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
            {t.aboutPage.cta.button}
          </a>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;
