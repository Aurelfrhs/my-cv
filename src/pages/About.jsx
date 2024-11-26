import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Image from "../assets/Image.png";
import { motion } from "framer-motion"; // Import motion

export const About = () => {
  useEffect(() => {
    Aos.init(); // Initialize AOS
  }, []);

  return (
    <motion.section
      id="about" // Set the correct ID for the section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center justify-center p-10 min-h-screen w-full bg-gray-100"
    >
      <h1
        className="font-extrabold text-4xl mb-10 text-center text-gray-800"
        data-aos="fade-up"
        data-aos-offset="400"
        data-aos-easing="ease-in-sine"
      >
        About Me
      </h1>
      <div className="flex flex-col md:flex-row justify-center items-center w-full gap-10">
        <div
          className="flex flex-col items-center justify-center w-full md:w-1/2"
          data-aos="fade-right"
          data-aos-offset="500"
          data-aos-easing="ease-in-sine"
        >
          <div className="relative mb-5">
            <img
              src={Image}
              alt="Aurel"
              className="border-4 border-gray-300 shadow-2xl transition-transform transform hover:scale-110 max-w-full w-48 sm:w-56 md:w-64"
            />
          </div>
          <p className="text-lg text-center text-gray-600">
            Backend Developer
          </p>
        </div>
        <div
          className="bg-white text-black p-6 rounded-lg shadow-lg flex items-center justify-center w-full md:w-1/2 transition-transform transform hover:scale-105"
          data-aos="fade-left"
          data-aos-offset="400"
          data-aos-easing="ease-in-sine"
        >
          <p className="text-lg text-center">
            Hallo Semua, saya{" "}
            <span className="font-bold text-blue-600">
              Aurel Fristian Ramdhani Hatorangan Simanjuntak
            </span>
            , seorang pelajar SMK dari Bandung, Jawa Barat, yang bercita-cita
            menjadi back-end developer dan mobile developer profesional. Saya
            sangat mencintai dunia desain dan coding, dan selalu bersemangat
            menciptakan karya yang menarik secara visual. Keinginan saya
            adalah menjadi ahli di bidang{" "}
            <span className="font-bold text-blue-600">
              back-end development, mobile development, dan UI/UX
            </span>
            , sehingga dapat menghubungkan kreativitas desain dengan
            pengalaman pengguna yang optimal di berbagai platform.
          </p>
        </div>
      </div>
    </motion.section>
  );
};

export default About;