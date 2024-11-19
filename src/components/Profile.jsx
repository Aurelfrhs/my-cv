import React, { useEffect, useState } from "react";
import { Card } from "flowbite-react";
import { ReactTyped } from "react-typed";
import {
  BsFacebook,
  BsGithub,
  BsLinkedin,
  BsTwitter,
  BsInstagram,
} from "react-icons/bs";
import Image from '../assets/Image.png';

export const Profile = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const handleExit = () => {
    setIsExiting(true);
    setTimeout(() => {
      setIsVisible(false);
      setIsExiting(false);
    }, 500);
  };

  return (
    <Card className={`max-w-full m-10 p-10 shadow-lg rounded-lg border-3 bg-white dark:bg-gray-800 transition-transform transform hover:scale-105 ${isExiting ? 'animate-slide-out' : isVisible ? 'animate-slide-in' : ''}`}>
      <div className="flex justify-between items-center">
        <div className="flex flex-col">
          <h2 className="text-5xl font-bold text-gray-900 dark:text-white">
            Hello, I am
          </h2>
          <h1 className="font-bold text-5xl">
            <ReactTyped
              strings={[
                "Aurel Fristian Ramdhani Hatorangan Simanjuntak",
                "Backend Developer",
              ]}
              typeSpeed={25}
              backSpeed={50}
              loop
              className="text-3xl font-bold text-gray-900 dark:text-white"
            />
          </h1>
          <span className="text-lg text-gray-500 dark:text-gray-400">
            Software Engineer
          </span>
        </div>
        <div>
          <img
            alt="Photo"
            height="450"
            width="450"
            src={Image}
            className="border-2 border-gray-300 shadow-lg rounded-full transition-transform transform hover:scale-110"
          />
        </div>
      </div>

      <div className="flex mt-4">
        <a
          href="#"
          className="inline-flex items-center px-6 py-3 text-white bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-yellow-500 hover:to-orange-500 rounded-lg shadow-lg transition duration-300 transform hover:scale-105"
          onClick={handleExit} 
        >
          <span className="mr-2">Contact Me</span>
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 12h8m-4-4l4 4-4 4"
            />
          </svg>
        </a>
      </div>

      <div className="flex space-x-4 mt-4">
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
    </Card>
  );
};

export default Profile;