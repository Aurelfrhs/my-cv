import { useState, useEffect } from "react";
import { Navbar } from "flowbite-react";
import { motion } from "framer-motion";

const headerVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0 },
};

export const Header = () => {
  const [activeLink, setActiveLink] = useState("Home");
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = (link) => {
    setActiveLink(link);
    const hrefMap = {
      Home: "#profile",
      About: "#about",
      Skills: "#skill",
      Projects: "#project",
      "Contact Me": "#contact",
    };

    const targetId = hrefMap[link];
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      setTimeout(() => {
        targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 300);
    }
    setIsOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.div
      variants={headerVariants}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrollPosition > 100 ? "bg-white shadow-lg" : "bg-transparent"
      }`}
    >
      <Navbar fluid rounded className="max-w-7xl w-full px-4 sm:px-10 py-4">
        <Navbar.Brand href="#">
          <span className="text-2xl sm:text-3xl font-bold text-gray-800">
            Portfolio
          </span>
        </Navbar.Brand>
        <Navbar.Toggle onClick={() => setIsOpen(!isOpen)} />
        <Navbar.Collapse className={`${isOpen ? "block" : "hidden"} md:block`}>
          <div className="flex flex-col md:flex-row md:space-x-6">
            {["Home", "About", "Skills", "Projects", "Contact Me"].map(
              (link, index) => (
                <div key={index}>
                  <Navbar.Link
                    href="#"
                    active={activeLink === link}
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick(link);
                    }}
                    className={`text-gray-700 hover:text-blue-600 transition duration-300 text-lg py-2 px-4 rounded-md ${
                      activeLink === link
                        ? "bg-blue-100 text-blue-800 font-semibold shadow-md"
                        : ""
                    }`}
                  >
                    {link}
                  </Navbar.Link>
                </div>
              )
            )}
          </div>
        </Navbar.Collapse>
      </Navbar>
    </motion.div>
  );
};

export default Header;