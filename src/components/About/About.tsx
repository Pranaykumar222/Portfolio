import React from 'react';
import { SectionHeading } from '../UI/SectionHeading';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-16 md:py-24">
      <div className="section-container">
        <SectionHeading number="01" title="About Me" />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-12">
          <div className="col-span-2 space-y-6">
            <p className="text-gray-300 leading-relaxed">
              Hello! I'm Pranay, a frontend developer and student at Apollo University, Andhra
              Pradesh. I enjoy creating things that live on the internet, whether that be websites,
              applications, or anything in between.
            </p>
            
            <p className="text-gray-300 leading-relaxed">
              My interest in web development started back when I decided to try customizing a
              website theme — turns out hacking together a custom theme taught me a lot about
              HTML & CSS!
            </p>
            
            <p className="text-gray-300 leading-relaxed">
              Fast-forward to today, and I've had the privilege of building numerous web projects.
              My main focus these days is building accessible, inclusive products and digital
              experiences.
            </p>
            
            <p className="text-gray-300 leading-relaxed">
              I'm currently looking for frontend development internship opportunities where I can
              apply my skills and continue to grow as a developer.
            </p>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 border-2 border-teal/20 rounded-md transform translate-x-4 translate-y-4"></div>
            <div className="relative bg-navy-light border border-teal/20 rounded-md p-4 h-64 flex items-center justify-center">
              <span className="text-7xl text-teal opacity-50">PK</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};