import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ThemeContext } from '../context/ThemeProvider'

function Button({text,addStyle}) {
  const {isDark} = useContext(ThemeContext)
  return (
    <a target={"_blank"} href="https://wa.me/+6289693210097"><button type="button" className={`text-white bg-gradient-to-r ${isDark? "from-cyan-400 to-sec-color-dark":"from-cyan-400 to-sec-color-white"} from-cyan-400 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none font-medium rounded-md text-sm px-5 py-2.5 text-center mr-2 mb-2 mt-6 hover:-translate-y-1 transition-all duration-300 ${addStyle}`}>{text}</button></a>
  )
  }
export default Button