import React from "react";
import Typewriter from "./Typewriter";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

const Sidebar = () => {
  const icons = [
    {
      icon: <FaGithub />,
      link: "https://github.com/lestercuasay",
    },
    {
      icon: <FaLinkedin />,
      link: "https://www.linkedin.com/in/lester-cuasay/",
    },
  ];
  return (
    <header className="flex justify-between flex-col h-full">
      <div>
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Lester Cuasay
        </h1>
        <h2 className="mt-3 text-lg font-medium tracking-tight sm:text-xl">
          Junior Front End Developer
        </h2>
        <p className="mt-4 max-w-xs leading-normal">
          I build accessible, user-friendly web applications.
        </p>
      </div>

      <ul className="ml-1 mt-8 lg:mt-0 flex lg:justify-center items-center text-4xl">
        {icons.map((item, index) => (
          <li key={index} className="mr-5">
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              {item.icon}
            </a>
          </li>
        ))}
      </ul>
    </header>
  );
};

export default Sidebar;
