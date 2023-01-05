import React, { useEffect } from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import AboutSection from '../section/AboutSection'
import JumbotronSection from '../section/JumbotronSection'
import ProjectsSection from '../section/ProjectsSection'

function Home() {
  return (
    <div className={`md:-mt-32 py-10 md:mx-auto bg-back-dark -mt-2`}>
        <JumbotronSection/>
        <AboutSection/>
        <ProjectsSection/>
        <Footer/>
    </div>
  )
}

export default Home