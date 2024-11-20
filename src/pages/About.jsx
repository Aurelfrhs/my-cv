import React, { useEffect, useState } from "react";
import { Card } from "flowbite-react";
import '../index.css';
import Image from '../assets/Image.png';

export const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100); 

    return () => clearTimeout(timer);
  }, []);

  return (
    <Card className={`max-w-4xl m-10 p-10 bg-white dark:bg-gray-800 transition-transform transform hover:scale-105 ${isVisible ? 'animate-slide-in-from-right' : ''}`}>
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="flex flex-col ml-4">
          <h2 className="text-6xl font-bold text-gray-900 dark:text-white">
            Tentang Saya
          </h2>
          <p className="text-xl text-gray-500 dark:text-gray-400 mt-4">
            Halo! Nama saya <strong>[Nama Anda]</strong>, seorang{" "}
            <strong>[profesi atau hobi]</strong>.
          </p>
          <p className="text-xl text-gray-500 dark:text-gray-400 mt-4">
            Saya memiliki minat dalam{" "}
            <strong>[minat atau bidang yang Anda sukai]</strong>. Saya senang
            berbagi pengetahuan dan pengalaman saya, serta selalu belajar
            hal-hal baru.
          </p>
          <div className="flex mt-6">
            <button className="bg-blue-500 text-white px-8 py-3 rounded-full hover:bg-blue-600 transition duration-200 text-lg">
              Hubungi Saya
            </button>
          </div>
        </div>
        <div className="mt-6 md:mt-0 ml-auto"> 
        </div>
        <img
          src={Image}
          alt="Profil"
          className={`border-2 border-gray-300 shadow-lg rounded-full transition-transform transform hover:scale-110 w-48 h-48 ${isVisible ? 'animate-slide-in-from-left' : ''}`}
        />
      </div>
    </Card>
  );
};

export default About;