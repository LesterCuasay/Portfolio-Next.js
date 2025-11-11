import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

const Sidebar = () => {
  const socialIcons = [
    {
      icon: <FaGithub />,
      link: "https://github.com/lestercuasay",
      className: "hover:text-black transition-colors",
    },
    {
      icon: <FaLinkedin />,
      link: "https://www.linkedin.com/in/lester-cuasay/",
      className: "hover:text-blue-600 transition-colors",
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
        <p className="mt-4 max-w-xs leading-normal antialiased">
          I build accessible, user-friendly web applications.
        </p>
      </div>

      <ul className="mt-8 lg:mt-0 flex lg:justify-center items-center text-4xl">
        {socialIcons.map((item, index) => (
          <li
            key={index}
            className="mr-5 cursor-pointer hover:scale-110 transition-transform duration-200 ease-in-out"
          >
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className={item.className}
            >
              {item.icon}
            </a>
          </li>
        ))}
      </ul>
    </header>
  );
};

export default Sidebar;
