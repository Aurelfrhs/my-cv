import { Navbar } from "flowbite-react";
import { motion } from "framer-motion";

const headerVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0 },
};

const linkVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 },
};

export const Header = () => {
  return (
    <motion.div
      variants={headerVariants}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.5 }}
    >
      <Navbar
        fluid
        rounded
        className="bg-gray-100 fixed top-0 left-0 w-full z-50 py-4"
      >
        <Navbar.Brand href="https://flowbite-react.com">
          <span className="text-3xl font-bold text-gray-800">CV</span>
        </Navbar.Brand>
        <div className="flex md:order-2">
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          {["Home", "About", "Skills", "Projects", "Contact Me"].map((link, index) => {
            const hrefMap = {
              Home: "#profile", // Ensure this matches the section ID
              About: "#about",
              Skills: "#skill", // Ensure this matches the section ID
              Projects: "#project",
              "Contact Me": "#contact",
            };
            return (
              <motion.div
                key={index}
                variants={linkVariants}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Navbar.Link
                  href={hrefMap[link]} // Use the href from the mapping
                  active={link === "Home"}
                  className={`text-gray-700 hover:text-blue-600 transition duration-300 text-lg ${
                    link === "Home" ? "font-semibold text-gray-800" : ""
                  }`}
                >
                  {link}
                </Navbar.Link>
              </motion.div>
            );
          })}
        </Navbar.Collapse>
      </Navbar>
    </motion.div>
  );
};