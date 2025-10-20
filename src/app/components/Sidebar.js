import React from "react";
import Typewriter from "./Typewriter";


const Sidebar = () => {
  return (
    <div className="p-10">
      <h3>Hello, It's me</h3>
      <h1>Lester Cuasay</h1>
      <h3>And I'm a <span><Typewriter /></span></h3>
      <p className="mt-2">
        I'm a software engineer with a passion for building web applications.
      </p>
    </div>
  );
};

export default Sidebar;
