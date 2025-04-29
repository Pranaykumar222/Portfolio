import React from 'react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 text-center text-gray-400 text-sm">
      <div className="section-container">
        <p>Designed & Built by Pranay Kumar Karanam</p>
        <p>© {currentYear} All Rights Reserved</p>
      </div>
    </footer>
  );
};