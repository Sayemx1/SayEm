
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Snowfall from './components/Snowfall';

const App: React.FC = () => {
  return (
    <div className="bg-slate-950 min-h-screen">
      <Snowfall />
      <Header />
      <Hero />
      <main className="container mx-auto px-6 md:px-12">
        <About />
        <Education />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;