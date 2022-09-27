import React from "react";

function TeamCard(props) {
  return (
    <div>
      <img src={props.image} alt="" />
      <div className="">{props.name}</div>
      <div className="">{props.description}</div>
    </div>
  );
}

export default TeamCard;
