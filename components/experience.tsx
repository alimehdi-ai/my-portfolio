import React, { useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";

type ExperienceItem = {
  company: string;
  position: string;
  period: string;
  description: string;
  color: string; // Tailwind gradient classes like 'from-blue-500 to-purple-500'
};

const ExperienceSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('experience');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const experience: ExperienceItem[] = [
    {
      company: "AbbasAI Solutions",
      position: "Software Engineer",
      period: "Dec 2024 - Present",
      description: "Built 3+ full-stack apps with React, Next.js, and 15+ reusable Redux components. Integrated Firebase Auth/Firestore and scalable REST APIs for 10,000+ users. Automated deployments with GitHub Actions & Vercel, reducing delivery time by 25%. Improved responsive UI/UX using Tailwind CSS, Material UI, and CMS integration.",
      color: "from-blue-500 to-purple-500"
    },
    {
      company: "T5 Consulting",
      position: "Python Engineer",
      period: "Aug 2023 - Sep 2024",
      description: "Automated 20+ backend data pipelines with Python, Pandas, and NumPy. Increased efficiency by 30% using FastAPI, multithreading, and REST API optimization. Integrated third-party APIs and deployed robust error-handling utilities. Collaborated in Agile teams of 6+ developers using Trello, GitHub, and CI/CD workflows.",
      color: "from-purple-500 to-pink-500"
    },
    {
      company: "Graffitecs",
      position: "React Developer",
      period: "Jul 2020 - Jul 2023",
      description: "Built 10+ responsive UIs using React, Next.js, and Tailwind CSS. Optimized async data handling with React Query, improving performance by 40%. Developed modular components with form validation using Yup and React Hook Form. Delivered scalable features within global Agile teams using GitHub and Trello.",
      color: "from-pink-500 to-red-500"
    }
  ];

  return (
    <section id="experience" className="py-20 px-6 relative" data-animate ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-bl from-indigo-50/50 via-purple-50/30 to-pink-50/50 dark:from-indigo-900/10 dark:via-purple-900/10 dark:to-pink-900/10" />
      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className={`transition-all duration-1000 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <motion.h2 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl font-bold text-center mb-20 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent"
          >
            Experience
          </motion.h2>
          <div className="relative">
            {/* Timeline line */}
            <motion.div 
              initial={{ scaleY: 0 }}
              animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 rounded-full origin-top"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-blue-400 to-purple-400 rounded-full animate-pulse opacity-60" />
            </motion.div>

            {experience.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                transition={{ 
                  duration: 0.6, 
                  delay: 0.6 + (index * 0.2),
                  ease: "easeOut"
                }}
                className="relative flex items-start mb-16 group"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Timeline dot */}
                <motion.div 
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.95 }}
                  className="absolute left-6 w-6 h-6 rounded-full border-4 border-white dark:border-gray-900 z-10 transition-all duration-500 group-hover:scale-125"
                >
                  <div
                    className={`w-full h-full rounded-full bg-gradient-to-r ${exp.color} animate-pulse`}
                  />
                  <div
                    className={`absolute -inset-2 bg-gradient-to-r ${exp.color} opacity-50 blur-md group-hover:opacity-80 transition-all duration-500`}
                  />
                </motion.div>

                {/* Card */}
                <motion.div 
                  whileHover={{ y: -8 }}
                  className="ml-20 group-hover:-translate-y-2 transition-all duration-500"
                >
                  <motion.div 
                    whileHover={{ 
                      scale: 1.02,
                      boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
                    }}
                    className="relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl p-8 rounded-3xl shadow-lg hover:shadow-2xl border border-white/20 dark:border-gray-700/30 overflow-hidden"
                  >
                    <div
                      className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl ${exp.color} opacity-5 rounded-full blur-2xl`}
                    />
                    <div className="relative z-10">
                      <motion.h3 
                        whileHover={{ scale: 1.05 }}
                        className="text-2xl font-bold mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-300"
                      >
                        {exp.position}
                      </motion.h3>
                      <h4
                        className={`text-lg font-semibold mb-3 text-transparent bg-gradient-to-r ${exp.color} bg-clip-text`}
                      >
                        {exp.company}
                      </h4>
                      <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-4 flex items-center">
                        <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse" />
                        {exp.period}
                      </p>
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                        {exp.description}
                      </p>
                    </div>
                  </motion.div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
