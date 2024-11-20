import React from "react";
import { Card } from "flowbite-react";
import { ReactTyped } from "react-typed"; // Ensure this is imported correctly
import { BsFacebook, BsGithub, BsLinkedin, BsTwitter, BsInstagram } from "react-icons/bs";
import Image from '../assets/image.png'; // Adjust the path as necessary

export const Profile = () => {
  return (
    <div className="pt-24"> {/* Add padding-top to avoid navbar overlap */}
      <Card className="max-w-full m-5 p-5 sm:m-10 sm:p-10 shadow-lg rounded-lg border-3 bg-white dark:bg-gray-800 transition-transform transform hover:scale-105">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-col mb-5 md:mb-0">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white">
              Hello, I am
            </h2>
            <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl">
              <ReactTyped
                strings={[
                  "Aurel Fristian Ramdhani Hatorangan Simanjuntak",
                  "Backend Developer",
                ]}
                typeSpeed={25}
                backSpeed={50}
                loop
                className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white"
              />
            </h1>
            <span className="text-lg md:text-xl text-gray-500 dark:text-gray-400">
              Software Engineer
            </span>
          </div>
          <div className="flex">
            <img
              alt="Profile"
              src={Image}
              className="border-2 border-gray-300 shadow-lg rounded-lg transition-transform transform hover:scale-110 max-w-full w-32 sm:w-40 md:w-48"
            />
          </div>
        </div>

        {/* Flex Container for Icons and Button */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-4">
          {/* Social Media Icons on the Left */}
          <div className="flex space-x-4 mb-4 md:mb-0">
            <a
              href="#"
              aria-label="Facebook"
              target="_blank"
              rel="noopener noreferrer"
              className="transition duration-300 transform hover:scale-110 hover:text-blue-600"
            >
              <BsFacebook className="text-2xl hover:animate-bounce" />
            </a>
            <a
              href="#"
              aria-label="GitHub"
              target="_blank"
              rel="noopener noreferrer"
              className="transition duration-300 transform hover:scale-110 hover:text-gray-400"
            >
              <BsGithub className="text-2xl hover:animate-bounce" />
            </a>
            <a
              href="#"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
              className="transition duration-300 transform hover:scale-110 hover:text-blue-500"
            >
              <BsLinkedin className="text-2xl hover:animate-bounce" />
            </a>
            <a
              href="#"
              aria-label="Twitter"
              target="_blank"
              rel="noopener noreferrer"
              className="transition duration-300 transform hover:scale-110 hover:text-blue-400"
            >
              <BsTwitter className="text-2xl hover:animate-bounce" />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              target="_blank"
              rel="noopener noreferrer"
              className="transition duration-300 transform hover:scale-110 hover:text-pink-500"
            >
              <BsInstagram className="text-2xl hover:animate-bounce" />
            </a>
          </div>

          {/* Contact Me Button on the Right */}
          <a
            href="#"
            className="inline-flex items-center px-6 py-3 text-white bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-yellow-500 hover:to-orange-500 rounded-lg shadow-lg transition duration-300 transform hover:scale-105 w-32 sm:w-40 md:w-40"
          >
            <span className="mr-2">Contact Me</span>
          </a>
        </div>
      </Card>
    </div>
  );
};

export default Profile;