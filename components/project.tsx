import React, { useState, useEffect } from "react";
import { Github, ExternalLink } from "lucide-react";

interface Project {
  title: string;
  description: string;
  gradient: string;
  image: React.ReactNode;
  github: string;
  live: string;
  tech: string[];
}

const ProjectsSection: React.FC = () => {
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

    const element = document.getElementById('projects');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack marketplace with React, Node.js, and Stripe integration',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      github: '#',
      live: '#',
      image: '🛒',
      gradient: 'from-purple-600 via-pink-600 to-blue-600'
    },
    {
      title: 'Task Management App',
      description: 'Real-time collaboration tool with WebSocket integration',
      tech: ['Next.js', 'Socket.io', 'PostgreSQL'],
      github: '#',
      live: '#',
      image: '📋',
      gradient: 'from-green-400 via-blue-500 to-purple-600'
    },
    {
      title: 'AI Chat Assistant',
      description: 'OpenAI-powered chatbot with conversation memory',
      tech: ['Python', 'FastAPI', 'OpenAI', 'Redis'],
      github: '#',
      live: '#',
      image: '🤖',
      gradient: 'from-yellow-400 via-red-500 to-pink-500'
    },
    {
      title: 'Social Media Dashboard',
      description: 'Analytics platform for multiple social media accounts',
      tech: ['Vue.js', 'Express', 'Chart.js'],
      github: '#',
      live: '#',
      image: '📊',
      gradient: 'from-indigo-400 via-purple-500 to-pink-500'
    }
  ];

  return (
    <section id="projects" className="py-20 px-6 relative" data-animate>
      <div className="absolute inset-0 bg-gradient-to-r from-blue-50/30 via-purple-50/30 to-pink-50/30 dark:from-blue-900/10 dark:via-purple-900/10 dark:to-pink-900/10" />
      <div className="max-w-7xl mx-auto relative z-10">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-5xl font-bold text-center mb-20 bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
            Featured Projects
          </h2>

          <div className="grid md:grid-cols-2 gap-10">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className="group relative"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Card */}
                <div className="relative bg-white dark:bg-gray-800 rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-white/20 dark:border-gray-700/30">
                  {/* Image/gradient */}
                  <div className="relative overflow-hidden h-64">
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-80`}
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300" />

                    {/* Icon */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-8xl group-hover:scale-125 group-hover:rotate-6 transition-all duration-500 filter drop-shadow-2xl">
                        {project.image}
                      </div>
                    </div>

                    {/* Links */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center space-x-6">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-4 bg-white/20 backdrop-blur-sm rounded-2xl hover:bg-white/30 hover:scale-110 transition-all duration-300 group"
                      >
                        <Github size={24} className="text-white group-hover:text-blue-300" />
                      </a>
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-4 bg-white/20 backdrop-blur-sm rounded-2xl hover:bg-white/30 hover:scale-110 transition-all duration-300 group"
                      >
                        <ExternalLink size={24} className="text-white group-hover:text-green-300" />
                      </a>
                    </div>

                    {/* Decorative particles */}
                    <div className="absolute top-4 left-4 w-2 h-2 bg-white/60 rounded-full animate-ping" />
                    <div
                      className="absolute top-8 right-8 w-1 h-1 bg-white/40 rounded-full animate-pulse"
                      style={{ animationDelay: "1s" }}
                    />
                    <div
                      className="absolute bottom-6 left-8 w-1.5 h-1.5 bg-white/50 rounded-full animate-bounce"
                      style={{ animationDelay: "2s" }}
                    />
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <h3 className="text-2xl font-bold mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-300">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-3">
                      {project.tech.map((tech, techIndex) => (
                        <span
                          key={tech}
                          className="px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 hover:from-blue-500/20 hover:to-purple-500/20 text-blue-700 dark:text-blue-300 rounded-xl text-sm font-medium transition-all duration-300 hover:scale-105"
                          style={{ animationDelay: `${techIndex * 50}ms` }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
