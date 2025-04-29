import React from 'react';
import { SectionHeading } from '../UI/SectionHeading';
import { SkillCategory } from './SkillCategory';
import { Monitor, Code2, Server, Database } from 'lucide-react';

export const Skills: React.FC = () => {
  const frontendSkills = ['HTML5', 'CSS3', 'Tailwind CSS', 'JavaScript', 'React.js', 'REST API'];
  const toolSkills = ['Git', 'GitHub', 'VS Code', 'Postman', 'npm'];
  const backendSkills = ['Node.js (basic)', 'Express.js (basic)'];
  const databaseSkills = ['MongoDB (basic)', 'PostgreSQL (basic)'];

  return (
    <section id="skills" className="py-16 md:py-24 bg-navy-light">
      <div className="section-container">
        <SectionHeading number="02" title="Skills" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          <SkillCategory 
            title="Frontend" 
            skills={frontendSkills}
            icon={<Monitor className="w-6 h-6 text-teal" />}
          />
          
          <SkillCategory 
            title="Tools" 
            skills={toolSkills}
            icon={<Code2 className="w-6 h-6 text-teal" />}
          />
          
          <SkillCategory 
            title="Backend" 
            skills={backendSkills}
            icon={<Server className="w-6 h-6 text-teal" />}
          />
          
          <SkillCategory 
            title="Database" 
            skills={databaseSkills}
            icon={<Database className="w-6 h-6 text-teal" />}
          />
        </div>
      </div>
    </section>
  );
};