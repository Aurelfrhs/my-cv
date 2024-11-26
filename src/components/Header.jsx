import { useState } from "react";
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
  const [activeLink, setActiveLink] = useState("Home"); // Track the active link

  const handleLinkClick = (link) => {
    setActiveLink(link); // Update the active link
  };

  return (
    <motion.div
      variants={headerVariants}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 w-full z-50"
    >
      <Navbar fluid rounded className="bg-gray-100">
        <Navbar.Brand href="https://flowbite-react.com">
          <span className="text-3xl font-bold text-gray-800">CV</span>
        </Navbar.Brand>
        <div className="flex md:order-2">
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          {["Home", "About", "Skills", "Projects", "Contact Me"].map((link, index) => {
            const hrefMap = {
              Home: "#profile",
              About: "#about",
              Skills: "#skill",
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
                  href={hrefMap[link]}
                  active={activeLink === link} // Check if the link is active
                  onClick={() => handleLinkClick(link)} // Set active link on click
                  className={`text-gray-700 hover:text-blue-600 transition duration-300 text-lg ${
                    activeLink === link ? "text-blue-800 font-semibold" : ""
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

export default Header;