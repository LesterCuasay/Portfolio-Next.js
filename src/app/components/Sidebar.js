import React from "react";
import Typewriter from "./Typewriter";

const Sidebar = () => {
  return (
    <div className="">
      <h3 className="text-xl">Hello, It's me</h3>
      <h1 className="text-3xl">Lester Cuasay</h1>
      <h3 className="text-xl">And I'm a </h3>
      <p className="text-2xl md:text-3xl">
        <Typewriter />
      </p>
    </div>
  );
};

export default Sidebar;
