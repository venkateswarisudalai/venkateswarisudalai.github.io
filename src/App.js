import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import SideProjects from "./components/SideProjects";
import Skills from "./components/Skills";
import Education from "./components/Education";

export default function App() {
  return (
    <main className="text-gray-300 min-h-screen">
      <Navbar />
      <About />
      <Projects />
      <SideProjects />
      <Education />
      <Skills />
      <Contact />
    </main>
  );
}
