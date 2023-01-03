import React, { useState } from "react";
import avatar from "../assets/avatar.svg";
import { BsMoon, BsSun } from "react-icons/bs";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [isDark, setIsDark] = useState(true);
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  let Navigation = [
    { name: "HOME", link: "/" },
    { name: "BLOG", link: "/blog" },
    { name: "PROJECTS", link: "/project" },
    { name: "ABOUT", link: "/about" },
  ];
  let activeClass = "text-sec-color-dark font-bold";
  let notActiveClass = "text-primary-color-dark font bold";
  return (
    <nav className="">
      {/* Container Nav */}
      <div className="flex justify-between items-center px-12 md:justify-between md:static md:px-0 relative">
        {/* Avatar */}
        <div className=" md:w-3/4">
          <div className="bg-sec-color-dark rounded-full w-10 hover:-translate-y-1 transition-all duration-300">
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
          className={`absolute bg-back-dark  left-0 w-full align-center flex flex-col  items-center h-screen z-1 ${
            isNavbarOpen ? "-top-10" : "-top-[1000px]"
          }  justify-evenly gap-y-11 transition-all duration-500 md:static md:flex-row md:h-auto`}
        >
          {Navigation.map((nav, index) => {
            return (
              <li className="text-sm">
                <NavLink
                  key={index}
                  className={({ isActive }) =>
                    isActive ? activeClass : notActiveClass
                  }
                >
                  {nav.name}
                </NavLink>
              </li>
            );
          })}
          <i
            onClick={() => setIsDark(!isDark)}
            className="text-primary-color-dark hover:text-sec-color-dark hover:-translate-y-1 transition-all duration-300 cursor-pointer text-lg"
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
              className="text-primary-color-dark hover:text-sec-color-dark transition-all duration-300 cursor-pointer text-lg md:hidden absolute right-12 top-3"
            />
          ) : (
            <RxHamburgerMenu
              onClick={() => setIsNavbarOpen(!isNavbarOpen)}
              className="text-primary-color-dark hover:text-sec-color-dark transition-all duration-300 cursor-pointer text-lg md:hidden absolute right-12 top-3"
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
