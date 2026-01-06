import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslations } from '../hooks/useTranslations';
import { LanguageToggle } from './language-toggle';


interface HeaderProps {
    theme: 'light' | 'dark';
    onToggleTheme: () => void;
  }
  
  const Header: React.FC<HeaderProps> = ({ theme, onToggleTheme }) => {
    const t = useTranslations();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();
    const isHomePage = location.pathname === '/';

    // Close menu when pressing Escape
    useEffect(() => {
      const handleEscape = (e: KeyboardEvent) => {
        if (e.key === 'Escape') setIsMenuOpen(false);
      };
      document.addEventListener('keydown', handleEscape);
      return () => document.removeEventListener('keydown', handleEscape);
    }, []);

    // Prevent body scroll when menu is open
    useEffect(() => {
      if (isMenuOpen) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = '';
      }
      return () => {
        document.body.style.overflow = '';
      };
    }, [isMenuOpen]);

    const closeMenu = () => setIsMenuOpen(false);

    return (
      <header className="sticky top-0 z-40 w-full border-b border-slate-200 dark:border-border-dark bg-white/80 dark:bg-background-dark/80 backdrop-blur-md transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 md:px-10 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="size-8 text-primary flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/></svg>
            </div>
            <h1 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">Danilo Dominguez</h1>
          </div>
          
          <nav className="hidden md:flex flex-1 justify-end items-center gap-4">
            <div className="flex items-center gap-5">
              <Link to="/" className="text-sm font-medium text-slate-500 dark:text-slate-400 hover:text-primary transition-colors whitespace-nowrap">{t.nav.home}</Link>
              <Link to="/about" className="text-sm font-medium text-slate-500 dark:text-slate-400 hover:text-primary transition-colors whitespace-nowrap">{t.nav.aboutMe}</Link>
              <Link to="/research" className="text-sm font-medium text-slate-500 dark:text-slate-400 hover:text-primary transition-colors whitespace-nowrap">{t.nav.research}</Link>
              {isHomePage && (
                <a href="#blog" className="text-sm font-medium text-slate-500 dark:text-slate-400 hover:text-primary transition-colors whitespace-nowrap">{t.nav.blog}</a>
              )}
              <a href="#" className="text-sm font-medium text-slate-500 dark:text-slate-400 hover:text-primary transition-colors whitespace-nowrap">{t.nav.talks}</a>
            </div>

            <div className="h-6 w-px bg-slate-200 dark:bg-border-dark mx-1"></div>

            <div className="flex items-center gap-2">
            {/* Language Toggle */}
            <LanguageToggle />

            {/* Theme Toggle */}
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
          </div>

            <a 
              href="mailto:danilo.dominguez.0416@gmail.com"
              className="h-10 px-5 bg-primary text-background-dark text-sm font-bold rounded-lg hover:bg-blue-400 transition-colors shadow-sm flex items-center justify-center"
            >
              {t.home.cta.getInTouch}
            </a>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-3">
             <button onClick={onToggleTheme} className="p-2 text-slate-500 dark:text-slate-400">
               {theme === 'dark' ? <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg> : <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>}
             </button>
             
             {/* Hamburger / Close button */}
             <button 
               onClick={() => setIsMenuOpen(!isMenuOpen)}
               className="p-2 text-slate-900 dark:text-white relative w-10 h-10 flex items-center justify-center"
               aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
               aria-expanded={isMenuOpen}
             >
               <span className="sr-only">{isMenuOpen ? 'Close menu' : 'Open menu'}</span>
               {/* Animated hamburger icon */}
               <div className="w-6 h-5 relative flex flex-col justify-between">
                 <span 
                   className={`block h-0.5 w-6 bg-current transform transition-all duration-300 ease-out origin-center ${
                     isMenuOpen ? 'rotate-45 translate-y-[9px]' : ''
                   }`}
                 />
                 <span 
                   className={`block h-0.5 w-6 bg-current transition-all duration-200 ${
                     isMenuOpen ? 'opacity-0 scale-x-0' : ''
                   }`}
                 />
                 <span 
                   className={`block h-0.5 w-6 bg-current transform transition-all duration-300 ease-out origin-center ${
                     isMenuOpen ? '-rotate-45 -translate-y-[9px]' : ''
                   }`}
                 />
               </div>
             </button>
          </div>
        </div>

        {/* Mobile menu overlay */}
        <div 
          className={`md:hidden fixed inset-0 top-[65px] bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${
            isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
          onClick={closeMenu}
          aria-hidden="true"
        />

        {/* Mobile menu panel */}
        <nav 
          className={`md:hidden fixed top-[65px] right-0 h-[calc(100vh-65px)] w-full max-w-sm bg-white dark:bg-background-dark border-l border-slate-200 dark:border-border-dark shadow-2xl transform transition-transform duration-300 ease-out ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex flex-col h-full px-6 py-8">
            {/* Navigation links */}
            <div className="flex flex-col gap-2">
              <Link 
                to="/" 
                onClick={closeMenu}
                className="text-lg font-medium text-slate-700 dark:text-slate-200 hover:text-primary dark:hover:text-primary px-4 py-3 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800/50 transition-all"
              >
                {t.nav.home}
              </Link>
              <Link 
                to="/about" 
                onClick={closeMenu}
                className="text-lg font-medium text-slate-700 dark:text-slate-200 hover:text-primary dark:hover:text-primary px-4 py-3 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800/50 transition-all"
              >
                {t.nav.aboutMe}
              </Link>
              <Link 
                to="/research" 
                onClick={closeMenu}
                className="text-lg font-medium text-slate-700 dark:text-slate-200 hover:text-primary dark:hover:text-primary px-4 py-3 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800/50 transition-all"
              >
                {t.nav.research}
              </Link>
              {isHomePage && (
                <a 
                  href="#blog" 
                  onClick={closeMenu}
                  className="text-lg font-medium text-slate-700 dark:text-slate-200 hover:text-primary dark:hover:text-primary px-4 py-3 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800/50 transition-all"
                >
                  {t.nav.blog}
                </a>
              )}
              <a 
                href="#" 
                onClick={closeMenu}
                className="text-lg font-medium text-slate-700 dark:text-slate-200 hover:text-primary dark:hover:text-primary px-4 py-3 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800/50 transition-all"
              >
                {t.nav.talks}
              </a>
            </div>

            {/* Divider */}
            <div className="h-px bg-slate-200 dark:bg-border-dark my-6" />

            {/* Language toggle */}
            <div className="flex items-center justify-between px-4 py-2">
              <span className="text-sm text-slate-500 dark:text-slate-400">Language</span>
              <LanguageToggle />
            </div>

            {/* Spacer */}
            <div className="flex-1" />

            {/* CTA Button */}
            <a 
              href="mailto:danilo.dominguez.0416@gmail.com"
              onClick={closeMenu}
              className="w-full h-12 bg-primary text-background-dark text-sm font-bold rounded-lg hover:bg-blue-400 transition-colors shadow-sm flex items-center justify-center"
            >
              {t.home.cta.getInTouch}
            </a>
          </div>
        </nav>
      </header>
    );
  };
  
  export default Header;
  