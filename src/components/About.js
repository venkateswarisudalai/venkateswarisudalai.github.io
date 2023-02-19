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
            src="./venka.jpeg"
          />
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hi, I'm Venkateswari Sudalai!</h1>
            <h2 className="mb-2 text-white">
              Currently pursuing my masters in computer science from Northeastern University! 
            </h2>
          <p className="mb-8 leading-relaxed">
          As an experienced Software Engineer with a passion for software and system development, I have honed my skills at one of the largest companies in the world. However, I am now seeking my next big challenge and an opportunity to make a real impact by solving real-world problems using the latest tools and frameworks.
          I am constantly looking to expand my knowledge and skills, and am always eager to learn new things. My goal is to utilize my expertise and experience to deliver high-quality solutions that meet the needs of clients and end-users. With a strong work ethic and a commitment to excellence, I am confident that I can make a positive contribution to any team or project.
          </p>
        </div>
      </div>
    </section>
  );
}
