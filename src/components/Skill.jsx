import React from "react";

export const Skill = () => {
  const skills = [
    { name: "HTML", level: "80%" },
    { name: "CSS", level: "75%" },
    { name: "JavaScript", level: "70%" },
    { name: "Laravel", level: "65%" },
    { name: "React.js", level: "80%" },
    { name: "MySQL", level: "70%" },
  ];

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Keterampilan Saya</h2>
      <div className="space-y-4">
        {skills.map((skill, index) => (
          <div key={index}>
            <div className="flex justify-between">
              <span>{skill.name}</span>
              <span>{skill.level}</span>
            </div>
            <div className="bg-gray-300 rounded-full h-2 mt-1">
              <div
                className="bg-green-500 h-2 rounded-full"
                style={{ width: skill.level }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skill;
