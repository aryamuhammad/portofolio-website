import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeProvider'

function Footer() {
  const {isDark} = useContext(ThemeContext)
  return (
    <div className={`text-xs md:text-base ${isDark? "bg-[#0c111c]  text-slate-400" : "bg-[#eef2f7] text-body-text"}  py-5 text-center absolute bottom-0 w-full`}>
        <h1>©2023 Muhammad Arya Wirawan. All Rights Reserved.</h1>
    </div>
  )
}

export default Footer