import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Blog from '../components/Blog';

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <About />
      <Blog />
    </>
  );
};

export default HomePage;

