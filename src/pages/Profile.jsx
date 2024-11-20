import React from "react";
import { Card } from "flowbite-react";
import { ReactTyped } from "react-typed";
import { BsFacebook, BsGithub, BsLinkedin, BsTwitter, BsInstagram } from "react-icons/bs";
import Image from '../assets/Image.png'; 
import { motion } from "framer-motion";

export const Profile = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  const textVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <div className="pt-24">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={cardVariants}
        transition={{ duration: 0.5 }}
      >
        <Card className="max-w-full m-5 p-5 sm:m-10 sm:p-10 shadow-lg rounded-lg border-3 bg-white dark:bg-gray-800 transition-transform transform hover:scale-105">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <motion.div
              className="flex flex-col mb-5 md:mb-0"
              variants={textVariants}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5, delay: 0.2 }}
            >
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
            </motion.div>
            <motion.div
              variants={imageVariants}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <img
                alt="Profile"
                src={Image}
                className="border-2 border-gray-300 shadow-lg rounded-lg transition-transform transform hover:scale-110 max-w-full w-32 sm:w-40 md:w-48"
              />
            </motion.div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center mt-4">
            <div className="flex space-x-4 mb-4 md:mb-0">
              {[
                { icon: <BsFacebook />, color: "hover:text-blue-600" },
                { icon: <BsGithub />, color: "hover:text-gray-400" },
                { icon: <BsLinkedin />, color: "hover:text-blue-500" },
                { icon: <BsTwitter />, color: "hover:text-blue-400" },
                { icon: <BsInstagram />, color: "hover:text-pink-500" },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href="#"
                  aria-label={social.icon.type.displayName}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`transition duration-300 transform hover:scale-110 ${social.color}`}
                  whileHover={{ scale: 1.2 }} // Scale up on hover
                >
                  {React.cloneElement(social.icon, { className: "text-2xl hover:animate-bounce" })}
                </motion.a>
              ))}
            </div>
          </div>
        </Card>
      </motion.div>
    </div>
 );
};

export default Profile;