import React from "react";
import MemberGroup from "../components/Members/MemberGroup";
import memberGroups from "../db/get-members-22-23.json";

function Members() {
  return (
    <div className="w-full min-h-screen p-6">
      {memberGroups.map((group, index) => {
        return (
          <div>
            <h1 className="font-bold text-xl text-center md:text-3xl md:mt-12 mb-4">
              {group.title}
            </h1>
            <MemberGroup key={index} members={group.members} />
          </div>
        );
      })}
    </div>
  );
}

export default Members;
