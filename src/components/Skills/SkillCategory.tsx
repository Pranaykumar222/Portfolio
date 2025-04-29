import React, { ReactNode } from 'react';

interface SkillCategoryProps {
  title: string;
  skills: string[];
  icon: ReactNode;
}

export const SkillCategory: React.FC<SkillCategoryProps> = ({ title, skills, icon }) => {
  return (
    <div className="bg-navy border border-teal/10 rounded-lg p-6 hover:border-teal/30 transition-all duration-300">
      <div className="flex items-center mb-6">
        {icon}
        <h3 className="ml-2 text-xl font-medium text-white">{title}</h3>
      </div>
      
      <ul className="space-y-3">
        {skills.map((skill, index) => (
          <li key={index} className="flex items-center text-gray-300">
            <span className="mr-2 text-teal">▹</span>
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
};