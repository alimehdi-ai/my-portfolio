import { Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="py-12 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900" />
      <div className="absolute inset-0 bg-black/50" />

      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <motion.div
          className="absolute top-10 left-10 w-20 h-20 bg-blue-500/20 rounded-full"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
        <motion.div
          className="absolute top-20 right-20 w-16 h-16 bg-purple-500/20 rounded-full"
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 2, repeat: Infinity, delay: 1 }}
        />
        <motion.div
          className="absolute bottom-10 left-1/3 w-12 h-12 bg-pink-500/20 rounded-full"
          animate={{ scale: [1, 1.3, 1], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 2, repeat: Infinity, delay: 2 }}
        />
      </div>

      <div className="max-w-6xl mx-auto text-center relative z-10">
        {/* Name & Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-6"
        >
          <h3 className="text-2xl font-bold bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent mb-2">
            Ali Mehdi
          </h3>
          <p className="text-gray-300">
            AI Software Developer | Full Stack Developer
          </p>
        </motion.div>

        {/* Social Links */}
        <motion.div
          className="flex justify-center space-x-6 mb-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.15 }
            }
          }}
        >
          {[
            {
              icon: Github,
              link: "https://github.com/alimehdi-ai"
            },
            {
              icon: Linkedin,
              link: "https://www.linkedin.com/in/mm-ali-mehdi/"
            },
            {
              icon: Mail,
              link: "mailto:mmalimehdi111@gmail.com"
            }
          ].map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.a
                key={idx}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.15, y: -3 }}
                transition={{ duration: 0.3 }}
                className="p-3 bg-white/10 backdrop-blur-sm rounded-2xl hover:bg-white/20 transition-all duration-300 group"
              >
                <Icon
                  size={20}
                  className="text-white group-hover:text-blue-300 transition-colors"
                />
              </motion.a>
            );
          })}
        </motion.div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="border-t border-white/20 pt-6"
        >
          <p className="text-gray-400">&copy; 2025 Ali Mehdi.</p>
        </motion.div>
      </div>
    </footer>
  );
}
