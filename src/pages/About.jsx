import React, { useContext } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { ThemeContext } from "../context/ThemeProvider";
import AboutSection from "../section/AboutSection";

function About() {
    const {isDark} = useContext(ThemeContext)
  return (
    <div className= {`${isDark ? "bg-back-dark" : "bg-back-white"} md:mx-auto md:h-screen`}>
      <AboutSection className=""/>
      <Footer/>
    </div>
  );
}

export default About;
