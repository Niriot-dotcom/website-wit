import React from "react";
import teamsList from "../../db/teams-get.json";
import TeamCard from "./TeamCard";

function TeamsList() {
  return (
    <div>
      {teamsList &&
        teamsList.map((team, index) => {
          return (
            <TeamCard
              key={index}
              name={team.name}
              description={team.description}
              image={team.image}
            />
          );
        })}
    </div>
  );
}

export default TeamsList;
