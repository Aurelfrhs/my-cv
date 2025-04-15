import React, { useEffect } from "react";
import { Card, Typography, Box, IconButton } from "@mui/material";
import { ReactTyped } from "react-typed";
import { BsFacebook, BsGithub, BsLinkedin, BsTwitter, BsInstagram } from "react-icons/bs";
import Image from "../assets/Image.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";

export const Profile = () => {
  useEffect(() => {
    AOS.init({ duration: 500, easing: "ease-in-out" });
  }, []);

  const socialIcons = [
    { icon: <BsFacebook />, color: "#3b5998", label: "Facebook" },
    { icon: <BsGithub />, color: "#333", label: "GitHub" },
    { icon: <BsLinkedin />, color: "#0077b5", label: "LinkedIn" },
    { icon: <BsTwitter />, color: "#1DA1F2", label: "Twitter" },
    { icon: <BsInstagram />, color: "#E1306C", label: "Instagram" }
  ];

  return (
    <Box id="profile" sx={{ pt: 10, px: { xs: 2, sm: 4, md: 10 }, position: "relative" }}>
      <Card 
        sx={{ 
          maxWidth: "100%", 
          mx: "auto", 
          p: { xs: 3, sm: 5, md: 10 }, 
          bgcolor: "rgba(255, 255, 255, 0.4)", // Transparan
          backdropFilter: "blur(10px)", // Efek blur di belakang
          borderRadius: "16px", // Sudut melengkung
          transition: "transform 0.3s ease-in-out", // Transisi saat hover
          '&:hover': { transform: "scale(1.02)" },
          boxShadow: "none", // Menghapus shadow
        }}
        data-aos="fade-up"
      >
        <Box display="flex" flexDirection={{ xs: "column", md: "row" }} alignItems="center" justifyContent="space-between">
          <Box textAlign={{ xs: "center", md: "left" }} mb={{ xs: 5, md: 0 }}>
            <Typography variant="h5" sx={{ fontWeight: "bold", color: "text.primary" }}>
              Hello, I am
            </Typography>
            <Typography variant="h3" sx={{ fontWeight: "bold" }}>
              <ReactTyped
                strings={["Aurel Fristian Ramdhani Simanjuntak", "Front End Developer"]}
                typeSpeed={50}
                backSpeed={50}
                loop
              />
            </Typography>
            <Typography variant="h6" sx={{ color: "text.secondary", mt: 2 }}>
              Software Engineer
            </Typography>
          </Box>
          <Box flexShrink={0} data-aos="fade-up" data-aos-delay="200">
            <motion.img
              alt="Aurel Fristian"
              src={Image}
              width="300"
              style={{ 
                transition: "transform 0.3s", 
                borderRadius: "50%", // Gambar bulat
              }}
              whileHover={{ scale: 1.1 }}
            />
          </Box>
        </Box>
        {/* Social Media Section */}
        <Box display="flex" flexWrap="wrap" justifyContent={{ xs: "center", md: "flex-start" }} alignItems="center" mt={5} gap={2}>
          {socialIcons.map((social, index) => (
            <motion.div
              key={index}
              aria-label={social.label}
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.2, transition: { type: "spring", stiffness: 300, damping: 10 } }}
            >
              <IconButton
                sx={{ 
                  color: social.color, 
                  transition: "transform 0.2s",
                  backgroundColor: "rgba(255, 255, 255, 0.5)", // Transparan dengan efek blur
                  backdropFilter: "blur(5px)", // Efek blur pada background
                  borderRadius: "50%", // Ikon bulat
                  '&:hover': { backgroundColor: "rgba(255, 255, 255, 0.7)" },
                  boxShadow: "none", // Menghapus shadow pada ikon
                }}
              >
                {React.cloneElement(social.icon, { size: "1.8em" })}
              </IconButton>
            </motion.div>
          ))}
        </Box>
      </Card>
    </Box>
  );
};

export default Profile;
