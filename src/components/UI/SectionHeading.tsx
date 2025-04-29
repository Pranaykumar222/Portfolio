import React from 'react';

interface SectionHeadingProps {
  number: string;
  title: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({ number, title }) => {
  return (
    <div className="flex items-center">
      <h2 className="section-number">{number}.</h2>
      <h2 className="ml-2 text-2xl md:text-3xl font-bold text-white">{title}</h2>
      <div className="ml-4 h-px bg-gray-700 flex-grow"></div>
    </div>
  );
};