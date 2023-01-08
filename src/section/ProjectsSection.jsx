import React, { useContext } from "react";
import bmi from "../assets/bmi.png";
import movieapp from "../assets/movieapp.png";
import ayorelieve from "../assets/ayorelieve.png";
import expensestracker from "../assets/expenses.png";
import todo from "../assets/todo.png";
import { ThemeContext } from "../context/ThemeProvider";

function ProjectsSection() {
  const {isDark} = useContext(ThemeContext)
  let projects = [
        {
      name: "AYO Relieve",
      img: ayorelieve,
      desc: "A website that can connect between grassroots organizations or institutions that wish to provide assistance to beneficiaries",
      link: "https://ayo-relieve-world.netlify.app/",
      tech: ["Reactjs", "Bootstrap", "Redux"],
      repo: "https://github.com/AYO-RELIEVE/FE-AYO-RELIEVE",
    },
        {
      name: "Simple Expenses Tracker ",
      img: expensestracker,
      desc: "A website that helps you to track your expenses(Mobile View Only)",
      link: "https://simpleexpensestracker.netlify.app/",
      tech: ["Reactjs", "Tailwindcss", "Redux"],
      repo: "https://github.com/aryamuhammad/SimpleExpensesTrackerApp",
    },
        {
      name: "To Do List",
      img: todo,
      desc: "A website that helps you to record your activity plan",
      link: "https://tpa-5-muhammadaryawirawan.netlify.app/",
      tech: ["Reactjs", "Bootstrap 5", "Redux"],
      repo: "https://github.com/aryamuhammad/tpa-5-todoapp",
    },
        {
      name: "TMDb Movie Web",
      img: movieapp,
      desc: "Website that displays a list of movies that are currently popular",
      link: "https://nonton-lah.netlify.app/",
      tech: ["Javascript", "Bootstrap 5"],
      repo: "https://github.com/aryamuhammad/TPA-BMI-Calculator",
    },
    {
      name: "BMI Calculator",
      img: bmi,
      desc: "Websites that help you in calculating your Body Mass Index",
      link: "https://calc-your-bmi.netlify.app/",
      tech: ["Javascript"],
      repo: "https://github.com/aryamuhammad/TPA-BMI-Calculator",
    },

  ];

  return (
    <div className={`px-6 py-5 pb-16  md:px-0 md:pt-10 md:pb-20  lg:pt-10 lg:pb-20 ${isDark? "bg-back-dark ": "bg-back-white"} lg:w-3/4 md:w-4/5 mx-auto`}>
      <div>
        <h1 className={`text-xl font-bold ${isDark? "text-sec-color-dark" : "text-sec-color-white"}  text-center md:text-start my-4`}>
          Projects
        </h1>
        <p className={`${isDark? "text-slate-400": "text-primary-color-white"}`}>
          I have created many projects while studying to be a Web Developer,
          here are some of the projects I have created
        </p>
      </div>
      <div>
        {/* Container Card */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-x-2 lg:gap-x-10 md:gap-y-5 gap-y-5 my-5">
          {/* Card Projects */}
          {projects.map((project, index) => {
            return (
              <div
                key={index}
                className={`card ${isDark? "bg-[#0c111c]":"bg-[#eef2f7]"} rounded-md flex flex-col px-3 py-5 md:h-[500px] h-[500px]`}
              >
                <div className="">
                  <img
                    src={project.img}
                    alt={project.name}
                    className="rounded-sm"
                  />
                </div>
                <div className=" h-full flex flex-col gap-y-2 my-2 pb-4">
                  <h1 className={`font-bold text-xl ${isDark? "text-primary-color-dark": "text-primary-color-white"} `}>
                    {project.name}
                  </h1>
                  <p className={`${isDark? "text-slate-400" : "text-body-text"} h-full`}>{project.desc}</p>
                  <div id="tech" className="flex gap-x-2 items-end">
                    {/* Tech Stack Project */}
                    {project.tech.map((tech, index) => {
                      return (
                        <div
                          key={index}
                          className={`${isDark? "text-slate-400 bg-back-dark" : "text-body-text bg-zinc-200"}  text-sm  rounded-sm px-1 py-1`}
                        >
                          <h1>{tech}</h1>
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div className="items-center justify-center flex w-full gap-x-3">
                  <a href={project.link} target="_blank" className="w-full">
                    <button
                      type="button"
                      className={`text-white border-2 ${isDark? "border-sec-color-dark bg-gradient-to-r  from-cyan-400  to-sec-color-dark " : "border-cyan-400 bg-gradient-to-r from-cyan-400  to-sec-color-white "} hover:bg-gradient-to-br focus:ring-4 focus:outline-none font-medium rounded-md text-sm px-5 py-2.5 text-center transition-all duration-300 w-full`}
                    >
                      View Live
                    </button>
                  </a>
                  <a className="w-full" href={project.repo} target="_blank">
                    <button className={`${isDark? "text-sec-color-dark border-sec-color-dark" : "text-sec-color-white border-sec-color-white"} border-2   hover:bg-gradient-to-br focus:ring-4 focus:outline-none font-medium rounded-md text-sm px-5 py-2.5 text-center  transition-all duration-300 w-full`}>
                      Github Repo
                    </button>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ProjectsSection;
