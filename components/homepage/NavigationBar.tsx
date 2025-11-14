
import React from 'react';

const SearchIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
);


const NavigationBar: React.FC = () => {
  const navLinks = ["ABOUT RD", "PROGRAMS & SERVICES", "NEWSROOM", "RESOURCES", "CONTACT US"];
  return (
    <nav className="bg-[#002f6c] text-white">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <ul className="flex">
          {navLinks.map(link => (
            <li key={link}>
              <a href="#" className="block py-4 px-4 font-semibold hover:bg-[#005ea2] transition-colors">{link}</a>
            </li>
          ))}
        </ul>
        <div className="relative">
          <input type="search" placeholder="Search..." className="bg-white/20 placeholder-white/70 rounded-full py-2 pl-4 pr-10 focus:outline-none focus:bg-white/30"/>
          <SearchIcon className="w-5 h-5 absolute right-3 top-1/2 -translate-y-1/2 text-white"/>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
