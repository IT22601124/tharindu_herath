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
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="relative z-10 text-center px-6 max-w-5xl mx-auto"
        >
          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7, duration: 0.7 }}
            className="text-6xl md:text-5xl font-mono font-bold text-white mb-8 tracking-wider"
          >
            HELLO I'M Tharindu
          </motion.h1>

          {/* Quote */}
          <motion.blockquote
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.7 }}
            className="text-xl md:text-2xl text-gray-200 mb-12 max-w-4xl mx-auto leading-relaxed font-mono"
          >
            currently living in Malambe,<br />
            Welcome to my portfolio!
          </motion.blockquote>

          {/* Role with typing animation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.7 }}
            className="text-2xl md:text-3xl text-white font-mono tracking-wider"
          >
            I'm <span className="font-bold text-white border-b-2 border-white ml-2">{typingText}<span className="animate-pulse">|</span></span>
          </motion.div>
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
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
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