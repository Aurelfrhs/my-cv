import React from "react";
import { motion } from "framer-motion";
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
  },
  { title: "CSS", icon: <FaCss3Alt />, description: "Cascading Style Sheets" },
  {
    title: "JavaScript",
    icon: <FaJsSquare />,
    description: "A high-level, dynamic, and interpreted programming language",
  },
  {
    title: "Bootstrap",
    icon: <FaBootstrap />,
    description:
      "A popular front-end framework for building responsive and mobile-first projects",
  },
  {
    title: "React",
    icon: <FaReact />,
    description:
      "A utility-first CSS framework for building custom user interfaces",
  },
  {
    title: "PHP",
    icon: <FaPhp />,
    description: "A server-side scripting language for web development",
  },
  {
    title: "MySQL",
    icon: <FaDatabase />,
    description: "A relational database management system",
  },
  {
    title: "Laravel",
    icon: <FaLaravel />,
    description:
      "A PHP framework for building robust and scalable web applications",
  },
  {
    title: "Git",
    icon: <FaGit />,
    description: "A version control system for tracking changes in source code",
  },
  {
    title: "GitHub",
    icon: <FaGithub />,
    description: "A web-based platform for version control and collaboration",
  },
  {
    title: "UML",
    icon: <FaProjectDiagram />,
    description: "A standardized modeling language for software systems",
  },
  {
    title: "Python",
    icon: <FaPython />,
    description:
      "A high-level programming language for general-purpose programming",
  },
];

const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const gridItemVariants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: { scale: 1, opacity: 1 },
  exit: { scale: 0.8, opacity: 0, transition: { duration: 0.2 } },
};

export const Skill = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-10">
      <div className="container mx-auto p-5">
        <motion.h1
          className="text-black items-center text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Skills
        </motion.h1>
        <motion.p
          className="text-black text-lg leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto mb-8 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          I possess a diverse skill set in various technologies that empower
          effective and efficient web development. From design to database
          management and dynamic web application development, I am equipped to
          tackle a wide range of challenges.
        </motion.p>
        
        {/* Adding space below the paragraph */}
        <div className="flex justify-center mt-6 mb-8">
          <div className="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
        </div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          {sections.map((section, index) => (
            <motion.div
              key={index}
              className="bg-white border border-gray-300 p-6 rounded-lg shadow-lg text-gray-800 transition -transform transform hover:scale-105 hover:shadow-2xl hover:bg-blue-50"
              variants={gridItemVariants}
              custom={index * 0.1}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              whileHover={{ scale: 1.05, rotate: 2 }}
            >
              <div className="flex items-center mb-4">
                <div className="text-4xl mr-4 text-blue-600">
                  {section.icon}
                </div>
                <h2 className="text-xl sm:text-2xl font-semibold">{section.title}</h2>
              </div>
              <p className="text-sm text-gray-600">{section.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};