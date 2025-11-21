import React from "react";

export default function Navbar() {
  return (
    <header className="glass md:sticky top-0 z-50 backdrop-blur-lg bg-slate-900/80 border-b border-white/10 shadow-lg">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="title-font font-bold text-white mb-4 md:mb-0 group">
          <a href="#about" className="ml-3 text-xl gradient-text hover:scale-105 transition-transform duration-300">
            Venkateswari Sudalai
          </a>
        </a>
        <nav className="md:mr-auto md:ml-8 md:py-1 md:pl-8 md:border-l md:border-white/20 flex flex-wrap items-center text-base justify-center gap-2">
          <a
            href="#projects"
            className="px-3 py-2 text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-300"
          >
            Experience
          </a>
          <a
            href="#education"
            className="px-3 py-2 text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-300"
          >
            Education
          </a>
          <a
            href="#skills"
            className="px-3 py-2 text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-300"
          >
            Skills
          </a>
          <a
            href="#contact"
            className="px-3 py-2 text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-300"
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
