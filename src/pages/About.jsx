import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import AboutSection from "../section/AboutSection";

function About() {
  return (
    <div className="py-10 md:mx-auto md:h-screen bg-back-dark -mt-10">
      <AboutSection className=""/>
      <Footer/>
    </div>
  );
}

export default About;
