import React from "react";

function TeamCard(props) {
  return (
    <div>
      <img src={props.image} alt="" />
      <div>{props.name}</div>
      <div>{props.description}</div>
    </div>
  );
}

export default TeamCard;
