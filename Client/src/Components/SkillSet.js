import React from 'react';
import './Asset/SkillSet.css'

const skills = [

  { name: "HTML", level: 80 },
  { name: "CSS", level: 70 },
  { name: "JavaScript", level: 60 },
  { name: "Python", level: 80 },
  { name: "MySql", level: 60 },
  {name:  "R", level:40},
  {name:"Django", level:60},
  {name:"MomgoDb", level:60},
  {name:"React node.js", level:60}
  // Add more skills here
];

const SkillSet = () => {
  return (
    <div className="skills-container">
      {skills.map((skill, index) => (
        <div key={index} className="skill">
          <div className="skill-name">{skill.name}</div>
          <div className="skill-bar">
            <div className="skill-level" style={{ width: `${skill.level}%` }}></div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default SkillSet;
