import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ProjectsSection from "../section/ProjectsSection";
function Projects() {
  return (
    <div className="py-10 md:mx-auto">
      <Navbar />
      <ProjectsSection />
      <Footer />
    </div>
  );
}

export default Projects;
