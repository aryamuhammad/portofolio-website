import React from 'react'
import Navbar from '../components/Navbar'
import About from '../section/About'
import Jumbotron from '../section/Jumbotron'
import Projects from '../section/Projects'

function Home() {
  return (
    <div className='bg-back-dark py-10  md:w-4/5 lg:w-3/4 md:mx-auto'>
        <Navbar/>
        <Jumbotron/>
        <About/>
        <Projects/>
    </div>
  )
}

export default Home