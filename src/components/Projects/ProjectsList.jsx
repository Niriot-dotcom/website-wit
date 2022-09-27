import React from "react";
import projectsList from "../../db/projects-get.json";
import ProjectCard from "./ProjectCard";

function ProjectsList() {
  return (
    <div>
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
