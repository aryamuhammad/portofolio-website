import React, { useContext, useEffect, useState } from "react";
import avatar from "../assets/avatar.svg";
import { BsMoon, BsSun } from "react-icons/bs";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";
import { NavLink } from "react-router-dom";
import { ThemeContext } from "../context/ThemeProvider";

function Navbar() {
  const {isDark, setIsDark} = useContext(ThemeContext)
  const handleToggleTheme =()=> {
    setIsDark(!isDark)
  }
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  let Navigation = [
    { name: "HOME", link: "/" },
    { name: "ABOUT", link: "/about" },
    { name: "PROJECTS", link: "/project" },
  ];
  let activeClassDark = "text-sec-color-dark font-bold";
  let activeClassLight = "text-sec-color-white font-bold"
  let notActiveClassLight = "text-primary-color-white font-bold"
  let notActiveClassDark = "text-primary-color-dark font-bold";
  return (
    <nav className={`py-10 md:mx-auto ${isDark === true? "bg-back-dark" : "bg-back-white"}`}>
      {/* Container Nav */}
      <div className="flex justify-between items-center px-6 md:justify-between md:static md:px-0 relative md:w-4/5 lg:w-3/4 mx-auto">
        {/* Avatar */}
        <div className=" md:w-3/4">
          <div className={`${isDark? "bg-sec-color-dark" : "bg-sec-color-white"} rounded-full w-10 hover:-translate-y-1 transition-all duration-300`}>
            <img
              src={avatar}
              alt="avatar"
              className="w-10 rounded-full cursor-pointer"
            />
          </div>
        </div>
        {/* End Avatar */}
        {/* Navigation Links */}
        <ul
          className={`absolute ${isDark? "bg-back-dark" : "bg-back-white"} left-0 w-full align-center flex flex-col  items-center h-screen z-1 ${
            isNavbarOpen ? "-top-10" : "-top-[1000px]"
          }  justify-evenly gap-y-11  md:static md:flex-row md:h-auto md:w-3/5`}
        >
          {Navigation.map((nav, index) => {
            return (
              <li key={index} className="text-sm">
                <NavLink to={nav.link}
                  key={index}
                  className={({ isActive }) =>
                   {if (isActive == true){
                    if (isDark == true) {
                      return activeClassDark
                    } else {
                      return activeClassLight
                    }
                   }else if (isActive !==true) {
                    if(isDark== true) {
                      return notActiveClassDark
                    } else {
                       return notActiveClassLight
                    }
                   }
                  }}
                >
                  {nav.name}
                </NavLink>
              </li>
            );
          })}
          <i
            onClick={handleToggleTheme}
            className={`${isDark? "text-primary-color-dark" : "text-primary-color-white"} hover:text-sec-color-dark hover:-translate-y-1 transition-all duration-300 cursor-pointer text-lg`}
          >
            {isDark === true ? <BsMoon /> : <BsSun />}
          </i>
        </ul>
        {/* End Navigation Links */}
        {/* Icon Hamburger*/}
        <div>
          {isNavbarOpen ? (
            <RxCross2
              onClick={() => setIsNavbarOpen(!isNavbarOpen)}
              className={`${isDark? "text-primary-color-dark hover:text-sec-color-dark" : "text-primary-color-white hover:text-sec-color-white"} transition-all duration-300 cursor-pointer text-lg md:hidden absolute right-12 top-3`}
            />
          ) : (
            <RxHamburgerMenu
              onClick={() => setIsNavbarOpen(!isNavbarOpen)}
              className={`${isDark? "text-primary-color-dark hover:text-sec-color-dark" : "text-primary-color-white hover:text-sec-color-white"} transition-all duration-300 cursor-pointer text-lg md:hidden absolute right-12 top-3`}
            />
          )}
        </div>
        {/* End Icon Hamburger*/}
      </div>
      {/* End Container Nav */}
    </nav>
  );
}

export default Navbar;
