import React, { useState, useEffect } from 'react';
import { NavLink } from './NavLink';
import { Github, Linkedin, Mail } from 'lucide-react';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-navy/90 backdrop-blur-sm py-4 shadow-lg' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <a href="#hero" className="text-2xl font-medium text-teal">
          PK
        </a>

        <nav className="hidden md:flex items-center space-x-8">
          <NavLink href="#about" number="01" label="About" />
          <NavLink href="#skills" number="02" label="Skills" />
          <NavLink href="#projects" number="03" label="Projects" />
          <NavLink href="#contact" number="04" label="Contact" />
        </nav>

        <a 
          href="/resume.pdf" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hidden md:block btn-outline"
        >
          Resume
        </a>

        <button className="md:hidden text-teal">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>
      </div>
    </header>
  );
};