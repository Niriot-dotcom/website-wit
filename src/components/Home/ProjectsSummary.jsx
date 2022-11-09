import React from "react";
import projectsList from "../../db/get-projects.json";

function ProjectsSummary() {
  const handleRedirect = () => {
    window.location.href = "/projects";
  };

  return (
    <div className="grid grid-cols-2 place-items-center gap-4 rounded-3xl bg-acmw-light w-full">
      <div className="content-center align-middle items-center mt-10 w-full h-full">
        <div className="flex flex-wrap justify-center">
          {projectsList &&
            projectsList.map((project, index) => {
              return (
                <div className="flex flex-col py-1 bg-white hover:bg-acmw-pink transition-all duration-500 rounded-lg shadow-md w-36 m-6 h-28 overflow-hidden sm:w-28 items-center">
                  <img
                    src={require(`../../images/icons/${project.image}`)}
                    alt=""
                    className="h-10 w-10 m-2"
                  />
                  <h2 className="text-center px-2 pb-5 text-sm">
                    {project.name}
                  </h2>

                  {/* <button
        className="bg-acmw-blue text-acmw-purple w-full h-10 rounded-none text-center hover:bg-acmw-purple hover:text-white transition-all duration-500"
      >
                  <h2 className="text-center px-2 pb-5 text-sm">{project.name}</h2>

      </button> */}
                </div>
              );
            })}
        </div>
      </div>

      <div>
        <h1 className="font-bold text-xl text-center md:text-3xl md:mt-12">
          Proyectos
        </h1>

        <div className="text-md text-justify py-8 px-16">
          A traves de nuestros proyectos podras mejorar tus habilidades o
          aprender cosas nuevas. Ademas, conoceras a nuevas mujeres con las que
          compartes intereses y compartir tus experiencias y conocmientos.
        </div>

        <div>
          <button
            onClick={handleRedirect}
            className="bg-acmw-blue text-acmw-purple w-72 h-10 mb-8 rounded-full text-center hover:bg-acmw-purple hover:text-white transition-all duration-500"
          >
            Saber mas
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProjectsSummary;
