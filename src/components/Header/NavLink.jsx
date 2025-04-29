import React from 'react';

export const NavLink = ({ href, number, label }) => {
  return (
    <a href={href} className="nav-link group">
      <span className="text-teal mr-1">{number}.</span> {label}
      <span className="block h-[1px] w-0 bg-teal transition-all duration-300 group-hover:w-full"></span>
    </a>
  );
};