import React from "react";
import Typewriter from "./Typewriter";


const Sidebar = () => {
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

     
    </header>
  );
};

export default Sidebar;
