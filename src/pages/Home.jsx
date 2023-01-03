import React from 'react'
import Navbar from '../components/Navbar'
import About from '../section/About'
import Jumbotron from '../section/Jumbotron'

function Home() {
  return (
    <div className='bg-back-dark py-10  md:w-4/5 lg:w-3/5 md:mx-auto'>
        <Navbar/>
        <Jumbotron/>
        <About/>
    </div>
  )
}

export default Home