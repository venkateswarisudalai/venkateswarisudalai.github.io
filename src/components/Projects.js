import React, { useState } from "react";
import { projects } from "../data";

export default function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section id="projects" className="py-20 relative">
      <div className="container px-5 py-10 mx-auto lg:px-40">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 rounded-full bg-primary-500/10 border border-primary-500/30 text-primary-400 text-sm font-semibold">
              Professional Journey
            </span>
          </div>
          <h1 className="sm:text-5xl text-4xl font-bold mb-4 text-white">
            Work <span className="gradient-text">Experience</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Building innovative solutions across leading tech companies
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Gradient border effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-600 to-accent-600 rounded-2xl blur opacity-0 group-hover:opacity-30 transition duration-500"></div>

              <div className="relative p-8 rounded-2xl bg-slate-800/50 border border-white/10 backdrop-blur-sm hover:border-primary-500/50 transition-all duration-300 h-full">
                {/* Company badge */}
                <div className="flex items-start justify-between mb-4">
                  <span className="inline-block px-3 py-1 rounded-full bg-primary-500/20 border border-primary-500/30 text-primary-400 text-sm font-semibold">
                    {project.subtitle}
                  </span>
                  <div className="w-2 h-2 rounded-full bg-accent-500 animate-pulse"></div>
                </div>

                {/* Role and duration */}
                <h2 className="text-xl font-bold text-white mb-4 group-hover:text-primary-400 transition-colors duration-300">
                  {project.title}
                </h2>

                {/* Description with smooth reveal */}
                <div
                  className={`overflow-hidden transition-all duration-500 ${
                    hoveredIndex === index ? "max-h-96 opacity-100" : "max-h-24 opacity-75"
                  }`}
                >
                  <p className="text-gray-300 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Hover indicator */}
                {hoveredIndex !== index && (
                  <div className="mt-4 flex items-center text-primary-400 text-sm font-medium">
                    <span>Hover to read more</span>
                    <svg
                      className="w-4 h-4 ml-1 animate-bounce"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
