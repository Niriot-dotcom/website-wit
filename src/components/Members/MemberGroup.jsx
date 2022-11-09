import React from "react";
import MemberCard from "../Members/MemberCard";

function MemberGroup(props) {
  return (
    <div className="flex flex-wrap justify-center">
      {props.members &&
        props.members.map((member, index) => {
          return <MemberCard key={index} member={member} />;
        })}
    </div>
  );
}

export default MemberGroup;
