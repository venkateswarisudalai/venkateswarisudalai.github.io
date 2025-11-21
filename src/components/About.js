import React from "react";

export default function About() {
  return (
    <section id="about" className="min-h-screen flex justify-center items-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-600/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-600/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center relative z-10">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 animate-slide-in">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000"></div>
            <img
              className="relative object-cover object-center rounded-full h-64 w-64 md:h-80 md:w-80 border-4 border-white/10 shadow-2xl"
              alt="venka"
              src="./venkateswari.png"
            />
          </div>
        </div>

        <div className="lg:flex-grow md:w-1/2 lg:pl-12 md:pl-8 flex flex-col md:items-start md:text-left items-center text-center animate-slide-up">
          <div className="mb-4">
            <span className="inline-block px-4 py-2 rounded-full bg-primary-500/10 border border-primary-500/30 text-primary-400 text-sm font-semibold mb-4">
              Software Engineer
            </span>
          </div>

          <h1 className="title-font sm:text-5xl text-4xl mb-6 font-bold text-white leading-tight">
            Hi, I'm{" "}
            <span className="gradient-text">
              Venkateswari Sudalai
            </span>
          </h1>

          <h2 className="mb-6 text-xl text-primary-300 font-medium">
            Building scalable systems & cloud infrastructure
          </h2>

          <p className="mb-8 leading-relaxed text-gray-300 text-lg">
            Experienced Software Engineer specializing in <span className="text-white font-semibold">DevOps</span>,
            <span className="text-white font-semibold"> backend development</span>, and
            <span className="text-white font-semibold"> cloud technologies</span>. I've contributed to building
            scalable systems at companies like <span className="text-primary-400">Apple</span> and
            <span className="text-primary-400"> Novarc Technologies</span>, improving CI/CD pipelines and
            optimizing infrastructure for high efficiency and reliability.
          </p>

          <p className="mb-8 leading-relaxed text-gray-400">
            I'm passionate about solving complex problems, automating workflows, and contributing to
            high-impact engineering teams. Currently seeking opportunities in <span className="text-accent-400 font-semibold">California</span> to
            apply my technical expertise and continue growing as an engineer.
          </p>

          <div className="flex gap-4 flex-wrap justify-center md:justify-start">
            <a
              href="#contact"
              className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white rounded-lg font-medium shadow-lg hover:shadow-primary-500/50 transition-all duration-300 hover:scale-105"
            >
              Get In Touch
              <svg
                className="w-4 h-4 ml-2"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
            <a
              href="#projects"
              className="inline-flex items-center px-8 py-3 border-2 border-primary-500/50 hover:border-primary-500 text-primary-400 hover:bg-primary-500/10 rounded-lg font-medium transition-all duration-300"
            >
              View Experience
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
