import React from "react";
import { resume } from "../data";
import { socials } from "../data";

export default function About() {
  return (
    <section id="about" className="h-screen flex justify-center items-center">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
          <img
            className="object-cover object-center rounded-full h-200 w-200"
            alt="venka"
            src="./venkateswari.png"
          />
        </div>

        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hi, I'm Venkateswari Sudalai!
          </h1>

          <h2 className="mb-2 text-white">
            Actively looking for full-time software engineering opportunities in
            California.
          </h2>

          <p className="mb-8 leading-relaxed">
            I am an experienced Software Engineer with a strong background in
            DevOps, backend development, cloud technologies, and automation.
            Over the years, I’ve contributed to building scalable systems,
            improving CI/CD pipelines, and optimizing infrastructure for high
            efficiency and reliability.
            <br />
            <br />I am passionate about solving real-world problems, learning
            new tools, and contributing to high-impact engineering teams. I’m
            now seeking my next opportunity in **California**, where I can apply
            my technical expertise and continue growing as an engineer.
          </p>
        </div>
      </div>
    </section>
  );
}
