import React from "react";
import { sideProjects } from "../data";

export default function SideProjects() {
  return (
    <section id="side-projects" className="py-20 relative">
      <div className="container px-5 py-10 mx-auto lg:px-40">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 rounded-full bg-primary-500/10 border border-primary-500/30 text-primary-400 text-sm font-semibold">
              Things I've Built
            </span>
          </div>
          <h1 className="sm:text-5xl text-4xl font-bold mb-4 text-white">
            Featured <span className="gradient-text">Projects</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Products I design, build, and ship end to end
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {sideProjects.map((project) => {
            const Card = project.link ? "a" : "div";
            return (
              <Card
                key={project.title}
                href={project.link}
                target={project.link ? "_blank" : undefined}
                rel={project.link ? "noopener noreferrer" : undefined}
                className="group relative block"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-600 to-accent-600 rounded-2xl blur opacity-0 group-hover:opacity-30 transition duration-500"></div>

                <div className="relative p-8 rounded-2xl bg-slate-800/50 border border-white/10 backdrop-blur-sm hover:border-primary-500/50 transition-all duration-300 h-full flex flex-col">
                  <div className="flex items-start justify-between mb-2">
                    <h2 className="text-xl font-bold text-white group-hover:text-primary-400 transition-colors duration-300">
                      {project.title}
                    </h2>
                    {project.link && (
                      <svg
                        className="w-5 h-5 text-gray-400 group-hover:text-primary-400 transition-colors duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    )}
                  </div>

                  <p className="text-accent-400 text-sm font-semibold mb-4">{project.tagline}</p>

                  <p className="text-gray-300 leading-relaxed mb-6 flex-grow">{project.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-full bg-primary-500/20 border border-primary-500/30 text-primary-400 text-xs font-semibold"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
