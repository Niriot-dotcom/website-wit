import React from "react";

function TeamCard(props) {
  return (
    <div className="flex flex-col bg-white rounded-lg shadow-md w-full m-6 overflow-hidden sm:w-80 items-center">
      <img
        src={require(`../../images/icons/${props.image}`)}
        alt=""
        className="h-20 w-20 m-6"
      />
      <h2 className="text-center px-2 pb-5 font-semibold tracking-wide text-lg">
        {props.name}
      </h2>
      <button disabled className="bg-wit-blue text-white w-full h-40 p-5">
        {props.description}
      </button>
    </div>
  );
}

export default TeamCard;
