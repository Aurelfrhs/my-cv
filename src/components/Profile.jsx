import React from 'react';
import { Card } from "flowbite-react";
import { ReactTyped } from 'react-typed';
import { BsFacebook, BsGithub, BsLinkedin, BsTwitter, BsInstagram } from "react-icons/bs";
import Image from '../assets/image.png';

export const Profile = () => {
  return (
    <Card className="max-w-full m-6 p-6 shadow-lg rounded-lg border-4 bg-white dark:bg-gray-800">
      <div className="flex justify-between items-center">
        <div className="flex flex-col">
          <h2 className="text-5xl font-bold text-gray-900 dark:text-white">Hello, I am</h2>
          <h1 className="font-bold text-5xl">
            <ReactTyped  
              strings={[
                "Aurel Fristian Ramdhani Hatorangan Simanjuntak",
                "Backend Developer"
              ]}
              typeSpeed={25}
              backSpeed={50}
              loop
              className="text-3xl font-bold text-gray-900 dark:text-white"
            />
          </h1>
          <span className="text-lg text-gray-500 dark:text-gray-400">Software Engineer</span>
        </div>
        <div>
        <img
          alt="Photo"
          height="550"
          width="550" 
          src={Image}
          className="border-2 border-gray-300 shadow-lg"
          />
          </div>
      </div>

      <div className="flex mt-4">
        <a 
          href="#" 
          className="inline-flex items-center px-6 py-3 text-white bg-orange-600 hover:bg-yellow-700 rounded-lg shadow-lg"
        >
          <span className="mr-2">Contact Me</span>
          <svg 
            className="w-5 h-5" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h8m-4-4l4 4-4 4" />
          </svg>
        </a>
      </div>

      <div className="flex space-x-4 mt-4">
        <a href="#" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
          <BsFacebook className="text-xl" />
        </a>
        <a href="#" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
          <BsGithub className="text-xl" />
        </a>
        <a href="#" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
          <BsLinkedin className="text-xl" />
        </a>
        <a href="#" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
          <BsTwitter className="text-xl" />
        </a>
        <a href="#" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
          <BsInstagram className="text-xl" />
        </a>
      </div>
    </Card>
  );
}

export default Profile;