import React, { useContext } from 'react'
import avatar from "../assets/avatar.svg"
import Button from '../components/Button'
import { ThemeContext } from '../context/ThemeProvider'
function JumbotronSection() {
  const {isDark} = useContext(ThemeContext)
  return (
    <div className={`${isDark? "bg-back-dark" : "bg-back-white"} py-5 px-6 md:px-0  lg:w-3/4 md:w-4/5 lg:mx-auto lg:py-48 md:my-0 md:py-24 md:mx-auto`}>
        <div className='flex flex-col gap-y-10 md:gap-x-11 md:flex-row md:items-center md:justify-between'>
            <div className={`${isDark? "bg-sec-color-dark" : "bg-sec-color-white"} rounded-full w-4/5 mx-auto md:w-1/4 md:order-last md:mx-auto`}>
                <img src={avatar} alt="" className='rounded-full' />
            </div>
            <div className='md:w-3/5 flex flex-col justify-center items-center md:justify-start md:items-start '>
                <h1 className={`font-semibold ${isDark? "text-primary-color-dark": "text-primary-color-white"}  text-center md:text-start md:text-xl lg:text-2xl`}>Hi! I'm Muhammad Arya Wirawan. An enthusiastic Front-End Web Developer and Digital Marketing Specialist</h1>
                <Button  text="Contact Me" addStyle={"md:w-auto"}/>
            </div>
        </div>
    </div>
  )
}

export default JumbotronSection