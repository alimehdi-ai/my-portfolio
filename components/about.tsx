import React, { useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

const AboutSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("about");
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  const stats = [
    { number: "4+", label: "Years Exp" },
    { number: "10+", label: "Projects" },
    { number: "3+", label: "Companies" },
  ];

  return (
    <section id="about" className="py-20 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/10 to-transparent" />
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
        >
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-5xl font-bold text-center mb-20 bg-gradient-to-r from-white via-blue-400 to-purple-400 bg-clip-text text-transparent"
          >
            About Me
          </motion.h2>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Avatar & Icons */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="relative group"
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 rounded-3xl opacity-30 group-hover:opacity-50 blur-xl transition-all duration-500" />
              <div className="relative bg-gray-800/80 backdrop-blur-xl p-10 rounded-3xl border border-gray-700/30 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="w-56 h-56 mx-auto mb-8 bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white text-8xl relative overflow-hidden"
                >
                  <span className="animate-float">👨‍💻</span>
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-purple-600/20 animate-pulse" />
                </motion.div>

                <div className="flex justify-center space-x-6">
                  {[
                    {
                      icon: FaGithub,
                      link: "https://github.com/alimehdi-ai",
                    },
                    {
                      icon: FaLinkedin,
                      link: "https://www.linkedin.com/in/mm-ali-mehdi/",
                    },
                    {
                      icon: FaEnvelope,
                      link: "mailto:mmalimehdi111@gmail.com",
                    },
                  ].map((item, idx) => {
                    const Icon = item.icon;
                    return (
                      <motion.a
                        key={idx}
                        whileHover={{ scale: 1.15, y: -3 }}
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-4 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl hover:from-blue-500/20 hover:to-purple-500/20 transition-all duration-300 group"
                      >
                        <Icon
                          size={24}
                          className="text-blue-400 group-hover:text-purple-400 transition-colors"
                        />
                      </motion.a>
                    );
                  })}
                </div>
              </div>
            </motion.div>

            {/* Text & Stats */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="space-y-8"
            >
              <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
                <p>
                  With over{" "}
                  <span className="font-bold text-transparent bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text">
                    4 years of experience
                  </span>{" "}
                  in{" "}
                  <span className="font-bold text-transparent bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text">
                    full-stack development
                  </span>
                  , I specialize in creating{" "}
                  <span className="font-bold text-transparent bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text">
                    robust & scalable
                  </span>{" "}
                  applications.
                </p>
                <p>
                  My passion lies in building{" "}
                  <span className="font-bold text-transparent bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text">
                    high-performance UIs
                  </span>{" "}
                  and{" "}
                  <span className="font-bold text-transparent bg-gradient-to-r from-green-500 to-blue-500 bg-clip-text">
                    REST/GraphQL APIs
                  </span>{" "}
                  that{" "}
                  <span className="font-bold text-transparent bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text">
                    drive business growth
                  </span>
                  .
                </p>
                <p>
                  I hold a{" "}
                  <span className="font-bold text-transparent bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text">
                    BS in Artificial Intelligence
                  </span>{" "}
                  from UMT focusing on{" "}
                  <span className="font-bold text-transparent bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text">
                    cloud integration, backend architecture, automation
                  </span>{" "}
                  &{" "}
                  <span className="font-bold text-transparent bg-gradient-to-r from-yellow-300 to-red-400 bg-clip-text">
                    Python scripting
                  </span>
                  .
                </p>
              </div>

              <motion.div
                className="grid grid-cols-3 gap-6"
                initial="hidden"
                animate={isVisible ? "visible" : "hidden"}
                variants={{
                  hidden: {},
                  visible: {
                    transition: { staggerChildren: 0.15 },
                  },
                }}
              >
                {stats.map((stat, idx) => (
                  <motion.div
                    key={idx}
                    className="text-center group"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                      {stat.number}
                    </div>
                    <div className="text-sm text-gray-400 mt-1">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
