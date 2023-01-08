import React, { useContext } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { ThemeContext } from "../context/ThemeProvider";
import ProjectsSection from "../section/ProjectsSection";
function Projects() {
  const {isDark} = useContext(ThemeContext)
  return (
    <div className={`${isDark ? "bg-back-dark" : "bg-back-white"} md:mx-auto md:pb-20  pb-10 `}>
      <ProjectsSection />
      <Footer />
    </div>
  );
}

export default Projects;
