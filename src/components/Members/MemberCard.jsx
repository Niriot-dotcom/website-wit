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
      {/* <button disabled className="bg-wit-blue text-white w-full h-40 p-5">
        {props.member.about ? props.member.about : "Mujer admirable"}
      </button> */}

      <div className="w-[300px] h-[150px] bg-transparent cursor-pointer group perspective">
        <div className="realtive preserve-3d group-hover:my-rotate-y-180  w-full h-full duration-1000">
          <div className="absolute  w-full h-full">{props.member.name}</div>
          <div className="absolute my-rotate-y-180 backface-hidden bg-white w-full h-full">
            <div className="text-center flex flex-colv items-center justify-center h-full">
              {props.member.position}
              <br />
              {props.member.year}
              <br />
              {props.member.about}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MemberCard;
