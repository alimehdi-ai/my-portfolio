"use client";
import React, { useState, useEffect } from 'react';
import Footer from '@/components/footer';
import ContactSection from '@/components/contact';
import ExperienceSection from '@/components/experience';
import ProjectsSection from '@/components/project';
import SkillsSection from '@/components/skills';
import AboutSection from '@/components/about';
import HeroSection from '@/components/hero';

interface Particle {
  id: number;
  left: string;
  top: string;
  animationDelay: string;
  animationDuration: string;
}

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isVisible, setIsVisible] = useState({});
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    // Generate particles only on client side to prevent hydration mismatch
    const generateParticles = () => {
      const particleData = Array.from({ length: 20 }, (_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 5}s`,
        animationDuration: `${3 + Math.random() * 4}s`
      }));
      setParticles(particleData);
    };

    generateParticles();

    const handleScroll = () => {
      const sections = ['hero', 'about', 'skills', 'projects', 'experience', 'contact'];
      const scrollPosition = window.scrollY + 100;

      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
          }
        }
      });
    };

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        setIsVisible(prev => ({
          ...prev,
          [entry.target.id]: entry.isIntersecting
        }));
      });
    }, observerOptions);

    document.querySelectorAll('[data-animate]').forEach(el => observer.observe(el));
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="bg-gray-900 text-white min-h-screen overflow-x-hidden">
      
      <div className="fixed inset-0 pointer-events-none z-0">
        {particles.map(particle => (
          <div
            key={particle.id}
            className="absolute w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full opacity-20 animate-float"
            style={{
              left: particle.left,
              top: particle.top,
              animationDelay: particle.animationDelay,
              animationDuration: particle.animationDuration
            }}
          />
        ))}
      </div>

      <div
        className="fixed w-96 h-96 pointer-events-none z-10 opacity-20 transition-opacity duration-300"
        style={{
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, rgba(147, 51, 234, 0.2) 50%, transparent 100%)',
          filter: 'blur(40px)'
        }}
      />

      
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />
      <ContactSection />
      <Footer/>
    </div>
  );
};

export default Portfolio;