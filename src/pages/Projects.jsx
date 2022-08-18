import React from "react";
import ProjectsList from "../components/Projects/ProjectsList";
import TeamsList from "../components/Projects/TeamsList";

function Projects() {
  return (
    <div>
      <div>
        <div>Equipos</div>
        <div>ayudan a cumplir los objetivos de los proyectos</div>
        <TeamsList />
      </div>

      <div>
        <div>Proyectos</div>
        <div>proyects description</div>
        <ProjectsList />
      </div>
    </div>
  );
}

export default Projects;
