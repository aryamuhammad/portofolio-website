import React from 'react'
import avatar from "../assets/avatar.svg"
import Button from '../components/Button'
function JumbotronSection() {
  return (
    <div className='my-16 px-6 md:px-0 md:my-56 md:w-4/5 lg:w-3/4 mx-auto'>
        <div className='flex flex-col gap-y-10 md:gap-x-11 md:flex-row md:items-center md:justify-between'>
            <div className="bg-sec-color-dark rounded-full w-4/5 mx-auto md:w-1/4 md:order-last md:mx-auto">
                <img src={avatar} alt="" className='rounded-full' />
            </div>
            <div className='md:w-3/5 flex flex-col justify-center items-center md:justify-start md:items-start '>
                <h1 className='font-semibold text-primary-color-dark text-center md:text-start md:text-xl lg:text-2xl'>Hi! I'm Muhammad Arya Wirawan. An enthusiastic Front-End Web Developer and Digital Marketing Specialist</h1>
                <Button  text="Contact Me" addStyle={"md:w-auto"}/>
            </div>
        </div>
    </div>
  )
}

export default JumbotronSection