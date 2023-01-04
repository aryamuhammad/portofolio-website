import React from "react";
import bmi from "../assets/bmi.png";
import movieapp from "../assets/movieapp.png";
import ayorelieve from "../assets/ayorelieve.png";
import expensestracker from "../assets/expenses.png";
import todo from "../assets/todo.png";

function Projects() {
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
    <div className="px-6 md:px-0 md:my-28 md:py-5 py-5">
      <div>
        <h1 className="text-xl font-bold text-sec-color-dark  text-center md:text-start my-4">
          Projects
        </h1>
        <p className="text-slate-400">
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
                className="card bg-[#0c111c] rounded-md flex flex-col px-3 py-5 md:h-[500px] h-[500px]"
              >
                <div className="">
                  <img
                    src={project.img}
                    alt={project.name}
                    className="rounded-sm"
                  />
                </div>
                <div className=" h-full flex flex-col gap-y-2 my-2 pb-4">
                  <h1 className="font-bold text-xl text-primary-color-dark">
                    {project.name}
                  </h1>
                  <p className="text-slate-400 h-full">{project.desc}</p>
                  <div id="tech" className="flex gap-x-2 items-end">
                    {/* Tech Stack Project */}
                    {project.tech.map((tech, index) => {
                      return (
                        <div
                          key={index}
                          className="text-slate-400 text-sm bg-back-dark rounded-sm px-1 py-1"
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
                      className={`text-white border-2 border-sec-color-dark bg-gradient-to-r  from-cyan-400 via-cyan-500 to-sec-color-dark hover:bg-gradient-to-br focus:ring-4 focus:outline-none font-medium rounded-md text-sm px-5 py-2.5 text-center transition-all duration-300 w-full`}
                    >
                      View Live
                    </button>
                  </a>
                  <a className="w-full" href={project.repo} target="_blank">
                    <button className="text-sec-color-dark border-2 border-sec-color-dark  hover:bg-gradient-to-br focus:ring-4 focus:outline-none font-medium rounded-md text-sm px-5 py-2.5 text-center  transition-all duration-300 w-full">
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

export default Projects;
