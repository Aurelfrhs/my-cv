import { useState, useEffect } from "react";

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
    <div
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrollPosition > 100 ? "bg-white shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="w-full px-4 sm:px-10 py-4 flex justify-between items-center">
        <div className="text-3xl sm:text-4xl font-bold text-gray-800">
          Portfolio
        </div>
        <button
          className="block md:hidden text-gray-800"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="text-2xl">&#9776;</span>
        </button>
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } md:flex md:space-x-6 text-lg text-gray-700 font-medium`}
        >
          {["Home", "About", "Skills", "Projects", "Contact Me"].map(
            (link, index) => (
              <a
                key={index}
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link);
                }}
                className={`py-2 px-4 rounded-md transition-all duration-300 ease-in-out ${
                  activeLink === link
                    ? "text-blue-600 font-semibold"
                    : "hover:text-blue-600 hover:scale-105"
                }`}
              >
                {link}
              </a>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
