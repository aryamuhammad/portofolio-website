import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import AboutSection from '../section/AboutSection'
import JumbotronSection from '../section/JumbotronSection'
import ProjectsSection from '../section/ProjectsSection'

function Home() {
  return (
    <div className='bg-back-dark py-10 md:mx-auto'>
        <Navbar/>
        <JumbotronSection/>
        <AboutSection/>
        <ProjectsSection/>
        <Footer/>
    </div>
  )
}

export default Home