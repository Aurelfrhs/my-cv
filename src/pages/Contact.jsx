import { useEffect, useState } from "react";
import { Instagram } from "iconsax-react";
import { Github, Linkedin } from "lucide-react";
import Aos from "aos";
import "aos/dist/aos.css";
import { Alert, Snackbar } from "@mui/material";
import { motion } from "framer-motion";

const socialLinks = [
  {
    href: "https://www.instagram.com/relramdhan10",
    icon: <Instagram size={36} className="text-gray-600 dark:text-gray-400" />,
    label: "Instagram",
  },
  {
    href: "https://github.com/lerr-5534",
    icon: <Github size={36} className="text-gray-600 dark:text-gray-400" />,
    label: "GitHub",
  },
  {
    href: "https://www.linkedin.com/in/",
    icon: <Linkedin size={36} className="text-gray-600 dark:text-gray-400" />,
    label: "LinkedIn",
  },
];

export const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [alertSeverity, setAlertSeverity] = useState("success");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(formData.email)) {
      setAlertMessage("Email anda salah");
      setAlertSeverity("error");
      setOpenSnackbar(true);
      return;
    }

    // Simulate form submission
    console.log("Form submitted:", formData);
    setAlertMessage("Terkirim! Tunggu balasannya!");
    setAlertSeverity("success");
    setOpenSnackbar(true);
    setFormData({ name: "", email: "", message: "" });
  };

  const handleCloseSnackbar = () => setOpenSnackbar(false);

  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col p-8 pt-20 bg-gray-100"
    >
      <h1 className="font-extrabold text-5xl mb-8 text-center text-gray-800" data-aos="fade-up" data-aos-duration="300">
        Contact Me
      </h1>
      <div className="flex flex-col md:flex-row justify-between items-center gap-10">
        <div data-aos="fade-right" data-aos-duration="1000" className="flex-1 bg-white text-gray-800 rounded-lg p-6 shadow-lg">
          <h3 className="text-2xl mb-4">Want to learn more? Feel free to contact us using the information below!</h3>
          <h4 className="font-semibold mb-4">aurelfristian10@gmail.com</h4>
        </div>
        <div className="flex flex-row gap-6" data-aos="fade-left" data-aos-duration="1000">
          {socialLinks.map(({ href, icon, label }, index) => (
            <a
              key={index}
              className="p-5 transition-all duration-300 transform hover:scale-110 hover:bg-gray-200 rounded-md"
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              data-aos="zoom-in"
              data-aos-duration="1000"
              data-aos-delay={index * 100}
            >
              {icon}
            </a>
          ))}
        </div>
      </div>
      <form onSubmit={handleSubmit} className="mt-10 p-6 bg-white rounded-lg shadow-md" data-aos="fade-up" data-aos-duration="1000">
        <h2 className="text-2xl mb-4 text-gray-800">Send Us a Message</h2>
        {["name", "email", "message"].map((field, index) => (
          <div className="flex flex-col mb-4" key={index}>
            <label className="mb-2 text-gray-600" htmlFor={field}>
              {field.charAt(0).toUpperCase() + field.slice(1)}
            </label>
            {field !== "message" ? (
              <input
                type={field === "email" ? "email" : "text"}
                id={field}
                name={field}
                value={formData[field]}
                onChange={handleChange}
                required
                className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
              />
            ) : (
              <textarea
                id={field}
                name={field}
                value={formData[field]}
                onChange={handleChange}
                required
                rows="4"
                className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
              />
            )}
          </div>
        ))}
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300"
        >
          Send Message
        </button>
      </form>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={alertSeverity}
          sx={{ width: "100%" }}
        >
          {alertMessage}
        </Alert>
      </Snackbar>
    </motion.section>
  );
};

export default Contact;