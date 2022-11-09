import React from "react";

function MemberCard(props) {
  return (
    <div className="flex flex-col bg-white rounded-lg shadow-md w-full m-6 overflow-hidden sm:w-80 items-center">
      {/* <img
        src={require(`../../images/icons/${props.member.image}`)}
        alt=""
        className="h-20 w-20 m-6"
      /> */}
      {/* <h2 className="text-center px-2 pb-5 font-semibold tracking-wide text-lg">
        {props.member.name}
      </h2> */}
      {/* <button disabled className="bg-acmw-purple text-white w-full h-40 p-5">
        {props.member.about ? props.member.about : "Mujer admirable"}
      </button> */}
      <button disabled className="bg-acmw-purple text-white w-full h-40 p-5">
        {props.member.name}
      </button>
    </div>
  );
}

export default MemberCard;
