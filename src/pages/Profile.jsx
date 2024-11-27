import React, { useEffect } from "react";
import { Card, Typography, Box, IconButton } from "@mui/material";
import { ReactTyped } from "react-typed";
import { BsFacebook, BsGithub, BsLinkedin, BsTwitter, BsInstagram } from "react-icons/bs";
import Image from '../assets/Image.png'; 
import AOS from "aos";
import "aos/dist/aos.css"; 
import { motion } from "framer-motion";

export const Profile = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Box id="profile" sx={{ pt: 10, px: 2, sm: { px: 4 }, md: { px: 10 } }}>
      <Card 
        sx={{ 
          maxWidth: "100%", 
          mx: "auto", 
          p: { xs: 3, sm: 5, md: 10 }, 
          boxShadow: 24, 
          border: 2, 
          borderColor: "gray.200", 
          bgcolor: "white", 
          '&:hover': { transform: 'scale(1.02)' },
          transition: 'transform 0.3s ease-in-out'
        }}
        data-aos="fade-up" 
        data-aos-easing="linear"
        data-aos-duration="500"
      >
        <Box display="flex" flexDirection={{ xs: "column", md: "row" }} alignItems="center" justifyContent="space-between">
          <Box textAlign={{ xs: "center", md: "left" }} mb={{ xs: 5, md: 0 }}>
            <Typography variant="h5" sx={{ fontWeight: 'bold', color: "text.primary" }}>
              Hello, I am
            </Typography>
            <Typography variant="h3" sx={{ fontWeight: 'bold' }}>
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
            </Typography>
            <Typography variant="h6" sx={{ color: "text.secondary", mt: 2 }}>
              Software Engineer
            </Typography>
          </Box>

          <Box flexShrink={0} data-aos="fade-up" data-aos-delay="200">
            <img
              alt="Aurel Fristian Ramdhani Hatorangan Simanjuntak"
              src={Image}
              style={{ 
                border: '4px solid #ccc', 
                boxShadow: '0 4px 20px rgba(0,0,0,0.1)', 
                transition: 'transform 0.3s' 
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.1)')}
              onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
              width="200"
            />
          </Box>
        </Box>

        {/* Social Media Section */}
        <Box display="flex" flexWrap="wrap" justifyContent={{ xs: "center", md: "flex-start" }} alignItems="center" mt={5} gap={4}>
          {[
            { icon: <BsFacebook />, color: "primary.main", label: "Facebook" },
            { icon: <BsGithub />, color: "grey.400", label: "GitHub" },
            { icon: <BsLinkedin />, color: "info.main", label: "LinkedIn" },
            { icon: <BsTwitter />, color: "info.main", label: "Twitter" },
            { icon: <BsInstagram />, color: "error.main", label: "Instagram" }
          ].map((social, index) => (
            <motion.div
              key={index}
              aria-label={social.label}
              initial={{ scale: 1 }}
              whileHover={{ 
                scale: 1.2,
                transition: { type: "spring", stiffness: 300, damping: 10 }
              }}
              data-aos="fade-up" 
              data-aos-delay={`${index * 100}`}
            >
              <IconButton
                sx={{
                  color: social.color,
                  '&:hover': { transform: 'scale(1.1)' },
                  transition: 'transform 0.2s'
                }} 
              >
                {React.cloneElement(social.icon, { className: "text-3xl sm:text-4xl" })}
              </IconButton>
            </motion.div>
          ))}
        </Box>
      </Card>
    </Box>
  );
};

export default Profile;