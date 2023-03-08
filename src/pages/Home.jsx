import React from "react";
import logo from "../../src/images/logos/Logo_Panamericana-ACM-W_Color_Simbolo.png";
import ProjectsSummary from "../components/Home/ProjectsSummary";
import About from "../pages/About";

function Home() {
  return (
    <div className="w-full p-6">
      <div className="grid grid-cols-2 place-items-center gap-4">
        <div className="content-center align-middle items-center mt-10 w-full h-full">
          <h3>ACM-W Panamericana</h3>
          <h2 className="font-bold text-2xl">¿Quienes somos?</h2>
          <div className="w-8/12 content-center align-middle items-center mt-10 w-full h-full mx-[18%]"> <h1>Somos un capítulo estudiantil dedicado a alentar y motivar a niñas y mujeres a involucrarse en áreas de STEM (Science, Technology, Engineering, Mathematics), proporcionándoles recursos y oportunidades para orientarlas y apoyarlas en su camino hacia la educación en el área.</h1></div>
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
