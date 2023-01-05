import React from "react";
import ig from "../assets/instagram.png";
import linkedin from "../assets/linkedin.png";
import github from "../assets/github.png";
import { BiSmile } from "react-icons/bi";
import { BsGear } from "react-icons/bs";
function AboutSection() {
  let skills = [
    { name: "HTML" },
    { name: "CSS" },
    { name: "Javascript" },
    { name: "React JS" },
    { name: "Tailwind CSS" },
    { name: "Figma" },
    { name: "Github" },
    { name: "Bootstrap 5" },
  ];
  let socmed = [
    { logo: ig, link: "https://www.instagram.com/aryawirawannn/" },
    { logo: linkedin, link: "www.linkedin.com/in/muhammadaryawirawan" },
    { logo: github, link: "https://github.com/aryamuhammad" },
  ];
  return (
    <div className="px-6 py-5 md:px-0 md:flex md:flex-row md:py-5 md:gap-x-10 md:my-28 bg-[#0c111c] md:bg-back-dark md:w-4/5 lg:w-3/4 mx-auto">
      <div className="my-6">
        <div className="flex justify-center md:justify-start items-center mb-4 gap-x-3 ">
          <div className="h-full px-2 py-2 rounded-full bg-[#0c111c] hidden md:block">
            <BiSmile className="text-sec-color-dark text-2xl" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-sec-color-dark  text-center md:text-start">
              About Me
            </h1>
          </div>
        </div>

        <p className="text-slate-400">
          I am Muhammad Arya Wirawan. Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. Aspernatur libero fuga neque? Omnis officia
          laboriosam ut accusantium recusandae consectetur reiciendis.
        </p>
        <div id="socmed">
          <h1 className="text-xl font-bold text-sec-color-dark my-4 text-center md:text-start">
            Get in touch 👋
          </h1>
        </div>
        <div className="flex gap-x-5 text-center justify-center md:justify-start">
          {socmed.map((socmed, index) => {
            return (
              <a key={index} href={socmed.link} target="_blank">
                <img src={socmed.logo} className="w-10" />
              </a>
            );
          })}
        </div>
      </div>
      <div className="my-6 md:w-full">
        <div className="flex justify-center md:justify-start items-center mb-4 gap-x-3"> 
          <div className="h-full px-2 py-2 rounded-full bg-[#0c111c] hidden md:block">
            <BsGear className="text-sec-color-dark text-xl"/>
          </div>
          <div>
            <h1 className="text-xl font-bold text-sec-color-dark text-center md:text-start">
              Skills
            </h1>
          </div>
        </div>

        <div className="flex flex-wrap gap-x-5 gap-y-3">
          {skills.map((skill, index) => {
            return (
              <div
                key={index}
                className="text-slate-400 bg-back-dark md:bg-[#0c111c]  px-4 py-2 rounded-sm w-auto"
              >
                <h1>{skill.name}</h1>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
