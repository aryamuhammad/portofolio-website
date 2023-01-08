import React, { createContext, useState } from "react";

export const ThemeContext = createContext();
function ThemeProvider({children}) {
  const [isDark, setIsDark] = useState(JSON.parse(localStorage.getItem("isDark?")))
  if(localStorage.getItem("isDark?") == null) {
    localStorage.setItem("isDark?", JSON.stringify(true))
  } 
  localStorage.setItem("isDark?", JSON.stringify(isDark))
  return <ThemeContext.Provider value={{isDark, setIsDark}}>
    {children}
  </ThemeContext.Provider>;
}

export default ThemeProvider;
