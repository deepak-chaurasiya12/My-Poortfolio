import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./Asset/SkillSet.css";

const skills = [
  { name: "HTML", level: 80, color: "#FF5733" },
  { name: "CSS", level: 70, color: "#3498db" },
  { name: "JavaScript", level: 60, color: "#f7df1e" },
  { name: "Python", level: 80, color: "#306998" },
  { name: "MySQL", level: 60, color: "#F29111" },
  { name: "R", level: 40, color: "#276DC3" },
  { name: "Django", level: 60, color: "#092e20" },
  { name: "MongoDB", level: 60, color: "#4DB33D" },
  { name: "React & Node.js", level: 60, color: "#61DBFB" }
];

const SkillSet = () => {
  const [animateBars, setAnimateBars] = useState(false);

  // Trigger animation when component mounts
  useEffect(() => {
    setAnimateBars(true);
  }, []);

  return (
    <div className="skills-container">
      {skills.map((skill, index) => (
        <div key={index} className="skill">
          <motion.div
            className="skill-bar"
            initial={{ height: "0%" }}
            animate={{ height: animateBars ? `${skill.level}%` : "0%" }}
            transition={{ duration: 1, ease: "easeOut" }}
            style={{ backgroundColor: skill.color }}
          >
            <span className="skill-name">{skill.name}</span>
          </motion.div>
        </div>
      ))}
    </div>
  );
};

export default SkillSet;
