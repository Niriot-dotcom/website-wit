import React from "react";

function ProjectCard(props) {
  return (
    <div className="flex flex-col bg-white rounded-lg shadow-md w-full m-6 overflow-hidden sm:w-64 items-center">
      <img
        src={require(`../../images/icons/${props.image}`)}
        alt=""
        className="h-20 w-20 m-6"
      />
      <h2 className="text-center px-2 pb-5">{props.name}</h2>
      {/* <h5 className="text-center px-2 pb-5">{props.description}</h5>   */}

      <button className="bg-acmw-blue text-acmw-purple w-full h-10 rounded-none text-center hover:bg-acmw-purple hover:text-white transition-all duration-500">
        Saber mas
      </button>
    </div>
  );
}

export default ProjectCard;
