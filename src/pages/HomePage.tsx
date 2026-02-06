import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Blog from '../components/Blog';
import { useHead } from '../hooks/useHead';
import { useLanguage } from '../components/language-provider';
import { JsonLd, getWebSiteSchema, getPersonSchema } from '../components/JsonLd';

const HomePage: React.FC = () => {
  const { language } = useLanguage();

  useHead({
    title: 'Danilo Dominguez | Mobile & Backend Engineer, Researcher',
    description: language === 'es'
      ? 'Ingeniero Móvil e Investigador PhD especializado en privacidad, sistemas robustos y confiables. Más de 18 años de experiencia en desarrollo de software.'
      : 'Mobile Engineer & PhD Researcher specializing in privacy, robust and reliable systems. 18+ years of software development experience.',
    canonicalPath: '/',
    lang: language,
  });

  return (
    <>
      <JsonLd data={getWebSiteSchema()} />
      <JsonLd data={getPersonSchema()} />
      <Hero />
      <About />
      <Blog />
    </>
  );
};

export default HomePage;

