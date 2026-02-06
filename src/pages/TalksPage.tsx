import React from 'react';
import { useTranslations } from '../hooks/useTranslations';
import { useHead } from '../hooks/useHead';
import { useLanguage } from '../components/language-provider';

// Import talk thumbnails
import flisol2025Thumbnail from '../assets/talks/flisol-2025-tools-mobile-dev.png';
import flisol2023Thumbnail from '../assets/talks/flisol-2023-kotlin-coroutines.png';
import sfd2020Thumbnail from '../assets/talks/sfd-2020-opensource.png';
import pythonPanama2019Thumbnail from '../assets/talks/pythonpanama-2019-software.png';
import paperswelove2019Thumbnail from '../assets/talks/paperswelove-2019-event-driven.png';

// Import PDFs
import flisol2025Pdf from '../assets/talks/flisol-2025-tools-mobile-dev.pdf';
import flisol2023Pdf from '../assets/talks/flisol-2023-kotlin-coroutines.pdf';
import sfd2020Pdf from '../assets/talks/sfd-2020-opensource.pdf';
import pythonPanama2019Pdf from '../assets/talks/pythonpanama-2019-software.pdf';
import paperswelove2019Pdf from '../assets/talks/paperswelove-2019-event-driven.pdf';

interface Talk {
  id: string;
  title: string;
  description: string;
  event: string;
  date: string;
  year: number;
  location: string;
  thumbnail: string;
  deckUrl: string;
  videoUrl?: string;
  tags: string[];
}

const TalksPage: React.FC = () => {
  const t = useTranslations();
  const { language } = useLanguage();
  const page = t.talks;

  useHead({
    title: language === 'es' ? 'Charlas' : 'Talks',
    description: language === 'es'
      ? 'Colección de charlas sobre ingeniería de software, desarrollo móvil y tecnología.'
      : 'A collection of talks on software engineering, mobile development, and technology.',
    canonicalPath: '/talks',
    lang: language,
  });

  // Talks data with assets
  const talks: Talk[] = [
    {
      id: '1',
      title: page.list[0].title,
      description: page.list[0].description,
      event: 'FLISOL 2025',
      date: '2025',
      year: 2025,
      location: 'Panama City, Panama',
      thumbnail: flisol2025Thumbnail,
      deckUrl: flisol2025Pdf,
      videoUrl: 'https://www.youtube.com/watch?v=8jaxz3kadOg&t=430s',
      tags: ['Quality Assurance', 'Open Source', 'Testing', 'Mobile Development'],
    },
    {
      id: '2',
      title: page.list[1].title,
      description: page.list[1].description,
      event: 'FLISOL 2023',
      date: '2023',
      year: 2023,
      location: 'Panama City, Panama',
      thumbnail: flisol2023Thumbnail,
      deckUrl: flisol2023Pdf,
      tags: ['Kotlin', 'Coroutines', 'Android', 'Asynchronous Programming'],
    },
    {
      id: '3',
      title: page.list[2].title,
      description: page.list[2].description,
      event: 'Software Freedom Day 2020',
      date: '2020',
      year: 2020,
      location: 'Panama City, Panama',
      thumbnail: sfd2020Thumbnail,
      deckUrl: sfd2020Pdf,
      tags: ['Open Source', 'Research', 'Reproducibility', 'Scientific Computing'],
    },
    {
      id: '4',
      title: page.list[3].title,
      description: page.list[3].description,
      event: 'Python Panama Meetup 2019',
      date: '2019',
      year: 2019,
      location: 'Panama City, Panama',
      thumbnail: pythonPanama2019Thumbnail,
      deckUrl: pythonPanama2019Pdf,
      tags: ['Software Architecture', 'Design', 'SOLID', 'Complexity'],
    },
    {
      id: '5',
      title: page.list[4].title,
      description: page.list[4].description,
      event: 'Papers We Love Panamá',
      date: 'October 2019',
      year: 2019,
      location: 'Panama City, Panama',
      thumbnail: paperswelove2019Thumbnail,
      deckUrl: paperswelove2019Pdf,
      tags: ['Research', 'Race Conditions', 'Event-Driven Systems', 'Static Analysis'],
    },
  ].sort((a, b) => b.year - a.year); // Sort by year descending (newest first)

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-24 pb-12 overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 via-transparent to-primary/5 dark:from-amber-500/10 dark:to-primary/10" />
          <div className="absolute top-0 left-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl translate-y-1/2 translate-x-1/2" />
          {/* Floating presentation elements */}
          <div className="absolute top-20 right-20 text-amber-500/20 dark:text-amber-400/10 text-6xl hidden lg:block">
            <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h20"/><path d="M21 3v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3"/><path d="m7 21 5-5 5 5"/></svg>
          </div>
          <div className="absolute bottom-32 left-20 text-primary/20 dark:text-primary/10 text-4xl hidden lg:block">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 md:px-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 text-sm font-semibold mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg>
              Speaker
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 dark:text-white mb-6">
              {page.title}
            </h1>
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
              {page.description}
            </p>
          </div>
        </div>
      </section>

      {/* Talks Grid Section */}
      <section className="pt-12 pb-20 bg-white dark:bg-slate-900/50">
        <div className="max-w-6xl mx-auto px-4 md:px-10">
          <div className="flex items-center gap-3 mb-12">
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-500">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h20"/><path d="M21 3v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3"/><path d="m7 21 5-5 5 5"/></svg>
            </div>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
              All Talks
            </h2>
          </div>

          {talks.length === 0 ? (
            <div className="text-center py-20">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate-400"><path d="M2 3h20"/><path d="M21 3v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3"/><path d="m7 21 5-5 5 5"/></svg>
              </div>
              <p className="text-slate-500 dark:text-slate-400 text-lg">{page.empty}</p>
            </div>
          ) : (
            <div className="flex flex-col gap-6">
              {talks.map((talk, index) => (
                <article
                  key={talk.id}
                  className="group bg-gradient-to-br from-slate-50 to-white dark:from-slate-800/50 dark:to-slate-800/30 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700/50 hover:border-amber-500/50 transition-all hover:shadow-xl flex flex-col md:flex-row"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Thumbnail */}
                  <div className="relative h-48 md:h-auto md:w-72 lg:w-80 flex-shrink-0 overflow-hidden bg-slate-100 dark:bg-slate-800">
                    <img
                      src={talk.thumbnail}
                      alt={talk.title}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                    {/* Overlay with gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Event badge */}
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1.5 bg-amber-500 text-white text-xs font-bold rounded-full shadow-lg">
                        {talk.event}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 mb-3">
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>
                      <span>{talk.date}</span>
                      <span className="mx-1">•</span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                      <span>{talk.location}</span>
                    </div>

                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-primary transition-colors">
                      {talk.title}
                    </h3>

                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-4 flex-1">
                      {talk.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {talk.tags.slice(0, 4).map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 bg-slate-100 dark:bg-slate-700/50 text-slate-600 dark:text-slate-400 text-xs font-medium rounded-md"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Action buttons */}
                    <div className="flex gap-3">
                      <a
                        href={talk.deckUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/10 text-amber-600 dark:text-amber-400 font-semibold rounded-lg hover:bg-amber-500/20 transition-colors text-sm"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
                        {page.deck}
                      </a>
                      {talk.videoUrl && (
                        <a
                          href={talk.videoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary font-semibold rounded-lg hover:bg-primary/20 transition-colors text-sm"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="5 3 19 12 5 21 5 3"/></svg>
                          {page.watch}
                        </a>
                      )}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-amber-500/10 via-transparent to-primary/10 dark:from-amber-500/20 dark:to-primary/20">
        <div className="max-w-4xl mx-auto px-4 md:px-10 text-center">
          <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-amber-500/10 flex items-center justify-center text-amber-500">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"/></svg>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">
            {page.cta.title}
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto">
            {page.cta.description}
          </p>
          <a
            href="mailto:danilo.dominguez.0416@gmail.com"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-bold rounded-xl hover:bg-primary/90 transition-colors shadow-lg shadow-primary/25 text-lg"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
            {page.cta.getInTouch}
          </a>
        </div>
      </section>
    </div>
  );
};

export default TalksPage;

