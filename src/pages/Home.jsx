import React, { useContext, useEffect } from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { ThemeContext } from '../context/ThemeProvider'
import AboutSection from '../section/AboutSection'
import JumbotronSection from '../section/JumbotronSection'
import ProjectsSection from '../section/ProjectsSection'

function Home() {
  const {isDark} = useContext(ThemeContext)
  console.log(isDark)
  return (
    <div className={`${isDark ? "bg-back-dark" : "bg-back-white"}`}>
        <JumbotronSection/>
        <AboutSection/>
        <ProjectsSection/>
        <Footer/>
    </div>
  )
}

export default Home