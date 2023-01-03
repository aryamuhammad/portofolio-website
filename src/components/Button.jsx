import React from 'react'

function Button({text,addStyle}) {
  return (
    <a href="https://wa.me/6289693210097" target={"_blank"}><button type="button" class={`text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 mt-6 hover:-translate-y-1 transition-all duration-300 ${addStyle}`}>{text}</button></a>
    
  )
}

export default Button