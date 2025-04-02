
import { useEffect, useRef } from 'react';
import '../styles/Skills.css';
import skillsData, { skillsImages } from '../data/skills';
import SkillCategory from './SkillCategory';

const Skills = () => {
  const categories = Object.keys(skillsData);
  const carouselRef = useRef(null);
  const scrollAmountRef = useRef(0);
  const isScrollingRef = useRef(false);

  const smoothScroll = () => {
    if (!carouselRef.current) return;

    carouselRef.current.scrollLeft += scrollAmountRef.current;
    scrollAmountRef.current *= 0.9; // Reducción progresiva para suavizar

    if (Math.abs(scrollAmountRef.current) > 0.5) {
      requestAnimationFrame(smoothScroll);
    } else {
      isScrollingRef.current = false;
    }
  };

  const handleWheelScroll = (e) => {
    if (carouselRef.current) {
      const carousel = carouselRef.current;
      const atStart = carousel.scrollLeft === 0;
      const atEnd = Math.round(carousel.scrollLeft + carousel.clientWidth) >= carousel.scrollWidth;

      if ((atStart && e.deltaY < 0) || (atEnd && e.deltaY > 0)) {
        return;
      }

      e.preventDefault();
      const isTrackpad = e.deltaMode === 0;
      const scrollSpeed = isTrackpad ? 40 : 3.5;

      scrollAmountRef.current += e.deltaY * scrollSpeed;

      if (!isScrollingRef.current) {
        isScrollingRef.current = true;
        requestAnimationFrame(smoothScroll);
      }
    }
  };

  useEffect(() => {
    const carouselElement = carouselRef.current;

    if (carouselElement) {
      carouselElement.addEventListener('wheel', handleWheelScroll, { passive: false });
    }

    return () => {
      if (carouselElement) {
        carouselElement.removeEventListener('wheel', handleWheelScroll, { passive: false });
      }
    };
  }, []);

  return (
    <section id="skills" className="skills">
      <div className="section-header">
        <h2>Mis Habilidades</h2>
        <p>Tecnologías y herramientas que domino</p>
      </div>

      <div 
        className="skills-carousel" ref={carouselRef}>
        {categories.map((category, index) => (
          <SkillCategory 
            key={index} 
            category={category} 
            skills={skillsData[category]}
            images={skillsImages[category]}
          />
        ))}
      </div>
    </section>
  );
};

export default Skills;
