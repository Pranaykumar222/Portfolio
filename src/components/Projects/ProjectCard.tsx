import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  githubLink: string;
  liveLink: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  tags,
  githubLink,
  liveLink
}) => {
  return (
    <div className="bg-navy-light border border-teal/10 rounded-lg overflow-hidden transition-all duration-300 hover:border-teal/30 hover:translate-y-[-5px]">
      <div className="p-6">
        <h3 className="text-xl font-medium text-white mb-3">{title}</h3>
        <p className="text-gray-400 mb-4">{description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <span key={index} className="tag">{tag}</span>
          ))}
        </div>
        
        <div className="flex space-x-4">
          <a 
            href={githubLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-teal transition-colors duration-300"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5" />
          </a>
          
          <a 
            href={liveLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-teal transition-colors duration-300"
            aria-label="Live Site"
          >
            <ExternalLink className="w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
  );
};