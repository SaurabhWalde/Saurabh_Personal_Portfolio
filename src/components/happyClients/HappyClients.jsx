import React from "react";
import Marquee from "react-fast-marquee";

const mySkills = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "React.js",
  "Node.js",
  "Express.js",
  "Python",
  "SQL",
  "Power BI",
  "Excel",
  "Data Analysis",
  "Big Data Analytics",
  "Git & GitHub",
  "REST APIs",
  "Tailwind CSS",
  "MongoDB",
  "Portfolio Projects",
  "Project Management",
  "Problem Solving",
  "Communication Skills",
];

const SkillMarquee = () => {
  return (
    <div className="bg-gray-900 py-6 px-4">
      <h2 className="text-center text-white text-xl md:text-2xl font-semibold mb-4">
        My Skills & Expertise
      </h2>
      <Marquee
        gradient={false}
        speed={50}
        pauseOnHover={true}
        className="flex items-center"
      >
        {mySkills.map((skill, index) => (
          <div
            key={index}
            className="flex items-center justify-center mx-3 px-4 py-2 bg-gray-800 text-white rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
          >
            {skill}
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default SkillMarquee;
