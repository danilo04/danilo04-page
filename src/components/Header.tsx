import React from 'react';
import { useTranslations } from '../hooks/useTranslations';

interface HeaderProps {
    theme: 'light' | 'dark';
    onToggleTheme: () => void;
  }
  
  const Header: React.FC<HeaderProps> = ({ theme, onToggleTheme }) => {
    const t = useTranslations();
    return (
      <header className="sticky top-0 z-40 w-full border-b border-slate-200 dark:border-border-dark bg-white/80 dark:bg-background-dark/80 backdrop-blur-md transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 md:px-10 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="size-8 text-primary flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/></svg>
            </div>
            <h1 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">Danilo Dominguez</h1>
          </div>
          
          <nav className="hidden md:flex flex-1 justify-end items-center gap-6">
            <div className="flex items-center gap-8">
              <a href="#" className="text-sm font-medium text-slate-500 dark:text-slate-400 hover:text-primary transition-colors">{t.nav.home}</a>
              <a href="#about" className="text-sm font-medium text-slate-500 dark:text-slate-400 hover:text-primary transition-colors">{t.nav.about}</a>
              <a href="#blog" className="text-sm font-medium text-slate-500 dark:text-slate-400 hover:text-primary transition-colors">{t.nav.blog}</a>
              <a href="#" className="text-sm font-medium text-slate-500 dark:text-slate-400 hover:text-primary transition-colors">{t.nav.talks}</a>
            </div>
  
            <div className="h-6 w-px bg-slate-200 dark:bg-border-dark mx-2"></div>
  
            <button 
              onClick={onToggleTheme}
              className="p-2 text-slate-500 dark:text-slate-400 hover:text-primary transition-all hover:scale-110"
              title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            >
              {theme === 'dark' ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>
              )}
            </button>
  
            <button className="h-10 px-5 bg-primary text-background-dark text-sm font-bold rounded-lg hover:bg-blue-400 transition-colors shadow-sm">
              {t.home.cta.getInTouch}
            </button>
          </nav>
  
          {/* Mobile menu (icon only for visual) */}
          <div className="md:hidden flex items-center gap-4">
             <button onClick={onToggleTheme} className="p-2 text-slate-500 dark:text-slate-400">
               {theme === 'dark' ? <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg> : <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>}
             </button>
             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate-900 dark:text-white"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
          </div>
        </div>
      </header>
    );
  };
  
  export default Header;
  