import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslations } from '../hooks/useTranslations';
import { useLanguage } from './language-provider';
import { getAllPosts } from '../content/blog';

const Blog: React.FC = () => {
  const t = useTranslations();
  const { language } = useLanguage();
  const posts = getAllPosts(language).slice(0, 3); // Show only first 3 posts

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
      month: 'short',
      day: 'numeric',
    });
  };
  
  return (
    <section id="blog" className="w-full py-24 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 md:px-10 lg:px-20 flex flex-col gap-12">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6">
          <div className="flex flex-col gap-4">
            <h2 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white">{t.blog.section.heading}</h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-lg">{t.blog.section.description}</p>
          </div>
          <Link to="/blog" className="group flex items-center gap-2 text-primary font-bold transition-all hover:gap-3">
            {t.blog.section.viewAllPosts}
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
          </Link>
        </div>

        {posts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-slate-500 dark:text-slate-400">{t.blog.empty.title}</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {posts.map((post) => {
              const { frontmatter } = post;
              const colors = categoryColors[frontmatter.category] || categoryColors.engineering;
              
              return (
                <article key={frontmatter.slug} className="group flex flex-col bg-white dark:bg-surface-dark border border-slate-200 dark:border-border-dark rounded-2xl overflow-hidden transition-all hover:border-primary/40 hover:-translate-y-2 shadow-sm hover:shadow-2xl">
                  <Link to={`/blog/${frontmatter.slug}`} className="aspect-video w-full overflow-hidden relative">
                    <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity z-10 mix-blend-overlay"></div>
                    <img 
                      src={frontmatter.coverImage} 
                      alt={frontmatter.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </Link>
                  <div className="p-8 flex flex-col gap-4 flex-1">
                    <div className={`text-xs font-bold uppercase tracking-[0.2em] ${colors.text} ${colors.darkText}`}>
                      {t.blog.section.categories[frontmatter.category as keyof typeof t.blog.section.categories] || frontmatter.category}
                    </div>
                    <Link to={`/blog/${frontmatter.slug}`}>
                      <h3 className="text-xl font-bold leading-snug text-slate-900 dark:text-white group-hover:text-primary transition-colors">
                        {frontmatter.title}
                      </h3>
                    </Link>
                    <p className="text-slate-600 dark:text-slate-400 text-sm line-clamp-3 leading-relaxed">
                      {frontmatter.summary}
                    </p>
                    <div className="mt-auto pt-6 border-t border-slate-100 dark:border-border-dark flex items-center justify-between text-[11px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest">
                      <span>{formatDate(frontmatter.date)}</span>
                      <div className="flex items-center gap-1.5">
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
  );
};

export default Blog;
