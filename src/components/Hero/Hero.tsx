import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="min-h-screen pt-24 flex items-center">
      <div className="section-container">
        <div className="max-w-3xl animate-fade-in" style={{ animationDelay: '0.1s' }}>
          <p className="text-teal mb-4">Hi, my name is</p>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
            Pranay Kumar <br />Karanam.
          </h1>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-400 mb-6">
            I build things for the web.
          </h2>
          <div className="h-1 w-16 bg-teal mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mb-8">
            I'm a frontend developer with a passion for creating 
            beautiful, responsive, and user-friendly websites.
            Currently pursuing my studies at Apollo University in 
            Andhra Pradesh.
          </p>
          <div className="flex space-x-4">
            <a href="#projects" className="btn-primary">
              Check out my work
            </a>
            <a href="#contact" className="btn-outline">
              Get in touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};