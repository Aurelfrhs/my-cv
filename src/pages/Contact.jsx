import { useEffect, useState } from "react";
import { Instagram } from "iconsax-react";
import { Github, Linkedin } from "lucide-react";
import Aos from "aos";
import "aos/dist/aos.css";
import { Alert, Snackbar, Box, Typography, TextField, Button } from "@mui/material";
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
      <Typography
        variant="h4"
        component="h1"
        align="center"
        sx={{ fontWeight: 'bold', mb: 8, color: "text.primary" }}
        data-aos="fade-up"
        data-aos-duration="300"
      >
        Contact Me
      </Typography>
      <Box className="flex flex-col md:flex-row justify-between items-center gap-10">
        <Box
          data-aos="fade-right"
          data-aos-duration="1000"
          sx={{ flex: 1, bgcolor: 'white', color: 'gray.800', borderRadius: 2, p: 3, boxShadow: 3 }}
        >
          <Typography variant="h6" sx={{ mb: 2 }}>
            Want to learn more? Feel free to contact us using the information below!
          </Typography>
          <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
            aurelfristian10@gmail.com
          </Typography>
        </Box>
        <Box className="flex flex-row gap-6" data-aos="fade-left" data-aos-duration="1000">
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
        </Box>
      </Box>
      <form onSubmit={handleSubmit} className="mt-10" data-aos="fade-up" data-aos-duration="1000">
        <Typography variant="h5" sx={{ mb: 4, color: 'gray.800' }}>
          Send Us a Message
        </Typography>
        {["name", "email", "message"].map((field, index) => (
          <Box className="flex flex-col mb-4" key={index}>
            <Typography variant="body1" sx={{ mb: 1, color: 'gray.600' }}>
              {field.charAt(0).toUpperCase() + field.slice(1)}
            </Typography>
            {field !== "message" ? (
              <TextField
                type={field === "email" ? "email" : "text"}
                id={field}
                name={field}
                value={formData[field]}
                onChange={handleChange}
                required
                variant="outlined"
                fullWidth
                sx={{ borderRadius: 1 }}
              />
            ) : (
              <TextField
                id={field}
                name={field}
                value={formData[field]}
                onChange={handleChange}
                required
                multiline
                rows={4}
                variant="outlined"
                fullWidth
                sx={{ borderRadius: 1 }}
              />
            )}
          </Box>
        ))}
        <Button
          type="submit"
          variant="contained"
          color="primary"
          sx={{ px: 4, py: 2 }}
        >
          Send Message
        </Button>
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