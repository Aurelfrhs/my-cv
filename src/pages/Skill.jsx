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
import { Box, Card, Typography } from "@mui/material";

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
    description: "A popular front-end framework for building responsive and mobile-first projects",
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
    <Box className="bg-gray-100 min-h-screen p-6 sm:p-10" id="skill">
      <Box className="max-w-screen-xl mx-auto px-4">
        <Typography
          variant="h4"
          component="h1"
          align="center"
          sx={{ fontWeight: 'bold', color: "black", mb: 2 }}
          data-aos="fade-down"
          data-aos-duration="1000"
        >
          Skills
        </Typography>
        <Typography
          align="center"
          sx={{ color: "black", mb: 4 }}
          data-aos="fade-down"
          data-aos-duration="1200"
        >
          I possess a diverse skill set in various technologies that empower
          effective and efficient web development. From design to database
          management and dynamic web application development, I am equipped to
          tackle a wide range of challenges.
        </Typography>

        <Box
          display="flex"
          justifyContent="center"
          mb={4}
          data-aos="fade-down"
          data-aos-duration="1200"
        >
          <Box className="w-16 sm:w-24 h-1 bg-indigo-600 rounded" />
        </Box>

        <Box
          display="grid"
          gridTemplateColumns={{ xs: "repeat(1, 1fr)", sm: "repeat(2, 1fr)", md: "repeat(3, 1fr)", lg: "repeat(4, 1fr)" }}
          gap={6}
        >
          {sections.map((section, index) => (
            <Card
              key={index}
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="1000"
              sx={{
                bgcolor: "gray.800",
                color: "black",
                borderRadius: 2,
                p: 2,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                position: "relative",
                transition: "transform 0.3s",
                '&:hover': { transform: 'scale(1.05)' },
              }}
            >
              <Box display="flex" alignItems="center" justifyContent="center" mb={2}>
                <Box
                  sx={{ fontSize: { xs: '2rem', sm: '2.5rem' }, color: section.color }}
                  aria-label={section.title}
                >
                  {section.icon}
                </Box>
                <Typography variant="h6" sx={{ ml: 1, color: "black" }}>
                  {section.title}
                </Typography>
              </Box>
              <Typography variant="body2" sx={{ color: "gray.400", fontSize: { xs: '0.75rem', sm: '0.875rem' }, mb: 1 }}>
                {section.description}
              </Typography>
            </Card>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Skill;