import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaBootstrap,
  FaReact,
  FaPhp,
  FaDatabase,
  FaLaravel,
  FaGit,
  FaGithub,
  FaProjectDiagram,
  FaPython,
} from "react-icons/fa";

const sections = [
  {
    title: "HTML",
    icon: <FaHtml5 />,
    description: "Hypertext Markup Language",
    color: "#E44D26",
  },
  {
    title: "CSS",
    icon: <FaCss3Alt />,
    description: "Cascading Style Sheets",
    color: "#1572B6",
  },
  {
    title: "JavaScript",
    icon: <FaJsSquare />,
    description: "A high-level, dynamic, and interpreted programming language",
    color: "#F7DF1E",
  },
  {
    title: "Bootstrap",
    icon: <FaBootstrap />,
    description:
      "A popular front-end framework for building responsive and mobile-first projects",
    color: "#563D7C",
  },
  {
    title: "React",
    icon: <FaReact />,
    description: "A JavaScript library for building user interfaces",
    color: "#61DAFB",
  },
  {
    title: "PHP",
    icon: <FaPhp />,
    description: "A server-side scripting language for web development",
    color: "#4F5B93",
  },
  {
    title: "MySQL",
    icon: <FaDatabase />,
    description: "A relational database management system",
    color: "#00758F",
  },
  {
    title: "Laravel",
    icon: <FaLaravel />,
    description: "A PHP framework for building robust and scalable web applications",
    color: "#FF2D20",
  },
  {
    title: "Git",
    icon: <FaGit />,
    description: "A version control system for tracking changes in source code",
    color: "#F05032",
  },
  {
    title: "GitHub",
    icon: <FaGithub />,
    description: "A web-based platform for version control and collaboration",
    color: "#181717",
  },
  {
    title: "UML",
    icon: <FaProjectDiagram />,
    description: "A standardized modeling language for software systems",
    color: "#A2A2A2",
  },
  {
    title: "Python",
    icon: <FaPython />,
    description: "A high-level programming language for general-purpose programming",
    color: "#3776AB",
  },
];

export const Skill = () => {
  useEffect(() => {
    AOS.init({ once: false });
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen p-6 sm:p-10" id="skill">
      <div className="max-w-screen-xl mx-auto px-4">
        <h1
          className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-6"
          data-aos="fade-down"
          data-aos-duration="1000"
        >
          Skills
        </h1>
        <h2
          className="text-center text-gray-600 mb-10 text-sm sm:text-base lg:text-lg"
          data-aos="fade-down"
          data-aos-duration="1200"
        >
          I possess a diverse skill set in various technologies that empower
          effective and efficient web development. From design to database
          management and dynamic web application development, I am equipped to
          tackle a wide range of challenges.
        </h2>

        <div
          className="flex justify-center mb-8"
          data-aos="fade-down"
          data-aos-duration="1200"
        >
          <div className="w-16 sm:w-24 h-1 bg-indigo-600 rounded" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {sections.map((section, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="1000"
              className="bg-gray-800 text-white rounded-lg p-4 sm:p-6 shadow-lg flex flex-col items-center text-center transition-transform transform hover:scale-105 relative"
            >
              <div className="flex items-center justify-center mb-4">
                <div
                  className="text-3xl sm:text-4xl mr-2"
                  style={{ color: section.color }}
                  aria-label={section.title}
                >
                  {section.icon}
                </div>
                <h3 className="text-lg sm:text-xl">{section.title}</h3>
              </div>
              <p className="text-gray-400 text-xs sm:text-sm">{section.description}</p>
              <div className="absolute bottom-0 left-0 right-0 p-2 bg-gray-700 text-center text-xs sm:text-sm rounded-b-lg opacity-0 hover:opacity-100 transition-opacity duration-300">
                {section.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skill;
