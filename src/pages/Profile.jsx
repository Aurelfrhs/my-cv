import React, { useEffect } from "react";
import { Card } from "flowbite-react";
import { ReactTyped } from "react-typed";
import { BsFacebook, BsGithub, BsLinkedin, BsTwitter, BsInstagram } from "react-icons/bs";
import Image from '../assets/Image.png'; 
import AOS from "aos";
import "aos/dist/aos.css"; 

export const Profile = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="pt-24">
      <Card className="max-w-full m-5 p-10 sm:m-10 sm:p-20 shadow-lg rounded-lg border-3 bg-white dark:bg-gray-800 transition-transform transform hover:scale-105"
      data-aos="fade-down"
      data-aos-easing="linear"
      data-aos-duration="500"
      >
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-col mb-5 md:mb-0">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">
              Hello, I am
            </h2>
            <h1 className="font-bold text-4xl md:text-5xl lg:text-6xl">
              <ReactTyped
                strings={[
                  "Aurel Fristian Ramdhani Hatorangan Simanjuntak",
                  "Backend Developer",
                ]}
                typeSpeed={25}
                backSpeed={50}
                loop
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white"
              />
            </h1>
            <span className="text-xl md:text-2xl text-gray-500 dark:text-gray-400">
              Software Engineer
            </span>
          </div>

          <div data-aos="fade-up" data-aos-delay="400">
            <img
              alt="Profile"
              src={Image}
              className="border-4 border-gray-300 shadow-lg rounded-full transition-transform transform hover:scale-110 max-w-full w-48 sm:w-56 md:w-64"
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center mt-8">
          <div className="flex space-x-6 mb-4 md:mb-0">
            {[{
                icon: <BsFacebook />,
                color: "hover:text-blue-600"
              }, {
                icon: <BsGithub />,
                color: "hover:text-gray-400"
              }, {
                icon: <BsLinkedin />,
                color: "hover:text-blue-500"
              }, {
                icon: <BsTwitter />,
                color: "hover:text-blue-400"
              }, {
                icon: <BsInstagram />,
                color: "hover:text-pink-500"
              }].map((social, index) => (
              <div
                key={index}
                href="#"
                aria-label={social.icon.type.displayName}
                target="_blank"
                rel="noopener noreferrer"
                className={`transition duration-300 transform hover:scale-110 ${social.color}`}
                data-aos="fade-up"
                data-aos-delay={`${index * 100}`}
              >
                {React.cloneElement(social.icon, { className: "text-3xl hover:animate-bounce" })}
              </div>
            ))}
          </div>
        </div>
      </Card>
    </div>
  );
};
