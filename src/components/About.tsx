
import React from 'react';
import { useTranslations } from '../hooks/useTranslations';

const About: React.FC = () => {
  const t = useTranslations();
  const features = t.about.section.features;

  return (
    <section id="about" className="w-full py-24 bg-white dark:bg-white/[0.02] border-y border-slate-200 dark:border-border-dark transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 md:px-10 lg:px-20 flex flex-col gap-16">
        <div className="max-w-3xl flex flex-col gap-6">
          <div className="flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-sm">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
            {t.about.title}
          </div>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight text-slate-900 dark:text-white">
            {t.about.section.heading}
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 font-normal leading-relaxed">
            {t.about.section.summary}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div key={feature.id} className="group relative p-8 rounded-2xl bg-white dark:bg-surface-dark border border-slate-200 dark:border-border-dark transition-all hover:-translate-y-2 hover:border-primary/50 overflow-hidden shadow-sm hover:shadow-xl">
              {/* Abstract hover background effect */}
              <div className="absolute top-0 right-0 size-24 bg-primary/5 rounded-full blur-3xl -mr-10 -mt-10 transition-colors group-hover:bg-primary/20"></div>
              
              <div className="size-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6 ring-1 ring-primary/20 transition-transform group-hover:scale-110">
                {feature.id === 'native' && <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v2"/><path d="m16.2 3.8 1.4-1.4"/><path d="m3.4 15.8-1.4 1.4"/><path d="M22 13.8V19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v3.8"/><path d="M10 12v.01"/><path d="M14 12v.01"/><path d="m17.4 6.8 1.4-1.4"/><path d="M2 12h20"/></svg>}
                {feature.id === 'security' && <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>}
                {feature.id === 'research' && <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5"/></svg>}
              </div>

              <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white group-hover:text-primary transition-colors">{feature.title}</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
