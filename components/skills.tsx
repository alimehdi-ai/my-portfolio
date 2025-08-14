import React from 'react';
import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { staggerContainer, fadeInUp, scaleIn, staggerItem, viewportOnce } from '../lib/motion';

type Skill = {
  name: string;
  icon: ReactNode;     // React element for icon
  level: number;       // skill level in percentage
  color: string;       // Tailwind gradient color classes e.g. "from-blue-400 to-blue-600"
};

const SkillsSection: React.FC = () => {
  const skills: Skill[] = [
    {
      name: "React.js",
      icon: "⚛️",
      level: 95,
      color: "from-blue-400 to-blue-600"
    },
    {
      name: "Next.js",
      icon: "▲",
      level: 92,
      color: "from-gray-500 to-gray-700"
    },
    {
      name: "Node.js",
      icon: "🟢",
      level: 90,
      color: "from-green-400 to-green-600"
    },
    {
      name: "Firebase",
      icon: "🔥",
      level: 88,
      color: "from-orange-400 to-orange-600"
    },
    {
      name: "Tailwind CSS",
      icon: "🎨",
      level: 95,
      color: "from-cyan-400 to-cyan-600"
    },
    {
      name: "Python",
      icon: "🐍",
      level: 85,
      color: "from-yellow-400 to-yellow-600"
    },
    {
      name: "MongoDB",
      icon: "🍃",
      level: 82,
      color: "from-green-500 to-green-700"
    },
    {
      name: "Git/GitHub",
      icon: "📚",
      level: 92,
      color: "from-red-400 to-red-600"
    }
  ];

  return (
    <section id="skills" className="py-20 px-6 relative" data-animate>
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 via-blue-50/30 to-pink-50/50 dark:from-purple-900/10 dark:via-blue-900/10 dark:to-pink-900/10" />
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          <motion.h2 
            variants={fadeInUp}
            className="text-5xl font-bold text-center mb-20 bg-gradient-to-r from-purple-600 via-blue-600 to-green-600 bg-clip-text text-transparent"
          >
            Skills & Technologies
          </motion.h2>
          <motion.div 
            variants={staggerContainer}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                variants={staggerItem}
                whileHover={{ 
                  y: -16,
                  scale: 1.05,
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
                whileTap={{ scale: 0.95 }}
                className="group relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-white/20 dark:border-gray-700/30"
              >
                {/* Glow effect */}
                <motion.div 
                  className={`absolute -inset-2 bg-gradient-to-r ${skill.color} opacity-0 group-hover:opacity-30 blur-xl transition-all duration-500 rounded-3xl`}
                  whileHover={{ opacity: 0.3 }}
                />
                
                <div className="relative z-10">
                  <motion.div 
                    className="text-5xl mb-6 filter drop-shadow-lg"
                    whileHover={{ 
                      scale: 1.25,
                      rotate: 12,
                      transition: { duration: 0.3, ease: "easeOut" }
                    }}
                  >
                    {skill.icon}
                  </motion.div>
                  <h3 className="font-bold text-lg mb-4 text-gray-800 dark:text-white">{skill.name}</h3>
                  
                  {/* Animated progress bar */}
                  <div className="w-full bg-gray-200/50 dark:bg-gray-700/50 rounded-full h-3 mb-2 overflow-hidden">
                    <motion.div
                      className={`bg-gradient-to-r ${skill.color} h-3 rounded-full relative overflow-hidden`}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={viewportOnce}
                      transition={{ 
                        duration: 1.5, 
                        ease: "easeOut",
                        delay: index * 0.1 
                      }}
                    >
                      <motion.div 
                        className="absolute inset-0 bg-white/30"
                        animate={{
                          x: ["-100%", "100%"],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "linear"
                        }}
                      />
                    </motion.div>
                  </div>
                  <motion.div 
                    className="text-sm font-semibold text-gray-600 dark:text-gray-400"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={viewportOnce}
                    transition={{ delay: 0.5 + index * 0.1 }}
                  >
                    {skill.level}%
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
