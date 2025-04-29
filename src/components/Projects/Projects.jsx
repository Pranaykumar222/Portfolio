import React, { useState } from 'react';
import { SectionHeading } from '../UI/SectionHeading';
import { ProjectCard } from './ProjectCard';
import { ArrowRight } from 'lucide-react';

export const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  const initialProjectsCount = 3;

  const projects = [
    {
      title: 'Personal Portfolio',
      description: 'A personal portfolio website built with React and Tailwind CSS to showcase my projects and skills.',
      tags: ['React', 'Tailwind CSS', 'JavaScript'],
      githubLink: 'https://github.com/Pranaykumar222/Portfolio',
      liveLink: 'https://portfolio-nine-livid-15.vercel.app/'
    },

    {
      title: 'Quiz-App',
      description: 'An interactive quiz application built with React and Tailwind CSS, featuring dynamic questions, score tracking, and a smooth user experience.',
      tags: ['React','JAVASCRIPT','Tailwind CSS'],
      githubLink: 'https://github.com/Pranaykumar222/Quiz-App',
      liveLink: 'https://quiz-app-eta-flame.vercel.app/'
    },

    {
  title: 'Chat-App',
  description: 'A real-time chat application powered by Cursor AI and Bolt AI, enabling seamless conversations with smart features, modern UI using React and Tailwind CSS, and secure communication.',
  tags: ['React', 'Tailwind CSS', 'JavaScript', 'Cursor AI', 'Bolt AI'],
  githubLink: 'https://github.com/Pranaykumar222/Chat-App',
  liveLink: '#'
},

    {
      title: 'To-Do App',
      description: 'A simple and efficient to-do list application built with React and Tailwind CSS, allowing users to add, edit, complete, and delete tasks with a clean and responsive UI.',
      tags: ['JavaScript', 'HTML', 'Tailwind CSS', 'JAVASCRIPT','NODE JS','EXPRESS JS','POSTGRESQL'],
      githubLink: 'https://github.com/Pranaykumar222/To-Do-App',
      liveLink: '#'
    },

    {
      title: 'Stock Market Dashboard (Frontend Only)',
      description: 'A beautifully designed stock market dashboard built with React.js and Tailwind CSS, featuring static data to showcase portfolio tracking, stock watchlists, and visualizations. This project focuses on creating a clean, responsive UI without real-time data integration.',
      tags: ['JavaScript', 'React.js', 'Tailwind CSS'],
      githubLink: 'https://github.com/Pranaykumar222/Stock-Market-Dashboard',
      liveLink: 'https://stock-market-dashboard-mu.vercel.app/'
    },

    {
      title: 'World Clock',
      description: 'A beautifully styled world clock application built with React and Tailwind CSS, displaying real-time clocks for multiple countries with smooth animations and responsive design.',
      tags: ['React', 'JavaScript', 'Tailwind CSS'],
      githubLink: 'https://github.com/Pranaykumar222/Clock',
      liveLink: 'https://clock-zeta-one.vercel.app/'
    },
  ];

  const displayedProjects = showAll ? projects : projects.slice(0, initialProjectsCount);

  return (
    <section id="projects" className="py-16 md:py-24">
      <div className="section-container">
        <SectionHeading number="03" title="Projects" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {displayedProjects.map((project, index) => (
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
        
        {projects.length > initialProjectsCount && (
          <div className="mt-12 text-center">
            <button 
              className="btn-primary flex items-center mx-auto"
              onClick={() => setShowAll(!showAll)}
            >
              {showAll ? 'Show Less' : 'Show More'}
              <ArrowRight className={`ml-2 w-4 h-4 transition-transform ${showAll ? 'rotate-90' : ''}`} />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};