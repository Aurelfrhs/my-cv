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
    <div className="pt-10 px-4 sm:px-10" id="profile">
      <Card 
        className="max-w-full mx-auto p-5 sm:p-10 md:p-16 lg:p-20 shadow-2xl rounded-xl border-2 border-gray-200 bg-white dark:bg-gray-800 transition-transform transform hover:scale-105"
        data-aos="fade-up" 
        data-aos-easing="linear"
        data-aos-duration="500"
      >
        {/* Profil Section */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between">
          <div className="text-center lg:text-left mb-8 lg:mb-0">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 dark:text-white">
              Hello, I am
            </h2>
            <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
              <ReactTyped
                strings={[
                  "Aurel Fristian Ramdhani Hatorangan Simanjuntak",
                  "Backend Developer",
                ]}
                typeSpeed={25}
                backSpeed={50}
                loop
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 dark:text-white"
              />
            </h1>
            <span className="block text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-400 mt-3">
              Software Engineer
            </span>
          </div>

          <div className="flex-shrink-0" data-aos="fade-up" data-aos-delay="200">
            <img
              alt="Aurel Fristian Ramdhani Hatorangan Simanjuntak"
              src={Image}
              className="border-4 border-gray-300 shadow-2xl transition-transform transform hover:scale-110 rounded-full w-32 sm:w-40 md:w-48 lg:w-56"
            />
          </div>
        </div>

        {/* Social Media Section */}
        <div className="flex flex-wrap justify-center lg:justify-start items-center mt-10 gap-6">
          {[{
              icon: <BsFacebook />,
              color: "hover:text-blue-600",
              label: "Facebook"
            }, {
              icon: <BsGithub />,
              color: "hover:text-gray-400",
              label: "GitHub"
            }, {
              icon: <BsLinkedin />,
              color: "hover:text-blue-500",
              label: "LinkedIn"
            }, {
              icon: <BsTwitter />,
              color: "hover:text-blue-400",
              label: "Twitter"
            }, {
              icon: <BsInstagram />,
              color: "hover:text-pink-500",
              label: "Instagram"
            }].map((social, index) => (
            <div
              key={index}
              aria-label={social.label}
              className={`transition duration-300 transform hover:scale-125 ${social.color}`} 
              data-aos="fade-up" 
              data-aos-delay={`${index * 100}`}
            >
              {React.cloneElement(social.icon, { className: "text-3xl sm:text-4xl hover:animate-bounce" })}
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default Profile;
