import React, { useState, useEffect } from "react";
import { Mail, Github, Linkedin } from "lucide-react";
import Stats from "./stats";

const ContactSection: React.FC = () => {
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

    const element = document.getElementById('contact');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const contactMethods = [
    { Icon: Mail, text: "mmalimehdi111@gmail.com", color: "from-red-500 to-pink-500", link: "mailto:mmalimehdi111@gmail.com" },
    { Icon: Github, text: "github.com/alimehdi-ai", color: "from-gray-700 to-gray-900", link: "https://github.com/alimehdi-ai" },
    { Icon: Linkedin, text: "linkedin.com/in/mm-ali-mehdi", color: "from-blue-600 to-blue-800", link: "https://www.linkedin.com/in/mm-ali-mehdi/" }
  ];


  return (
    <section id="contact" className="py-20 px-6 relative" data-animate>
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-50/50 via-purple-50/30 to-pink-50/50 dark:from-blue-900/10 dark:via-purple-900/10 dark:to-pink-900/10" />
      <div className="max-w-5xl mx-auto relative z-10">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Title */}
          <h2 className="text-5xl font-bold text-center mb-20 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Let's Work Together
          </h2>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Left - Info */}
            <div className="space-y-10">
              <div>
                <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-blue-600 dark:from-white dark:to-blue-400 bg-clip-text text-transparent">
                  Get In Touch
                </h3>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                  I'm always interested in new opportunities and exciting projects. Let's discuss how we can bring your
                  ideas to life and create something amazing together. Feel free to reach out via email, phone, or LinkedIn.
                </p>
              </div>

              {/* Contact methods */}
              <div className="space-y-6">
                {contactMethods.map(({ Icon, text, color, link }, idx) => (
                  <a
                    key={idx}
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center space-x-4 p-4 rounded-2xl hover:bg-white/50 dark:hover:bg-gray-800/50 transition-all duration-300 hover:scale-105"
                  >
                    <div
                      className={`p-3 bg-gradient-to-r ${color} rounded-2xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}
                    >
                      <Icon className="text-white" size={20} />
                    </div>
                    <span className="text-gray-700 dark:text-gray-300 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-300">
                      {text}
                    </span>
                  </a>
                ))}
              </div>

              {/* Fun stats */}
              <Stats/>
            </div>

            {/* Right - Form */}
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 to-purple-500 opacity-20 blur-2xl rounded-3xl" />
              <div className="relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl p-8 rounded-3xl border border-white/20 dark:border-gray-700/30 shadow-2xl">
                <div className="space-y-6">
                  <div className="group">
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full p-4 rounded-2xl border-2 border-gray-200 dark:border-gray-600 bg-white/50 dark:bg-gray-700/50 backdrop-blur-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 group-hover:border-blue-300"
                    />
                  </div>
                  <div className="group">
                    <input
                      type="email"
                      placeholder="Your Email"
                      className="w-full p-4 rounded-2xl border-2 border-gray-200 dark:border-gray-600 bg-white/50 dark:bg-gray-700/50 backdrop-blur-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 group-hover:border-blue-300"
                    />
                  </div>
                  <div className="group">
                    <textarea
                      rows={6}
                      placeholder="Your Message"
                      className="w-full p-4 rounded-2xl border-2 border-gray-200 dark:border-gray-600 bg-white/50 dark:bg-gray-700/50 backdrop-blur-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 group-hover:border-blue-300 resize-none"
                    ></textarea>
                  </div>
                  <button
                    onClick={() => alert("Thank you for your message! I'll get back to you soon.")}
                    className="group relative w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-2xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25 overflow-hidden"
                  >
                    <span className="relative z-10">Send Message</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
