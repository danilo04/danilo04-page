import React from 'react';
import { useTranslations } from '../hooks/useTranslations';
import daniloImage from '../assets/danilo-cartoon.png';

const AboutPage: React.FC = () => {
  const t = useTranslations();
  const page = t.aboutPage;

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-amber-500/5 dark:from-primary/10 dark:to-amber-500/10" />
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
        </div>

        <div className="max-w-6xl mx-auto px-4 md:px-10">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            {/* Profile Image */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary via-blue-400 to-primary rounded-full blur opacity-30 group-hover:opacity-50 transition duration-500" />
              <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden ring-4 ring-white dark:ring-slate-800 shadow-2xl">
                <img
                  src={daniloImage}
                  alt="Danilo Dominguez"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Hero Content */}
            <div className="flex-1 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                {page.hero.badge}
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 dark:text-white mb-6">
                {page.hero.name}
              </h1>
              <p className="text-xl md:text-2xl text-primary font-semibold mb-4">
                {page.hero.title}
              </p>
              <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed">
                {page.hero.summary}
              </p>
              
              {/* Contact Links */}
              <div className="flex flex-wrap gap-4 mt-8 justify-center lg:justify-start">
                <a
                  href="mailto:danilo.dominguez.0416@gmail.com"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors shadow-lg shadow-primary/25"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                  {page.hero.contact}
                </a>
                <a
                  href="https://github.com/danilo04"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-semibold rounded-lg hover:opacity-90 transition-opacity"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                  GitHub
                </a>
                <a
                  href="https://linkedin.com/in/danilo-dominguez"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#0077B5] text-white font-semibold rounded-lg hover:opacity-90 transition-opacity"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Profile Section */}
      <section className="py-20 bg-white dark:bg-slate-900/50">
        <div className="max-w-6xl mx-auto px-4 md:px-10">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
            </div>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white">{page.profile.title}</h2>
          </div>
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg">
              {page.profile.content}
            </p>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900/30">
        <div className="max-w-6xl mx-auto px-4 md:px-10">
          <div className="flex items-center gap-3 mb-12">
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-500">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="14" x="2" y="7" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
            </div>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white">{page.experience.title}</h2>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-amber-500 to-primary/20" />

            <div className="space-y-12">
              {page.experience.jobs.map((job, index) => (
                <div key={index} className="relative pl-8 md:pl-20">
                  {/* Timeline dot */}
                  <div className="absolute left-0 md:left-8 top-0 w-4 h-4 -translate-x-1/2 rounded-full bg-primary ring-4 ring-white dark:ring-slate-900 shadow-lg" />
                  
                  <div className="bg-white dark:bg-slate-800/50 rounded-2xl p-6 md:p-8 shadow-sm border border-slate-200 dark:border-slate-700/50 hover:shadow-lg transition-shadow">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white">{job.title}</h3>
                        <p className="text-primary font-semibold">{job.company}</p>
                      </div>
                      <div className="flex flex-col md:items-end text-sm text-slate-500 dark:text-slate-400">
                        <span className="font-medium">{job.period}</span>
                        <span>{job.location}</span>
                      </div>
                    </div>
                    <ul className="space-y-2">
                      {job.highlights.map((highlight, hIndex) => (
                        <li key={hIndex} className="flex items-start gap-3 text-slate-600 dark:text-slate-400">
                          <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20 bg-white dark:bg-slate-900/50">
        <div className="max-w-6xl mx-auto px-4 md:px-10">
          <div className="flex items-center gap-3 mb-12">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-500">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5"/></svg>
            </div>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white">{page.education.title}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {page.education.degrees.map((degree, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-slate-50 to-white dark:from-slate-800/50 dark:to-slate-800/30 rounded-2xl p-6 border border-slate-200 dark:border-slate-700/50 hover:border-primary/50 transition-all hover:-translate-y-1"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl -mr-10 -mt-10 group-hover:bg-primary/10 transition-colors" />
                
                <div className="relative">
                  <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-4">
                    {degree.period}
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{degree.degree}</h3>
                  <p className="text-primary font-medium mb-2">{degree.institution}</p>
                  {degree.details && (
                    <p className="text-sm text-slate-500 dark:text-slate-400">{degree.details}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900/30">
        <div className="max-w-6xl mx-auto px-4 md:px-10">
          <div className="flex items-center gap-3 mb-12">
            <div className="w-12 h-12 rounded-xl bg-violet-500/10 flex items-center justify-center text-violet-500">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/></svg>
            </div>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white">{page.skills.title}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {page.skills.categories.map((category, index) => (
              <div key={index} className="bg-white dark:bg-slate-800/50 rounded-2xl p-6 border border-slate-200 dark:border-slate-700/50">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full" />
                  {category.name}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.items.map((item, iIndex) => (
                    <span
                      key={iIndex}
                      className="px-3 py-1.5 bg-slate-100 dark:bg-slate-700/50 text-slate-700 dark:text-slate-300 text-sm font-medium rounded-lg hover:bg-primary/10 hover:text-primary transition-colors cursor-default"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards & Volunteering Section */}
      <section className="py-20 bg-white dark:bg-slate-900/50">
        <div className="max-w-6xl mx-auto px-4 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Awards */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-xl bg-yellow-500/10 flex items-center justify-center text-yellow-500">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/></svg>
                </div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">{page.awards.title}</h2>
              </div>
              <div className="space-y-4">
                {page.awards.list.map((award, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 bg-gradient-to-r from-yellow-50 to-amber-50 dark:from-yellow-900/10 dark:to-amber-900/10 rounded-xl border border-yellow-200/50 dark:border-yellow-800/30">
                    <span className="text-2xl font-black text-yellow-600 dark:text-yellow-500">{award.year}</span>
                    <div>
                      <h4 className="font-semibold text-slate-900 dark:text-white">{award.title}</h4>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Volunteering */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-xl bg-rose-500/10 flex items-center justify-center text-rose-500">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
                </div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">{page.volunteering.title}</h2>
              </div>
              <div className="space-y-4">
                {page.volunteering.list.map((vol, index) => (
                  <div key={index} className="p-4 bg-gradient-to-r from-rose-50 to-pink-50 dark:from-rose-900/10 dark:to-pink-900/10 rounded-xl border border-rose-200/50 dark:border-rose-800/30">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="px-2 py-0.5 bg-rose-100 dark:bg-rose-900/30 text-rose-600 dark:text-rose-400 text-xs font-semibold rounded">
                        {vol.period}
                      </span>
                    </div>
                    <h4 className="font-semibold text-slate-900 dark:text-white mb-1">{vol.organization}</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400">{vol.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Languages Section */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900/30">
        <div className="max-w-6xl mx-auto px-4 md:px-10">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-500">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>
            </div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">{page.languages.title}</h2>
          </div>
          <div className="flex flex-wrap gap-4">
            {page.languages.list.map((lang, index) => (
              <div key={index} className="flex items-center gap-3 px-6 py-4 bg-white dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700/50">
                <span className="text-2xl">{lang.flag}</span>
                <div>
                  <p className="font-semibold text-slate-900 dark:text-white">{lang.name}</p>
                  <p className="text-sm text-slate-500 dark:text-slate-400">{lang.level}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-primary/10 via-transparent to-amber-500/10 dark:from-primary/20 dark:to-amber-500/20">
        <div className="max-w-4xl mx-auto px-4 md:px-10 text-center">
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
            {page.cta.button}
          </a>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;

