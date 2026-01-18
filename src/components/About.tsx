import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react';
import resumePdf from '../assets/resume.pdf';

export default function About() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  // Smooth scroll to section
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center px-4 py-12 sm:py-16 md:py-20 overflow-hidden">
      {/* Gradient background effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none"></div>

      {/* Main content */}
      <motion.div
        className="relative z-10 max-w-5xl mx-auto text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Greeting */}
        <motion.p
          variants={itemVariants}
          className="text-lightprimary dark:text-darkaccent text-sm md:text-base mb-4 font-mono"
        >
          Hello, I'm
        </motion.p>

        {/* Name with gradient */}
        <motion.h1
          variants={itemVariants}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl mb-6 tracking-tight px-4"
        >
          <span 
            className="font-tr2n text-lightprimary dark:text-darkprimary tr2n-font"
          >
            Dhruv Sagre
          </span>
        </motion.h1>

        {/* Title/Description */}
        <motion.p
          variants={itemVariants}
          className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-lighttext dark:text-darktext mb-6 max-w-4xl mx-auto leading-relaxed px-4"
        >
          Software Engineer specializing in{' '}
          <span className="text-lightaccent dark:text-darkaccent font-semibold">Full Stack Development</span> &{' '}
          <span className="text-lightprimary dark:text-darkprimary font-semibold">Artificial Intelligence Tools</span>
        </motion.p>

        {/* Mission statement */}
        <motion.p
          variants={itemVariants}
          className="text-sm sm:text-base md:text-lg text-lighttext dark:text-darktext mb-12 max-w-3xl mx-auto leading-relaxed px-4"
        >
          Passionate about creating immersive gaming experiences and building
          intelligent systems that push the boundaries of what's possible. Let's build the
          future together.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 px-4"
        >
          <button
            onClick={() => scrollToSection('projects')}
            className="group relative w-full sm:w-auto px-6 sm:px-8 py-3 bg-lightaccent dark:bg-darkprimary text-white rounded-lg font-medium overflow-hidden transition-all duration-300 hover:bg-lightaccent dark:bg-darksecondary hover:scale-105 hover:shadow-lg hover:shadow-lightprimary dark:hover:shadow-darkprimary/50 text-sm sm:text-base"
          >
            <span className="relative z-10">View My Work</span>
            <div className="absolute inset-0 bg-gradient-to-r from-lightprimary dark:from-darkprimary to-lightaccent dark:to-darkaccent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>

          <a
            href={resumePdf}
            download
            className="group w-full sm:w-auto px-6 sm:px-8 py-3 border-2 border-lightprimary dark:border-darkaccent text-lightprimary dark:text-darkaccent rounded-lg font-medium transition-all duration-300 hover:bg-lightprimary dark:hover:bg-darksecondary hover:text-white hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/50 flex items-center justify-center gap-2 text-sm sm:text-base"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            Download Resume
          </a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          variants={itemVariants}
          className="flex gap-6 justify-center"
        >
          <a
            href="https://github.com/DSagre25"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lighttext dark:text-darktext hover:text-lightprimary dark:hover:text-darkprimary transition-colors duration-300 hover:scale-110 transform"
            aria-label="GitHub"
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/dhruv-sagre-54998122a/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lighttext dark:text-darktext hover:text-lightprimary dark:hover:text-darkprimary transition-colors duration-300 hover:scale-110 transform"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a
            href="mailto:dhruvsagre252@gmail.com"
            className="text-lighttext dark:text-darktext hover:text-lightprimary dark:hover:text-darkprimary transition-colors duration-300 hover:scale-110 transform"
            aria-label="Email"
          >
            <Mail className="w-6 h-6" />
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          delay: 1.5,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer"
        onClick={() => scrollToSection('about')}
      >
        <div className="flex flex-col items-center gap-2 text-lighttext/60 dark:text-darktext/60 hover:text-lightaccent dark:hover:text-darkaccent transition-colors duration-300">
          <span className="text-sm font-medium">Scroll Down</span>
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </div>
      </motion.div>
    </section>
  );
}