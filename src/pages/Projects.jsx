import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ProjectsSection from "../section/ProjectsSection";
function Projects() {
  return (
    <div className="md:-mt-32 md:pb-20 -mt-2 pb-10 md:mx-auto bg-back-dark h-full">
      <ProjectsSection />
      <Footer />
    </div>
  );
}

export default Projects;
