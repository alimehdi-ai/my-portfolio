"use client";
import React, { useRef, useEffect, useState } from 'react';
import { Star, Zap, Heart, Globe, ChevronDown } from 'react-feather'; // or your icon lib
import { motion } from 'framer-motion';
import { staggerContainer, fadeInUp, scaleIn} from '@/lib/motion';

const HeroSection: React.FC = () => {
  const heroRef = useRef<HTMLElement>(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.section
      ref={heroRef}
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      variants={staggerContainer}
      initial="hidden"
      animate="show"
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900/20 to-purple-900/20"
          style={{
            transform: `translateY(${scrollY * 0.5}px)`,
          }}
        />
        <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-blue-400/30 to-purple-500/30 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-pink-400/20 to-yellow-500/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: '1s' }}
        />
      </div>

      <div className="relative z-10 text-center px-6 sm:mt-0 mt-16 max-w-5xl mx-auto">
        <motion.div variants={staggerContainer}>
          {/* Floating icons around name */}
          <div className="relative inline-block mb-8">
            <motion.h1
              variants={fadeInUp}
              className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 via-pink-600 to-orange-500 bg-clip-text text-transparent animate-gradient-x"
            >
              Ali Mehdi
            </motion.h1>
            <Star className="absolute -top-4 -left-8 text-yellow-400 animate-spin-slow" size={24} />
            <Zap className="absolute -top-2 -right-12 text-blue-500 animate-bounce" size={20} />
            <Heart className="absolute -bottom-2 -left-4 text-pink-500 animate-pulse" size={18} />
          </div>

          <motion.div variants={staggerContainer} className="relative mb-6">
            <motion.p variants={fadeInUp} className="text-2xl md:text-3xl font-semibold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
              AI Software Developer
            </motion.p>
            <motion.div variants={fadeInUp} className="flex items-center justify-center space-x-4 text-sm font-medium">
              <span className="flex items-center space-x-1 px-3 py-1 bg-gradient-to-r from-green-400/20 to-blue-500/20 rounded-full">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-ping" />
                <span>Available for work</span>
              </span>
              <span className="flex items-center space-x-1 px-3 py-1 bg-gradient-to-r from-purple-400/20 to-pink-500/20 rounded-full">
                <Globe size={12} />
                <span>Remote Friendly</span>
              </span>
            </motion.div>
          </motion.div>

          <motion.p variants={fadeInUp} className="text-lg md:text-xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
            Full Stack Developer/Next.js with 4+ years experience in React.js, Next.js, Node.js, Firebase, and Tailwind CSS. Skilled in building high-performance UIs, REST/GraphQL APIs, and scalable hybrid apps. BS in AI with focus on cloud integration, backend architecture, automation, and Python scripting.
          </motion.p>

          <motion.div variants={staggerContainer} className="space-x-6 flex justify-center flex-wrap gap-4">
            <motion.button
              variants={scaleIn}
              onClick={() => scrollToSection('projects')}
              className="group relative bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25 overflow-hidden"
            >
              <span className="relative z-10">View My Work</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.button>
            <motion.button
              variants={scaleIn}
              onClick={() => scrollToSection('contact')}
              className="group relative border-2 border-transparent bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-border px-8 py-4 rounded-2xl font-semibold transition-all duration-300 hover:scale-105 overflow-hidden"
            >
              <span className="relative z-10 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent group-hover:text-white transition-all duration-300">
                Get In Touch
              </span>
              <div className="absolute inset-0.5 bg-gray-900 rounded-2xl group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-purple-500 transition-all duration-300" />
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-slow">
        <ChevronDown size={32} className="text-blue-500 animate-pulse" />
      </div>
    </motion.section>
  );
};

export default HeroSection;
