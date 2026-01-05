
import React from 'react';
import { useTranslations } from '../hooks/useTranslations';

// Image URLs for blog posts (not translatable)
const BLOG_POST_IMAGES: Record<string, string> = {
  '1': 'https://lh3.googleusercontent.com/aida-public/AB6AXuCk4kISyqfe4IYNHDhEUsOy-9Z1M674xqyl1ruVYSKy5kqQkQYk1xkCDwRHhPsZlnUNsC4dA3tZczk1KHlzzOO0HC1VpFhfd49i0cDwknc8jkqa-jkrK_iz7plz_zkpixzbObYj4flwVjGZqBdMuNUuVDT4VfKEJKarD140zuA5O9TDSWBheUSP0MaNUH9aLkbbF3KKaYhjDEGJdQSM02vtOCd14vDl6KlIygccwt2B3p08HcYMHunpNd0kQ_BMlUlzMuzbKMv6BtMx',
  '2': 'https://lh3.googleusercontent.com/aida-public/AB6AXuBbu0RTadhwdzlzm1ZrIlxurOp0YyPbqADjojrJ5mOeBm2q4XmRr-tcNm1sUKMdglQrz64QPpqupXMXycx3CnLHSUks-HOsBL3OCC2itPRYX7PtfkN4dCLb2yFCMe5i1zMMH8r6P9pGgEUYwGC-5G0_H_ajkr9G0-pgdNMc_M2ptt99aGAABomtr9v_GaIYNUiD5ktf31QR13PpJF-H_SajRLd9uu1xKVbSPHlc3j5awazRK-IPP_GnQZf9LGEn6Gba-_cUl76ziPy_',
  '3': 'https://lh3.googleusercontent.com/aida-public/AB6AXuD02wVImBPaMn_hbrOoaJrTh995dfEtpb5Dl3w1M9OpJGprOD5IYjM_jbd32cb5LDQCTn-g3QU_OYgQ0p00yC69USD0WE7nXdH4PoKzo-HQqknFOplwQ4sohdRu7DXg-J-kR0VoqmGc_JHRSYkdrYhWWcahXF7nAUbXDSLB0HjMb39RCyQl5VYxGB4ZqA93OMHKMP8ku4d19UIcZA9LkEBsK7G9bz0cv5KSQbH_BP8VGuqhikgDYSOImrAbx9vEId-Z7X-ujFGtDN05',
};

const Blog: React.FC = () => {
  const t = useTranslations();
  const posts = t.blog.section.posts;
  
  return (
    <section id="blog" className="w-full py-24 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 md:px-10 lg:px-20 flex flex-col gap-12">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6">
          <div className="flex flex-col gap-4">
            <h2 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white">{t.blog.section.heading}</h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-lg">{t.blog.section.description}</p>
          </div>
          <a href="#" className="group flex items-center gap-2 text-primary font-bold transition-all hover:gap-3">
            {t.blog.section.viewAllPosts}
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article key={post.id} className="group flex flex-col bg-white dark:bg-surface-dark border border-slate-200 dark:border-border-dark rounded-2xl overflow-hidden transition-all hover:border-primary/40 hover:-translate-y-2 shadow-sm hover:shadow-2xl">
              <div className="aspect-video w-full overflow-hidden relative">
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity z-10 mix-blend-overlay"></div>
                <img 
                  src={BLOG_POST_IMAGES[post.id]} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="p-8 flex flex-col gap-4 flex-1">
                <div className="text-xs font-bold text-primary uppercase tracking-[0.2em]">{t.blog.section.categories[post.category as keyof typeof t.blog.section.categories]}</div>
                <h3 className="text-xl font-bold leading-snug text-slate-900 dark:text-white group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm line-clamp-3 leading-relaxed">
                  {post.summary}
                </p>
                <div className="mt-auto pt-6 border-t border-slate-100 dark:border-border-dark flex items-center justify-between text-[11px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest">
                  <span>{post.date}</span>
                  <div className="flex items-center gap-1.5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                    {post.readTime}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;