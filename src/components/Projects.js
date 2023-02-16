import React, { useState } from "react";
import { projects } from "../data";

export default function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section id="projects" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40" >
        <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
          Work Experience
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {projects.map((project, index) => (
            <div
              key={index}
              className="p-4 border-4 border-gray-800 bg-gray-900"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <h2 className="text-sm font-medium text-green-400 mb-1">
                {project.subtitle}
              </h2>
              <h1 className="text-lg font-medium text-white mb-3">
                {project.title}
              </h1>
              <p
                className={`leading-relaxed transition-opacity duration-500 ${
                  hoveredIndex === index ? "opacity-100" : "opacity-0"
                }`}
              >
                {project.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
