import React from "react";
import projectsList from "../../db/get-projects.json";
import ProjectCard from "./ProjectCard";

function ProjectsList() {
  return (
    <div className="flex flex-wrap justify-center">
      {projectsList &&
        projectsList.map((project, index) => {
          return (
            <ProjectCard
              key={index}
              name={project.name}
              description={project.description}
              image={project.image}
            />
          );
        })}
    </div>
  );
}

export default ProjectsList;
