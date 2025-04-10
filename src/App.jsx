import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { useState } from "react";
import lenguage from './data/lenguage';

function App() {

  const [isEnglish, setIsEnglish] = useState(true);

  const toggleLanguage = () => {
    setIsEnglish(!isEnglish);
  };

  const currentLang = isEnglish ? lenguage.spanish : lenguage.english;

  return (
    <>
      <Navbar toggleLanguage={toggleLanguage} text={currentLang.navbar}/>
      <main>
        <Hero text={currentLang.hero}/>
        <About text={currentLang.about}/>
        <Skills text={currentLang.skills}/>
        <Experience text={currentLang.experience}/>
        <Projects text={currentLang.projects}/>
        <Contact text={currentLang.contact}/>
      </main>
      <Footer text={currentLang.footer}/>
    </>
  );
}

export default App;