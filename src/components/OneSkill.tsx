import React from "react";

interface OneSkillProps {
  src: string;
}

function OneSkill({ src }: OneSkillProps) {
  return (
    <div className="rounded-full bg-white p-4 shadow-md flex">
      <img src={src} alt="/" className="w-8" />
    </div>
  );
}

export default OneSkill;
