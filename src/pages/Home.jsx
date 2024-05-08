import React from "react";
import logo from "../../src/images/logos/logo.png";
import ProjectsSummary from "../components/Home/ProjectsSummary";
import About from "../pages/About";

function Home() {
  return (
    <div className="w-full p-6">
      <div className="grid grid-cols-2 place-items-center gap-4">
        <div className="content-center align-middle items-center mt-10 w-full h-full">
          <h3>ACM-W Panamericana</h3>
          <h2>¿Quienes somos?</h2>
          <h1>ACM-W es una asociación con la visión de motivar a mujeres </h1>
        </div>

        <div className="items-center">
          <img className="w-80 h-80" src={logo} alt="logo" />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4">
        <About />
      </div>

      <div className="">
        <ProjectsSummary />
      </div>
    </div>
  );
}

export default Home;
