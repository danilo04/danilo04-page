import React, { useState, useEffect } from 'react';
import Header from './components/Header'
import Footer from './components/Footer'
import Hero from './components/Hero'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import cloudflareLogo from './assets/Cloudflare_Logo.svg'
// import { ThemeToggle } from './components/theme-toggle'

const App: React.FC = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') as 'light' | 'dark' || 'dark';
    }
    return 'dark';
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-background-dark text-slate-900 dark:text-white transition-colors duration-300 selection:bg-primary/30 selection:text-primary">
      <Header theme={theme} onToggleTheme={toggleTheme} />
      <main>
        <Hero />
        {/* <About />
        <Blog /> */}
      </main>
      <Footer />
    </div>
  );
};

export default App;
