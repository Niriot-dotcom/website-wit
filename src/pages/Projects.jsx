import React from "react";
import ProjectsList from "../components/Projects/ProjectsList";
import TeamsList from "../components/Projects/TeamsList";

function Projects() {
  return (
    <div className="w-full min-h-screen p-6">
      <div>
        <h1 className="font-bold text-xl text-center md:text-3xl md:mt-12 mb-4">
          Equipos
        </h1>
        <TeamsList />
      </div>

      <div>
        <h1 className="font-bold text-xl text-center md:text-3xl md:mt-12 mb-4">
          Proyectos
        </h1>
        <ProjectsList />
      </div>
    </div>
  );
}

export default Projects;
