import { BadgeCheckIcon, ChipIcon } from "@heroicons/react/solid";
import React from "react";
import { skills } from "../data";
import '../index.css';

export default function Skills() {
  return (
    <section id="skills" className="py-20 relative">
      <div className="container px-5 py-10 mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center justify-center mb-6">
            <ChipIcon className="w-12 h-12 text-primary-500 animate-float" />
          </div>
          <div className="inline-block mb-4">
            <span className="px-4 py-2 rounded-full bg-accent-500/10 border border-accent-500/30 text-accent-400 text-sm font-semibold">
              Technical Expertise
            </span>
          </div>
          <h1 className="sm:text-5xl text-4xl font-bold mb-4 text-white">
            Skills &amp; <span className="gradient-text">Technologies</span>
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Proficient in modern technologies and tools for building scalable applications
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:w-4/5 mx-auto">
          {skills.map((skill, index) => (
            <div
              key={skill}
              className="group relative animate-slide-up"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-600 to-accent-600 rounded-xl blur opacity-0 group-hover:opacity-40 transition duration-500"></div>
              <div className="relative bg-slate-800/50 backdrop-blur-sm border border-white/10 rounded-xl p-4 h-full flex items-center justify-center hover:border-primary-500/50 hover:scale-105 transition-all duration-300">
                <BadgeCheckIcon className="text-primary-500 w-5 h-5 flex-shrink-0 mr-3 group-hover:text-accent-400 transition-colors duration-300" />
                <span className="font-semibold text-white text-sm md:text-base">
                  {skill}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
