import React, { useState, useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';
import About from './About';
import Projects from './projects';
import Skills from './Skills';
import ClientWebsites from './clientWebsites';
import { motion, useInView } from 'framer-motion';
import Advertisements from './Advertisements';
import Contact from './contact';

// Typing animation hook
function useTypingEffect(text, speed = 100, pause = 1200) {
  const [displayed, setDisplayed] = useState('');
  const [index, setIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    let timeout;
    if (!deleting && index < text.length) {
      timeout = setTimeout(() => setIndex(index + 1), speed);
    } else if (!deleting && index === text.length) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && index > 0) {
      timeout = setTimeout(() => setIndex(index - 1), speed / 2);
    } else if (deleting && index === 0) {
      setDeleting(false);
    }
    setDisplayed(text.slice(0, index));
    return () => clearTimeout(timeout);
  }, [index, deleting, text, speed, pause]);

  return displayed;
}

const DominicPortfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  const projectsRef = useRef(null);
  const projectsInView = useInView(projectsRef, { once: true, margin: '-100px' });

  const websitesRef = useRef(null);
  const websitesInView = useInView(websitesRef, { once: true, margin: '-100px' });

  const skillsRef = useRef(null);
  const skillsInView = useInView(skillsRef, { once: true, margin: '-100px' });

  const advertisementsRef = useRef(null);
  const advertisementsInView = useInView(advertisementsRef, { once: true, margin: '-100px' });



  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'HOME', anchor: 'home' },
    { label: 'ABOUT', anchor: 'about' },
    { label: 'PROJECTS', anchor: 'projects' },
    { label: 'WEB SITES', anchor: 'websites' },
    { label: 'SKILLS', anchor: 'skills' },
    { label: 'ADVERTISEMENTS', anchor: 'advertisements' },
    { label: 'CONTACT', anchor: 'contact' }
  ];
  const typingText = useTypingEffect('Full Stack Developer', 90, 1200);

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Navigation */}
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrollY > 50 ? 'bg-gray-900/95 backdrop-blur-md py-4' : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="text-white text-4xl font-bold tracking-wide"
          >
            Tharindu Herath<span className="text-white">.</span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item.anchor}
                href={`#${item.anchor}`}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.07, duration: 0.5 }}
                className={`text-base font-mono tracking-wider transition-all duration-300 hover:text-white ${
                  index === 0 
                    ? 'text-white border-b-2 border-white pb-1' 
                    : 'text-gray-200 hover:scale-105'
                }`}
              >
                {item.label}
              </motion.a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-white hover:text-emerald-400 transition-colors"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden absolute top-full left-0 w-full bg-gray-900/98 backdrop-blur-md border-t border-gray-800"
          >
            <div className="px-6 py-6 space-y-4">
              {navItems.map((item, index) => (
                <a
                  key={item.anchor}
                  href={`#${item.anchor}`}
                  className={`block text-base font-mono tracking-wider transition-all duration-300 ${
                    index === 0 ? 'text-white' : 'text-gray-200 hover:text-white'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </motion.nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Super Background Image with Overlay */}
        <div 
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: `url('ggg.png')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            height: '100vh',
            minHeight: '100%',
            minWidth: '100%',
            zIndex: 0
          }}
        />
        
        {/* Content */}
        <div className="relative z-10 flex items-center justify-between px-6 max-w-7xl mx-auto w-full">
          {/* Left Side - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="flex-1 text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="inline-block bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm mb-4"
            >
              👋 Welcome to my portfolio
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.7 }}
              className="text-5xl md:text-7xl font-bold text-white mb-4 leading-tight"
            >
              Hi, I'm<br />
              <span className="text-white">Tharindu Herath</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.7 }}
              className="text-xl md:text-2xl text-gray-300 mb-6 font-light"
            >
              {typingText}<span className="animate-pulse">|</span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3, duration: 0.7 }}
              className="text-gray-400 text-lg mb-8 max-w-xl"
            >
              Passionate about building innovative mobile and web applications using React Native, MERN stack, and modern technologies.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 0.7 }}
              className="flex flex-wrap gap-4 mb-8"
            >
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-white text-gray-900 font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all"
              >
                View Projects
              </motion.a>
              <motion.a
                href="/cv.pdf"
                download
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-gray-900 transition-all"
              >
                Download CV
              </motion.a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.7, duration: 0.7 }}
              className="flex items-center gap-6"
            >
              <div className="flex items-center gap-2 text-white">
                <span className="text-2xl">📍</span>
                <span className="text-sm">Malambe, Sri Lanka</span>
              </div>
              <div className="flex items-center gap-2 text-white">
                <span className="text-2xl">🎓</span>
                <span className="text-sm">SLIIT Graduate 2025</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side - Floating Elements */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="hidden lg:flex flex-1 justify-center items-center relative"
          >
            <div className="relative w-80 h-80">
              {/* Animated circles */}
              <motion.div
                animate={{ 
                  rotate: 360,
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                  scale: { duration: 3, repeat: Infinity, ease: "easeInOut" }
                }}
                className="absolute inset-0 border-4 border-white/20 rounded-full"
              />
              <motion.div
                animate={{ 
                  rotate: -360,
                  scale: [1, 1.15, 1]
                }}
                transition={{ 
                  rotate: { duration: 25, repeat: Infinity, ease: "linear" },
                  scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
                }}
                className="absolute inset-8 border-4 border-white/10 rounded-full"
              />
              
              {/* Tech icons floating */}
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-10 left-10 bg-white/20 backdrop-blur-md p-4 rounded-lg shadow-lg"
              >
                <span className="text-3xl">⚛️</span>
              </motion.div>
              
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute top-16 right-8 bg-white/20 backdrop-blur-md p-4 rounded-lg shadow-lg"
              >
                <span className="text-3xl">📱</span>
              </motion.div>
              
              <motion.div
                animate={{ y: [0, -25, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-16 left-4 bg-white/20 backdrop-blur-md p-4 rounded-lg shadow-lg"
              >
                <span className="text-3xl">💻</span>
              </motion.div>
              
              <motion.div
                animate={{ y: [0, -18, 0] }}
                transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                className="absolute bottom-20 right-12 bg-white/20 backdrop-blur-md p-4 rounded-lg shadow-lg"
              >
                <span className="text-3xl">🚀</span>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ 
            opacity: { delay: 2, duration: 0.5 },
            y: { repeat: Infinity, duration: 1.5, ease: "easeInOut" }
          }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
          onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
        >
          <div className="flex flex-col items-center text-white">
            <span className="text-xs mb-1 opacity-70">Scroll</span>
            <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                className="w-1.5 h-1.5 bg-white rounded-full"
              />
            </div>
          </div>
        </motion.div>
      </section>
       <section id="about">
        <About/>
      </section>
      <section id="projects">
        <motion.div
          ref={projectsRef}
          initial={{ opacity: 0, y: 60 }}
          animate={projectsInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <Projects/>
        </motion.div>
      </section>
      <section id="websites">
        <motion.div
          ref={websitesRef}
          initial={{ opacity: 0, y: 60 }}
          animate={websitesInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <ClientWebsites />
        </motion.div>
      </section>
      <section id="skills">
        <motion.div
          ref={skillsRef}
          initial={{ opacity: 0, y: 60 }}
          animate={skillsInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <Skills/>
        </motion.div>
      </section>
      <section id="advertisements">
        <motion.div
          ref={advertisementsRef}
          initial={{ opacity: 0, y: 60 }}
          animate={advertisementsInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut" }}>
          <Advertisements />
        </motion.div>
      </section>
      {/* Optionally add a contact section */}
      <section id="contact">
        <Contact />
      </section>
   
    </div>
  );
};

export default DominicPortfolio;