import React from "react";
import { education } from "../data";

export default function Education() {
  return (
    <section id="education" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
          Education
        </h1>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 mb-4">
          {education.map((edu) => (
            <div className="flex relative mx-2 my-4">
              <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900">
                <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                  {edu.subtitle}
                </h2>
                <h1 className="title-font text-lg font-medium text-white mb-3">
                  {edu.title}
                </h1>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
