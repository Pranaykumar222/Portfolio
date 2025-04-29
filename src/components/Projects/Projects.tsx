import React from 'react';
import { SectionHeading } from '../UI/SectionHeading';
import { ProjectCard } from './ProjectCard';
import { ArrowRight } from 'lucide-react';

export const Projects: React.FC = () => {
  const projects = [
    {
      title: 'Personal Portfolio',
      description: 'A personal portfolio website built with React and Tailwind CSS to showcase my projects and skills.',
      tags: ['React', 'Tailwind CSS', 'JavaScript'],
      githubLink: '#',
      liveLink: '#'
    },
    {
      title: 'E-commerce Website',
      description: 'A fully responsive e-commerce website with product listings, cart functionality, and checkout process.',
      tags: ['React', 'CSS', 'REST API'],
      githubLink: '#',
      liveLink: '#'
    },
    {
      title: 'Weather Dashboard',
      description: 'A weather application that displays current weather and forecasts for any location using a weather API.',
      tags: ['JavaScript', 'HTML', 'CSS', 'API'],
      githubLink: '#',
      liveLink: '#'
    }
  ];

  return (
    <section id="projects" className="py-16 md:py-24">
      <div className="section-container">
        <SectionHeading number="03" title="Projects" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {projects.map((project, index) => (
            <ProjectCard 
              key={index}
              title={project.title}
              description={project.description}
              tags={project.tags}
              githubLink={project.githubLink}
              liveLink={project.liveLink}
            />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <button className="btn-primary flex items-center mx-auto">
            Show More
            <ArrowRight className="ml-2 w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};