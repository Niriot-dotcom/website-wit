import React from "react";
import teamsList from "../../db/teams-get.json";
import TeamCard from "./TeamCard";

function TeamsList() {
  return (
    <div>
      {teamsList &&
        teamsList.map((project, index) => {
          return (
            <TeamCard
              name={project.name}
              description={project.description}
              image={project.image}
            />
          );
        })}
    </div>
  );
}

export default TeamsList;
