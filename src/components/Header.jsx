import { Navbar } from "flowbite-react";

export const Header = () => {
  return (
    <Navbar
      fluid
      rounded
      className="bg-gray-100 shadow-lg fixed top-0 left-0 w-full z-50 py-4"
    >
      <Navbar.Brand href="https://flowbite-react.com">
        <span className="text-3xl font-bold text-gray-800">CV</span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link
          href="#"
          active
          className="text-gray-800 font-semibold text-lg"
        >
          Home
        </Navbar.Link>
        <Navbar.Link
          href="#"
          className="text-gray-700 hover:text-blue-600 transition duration-300 text-lg"
        >
          About
        </Navbar.Link>
        <Navbar.Link
          href="#"
          className="text-gray-700 hover:text-blue-600 transition duration-300 text-lg"
        >
          Skills
        </Navbar.Link>
        <Navbar.Link
          href="#"
          className="text-gray-700 hover:text-blue-600 transition duration-300 text-lg"
        >
          Award
        </Navbar.Link>
        <Navbar.Link
          href="#"
          className="text-gray-700 hover:text-blue-600 transition duration-300 text-lg"
        >
          My Contact
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;