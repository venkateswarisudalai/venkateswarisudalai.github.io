import React from "react";
import { education } from "../data";

export default function Education() {
  return (
    <section id="education" className="py-20 relative">
      <div className="container px-5 py-10 mx-auto lg:px-40">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 rounded-full bg-accent-500/10 border border-accent-500/30 text-accent-400 text-sm font-semibold">
              Academic Background
            </span>
          </div>
          <h1 className="sm:text-5xl text-4xl font-bold mb-4 text-white">
            <span className="gradient-text">Education</span>
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Strong foundation in Computer Science from prestigious institutions
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-primary-500 to-accent-500 hidden md:block"></div>

          <div className="space-y-8">
            {education.map((edu, index) => (
              <div
                key={index}
                className={`relative flex items-center ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } animate-slide-up`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 hidden md:block">
                  <div className="w-4 h-4 rounded-full bg-gradient-to-r from-primary-500 to-accent-500 border-4 border-slate-900 shadow-lg"></div>
                </div>

                {/* Card */}
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? "md:mr-auto" : "md:ml-auto"}`}>
                  <div className="group relative">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-600 to-accent-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
                    <div className="relative px-8 py-6 bg-slate-800/50 backdrop-blur-sm border border-white/10 rounded-2xl hover:border-accent-500/50 transition-all duration-300">
                      <div className="flex items-center mb-3">
                        <svg
                          className="w-6 h-6 text-accent-500 mr-3"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M12 14l9-5-9-5-9 5 9 5z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                          />
                        </svg>
                        <h2 className="text-sm font-bold tracking-wide text-accent-400 uppercase">
                          {edu.subtitle}
                        </h2>
                      </div>
                      <h1 className="text-xl font-bold text-white group-hover:text-primary-400 transition-colors duration-300">
                        {edu.title}
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
