import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Image from "../assets/Image.png";
import { motion } from "framer-motion";
import { Box, Typography, Paper } from "@mui/material";

export const About = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "2.5rem",
        minHeight: "100vh",
        width: "100%",
        backgroundColor: "#F7FAFC"
      }}
    >
      <Typography
        variant="h4"
        component="h1"
        sx={{ fontWeight: 'bold', mb: 3, textAlign: 'center', color: '#2D3748' }}
        data-aos="fade-up"
        data-aos-offset="400"
        data-aos-easing="ease-in-sine"
      >
        About Me
      </Typography>
      <Box display="flex" flexDirection={{ xs: "column", md: "row" }} justifyContent="center" alignItems="center" width="100%" gap={3}>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          width={{ xs: "100%", md: "50%" }}
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        >
          <Box position="relative" mb={2}>
            <img
              src={Image}
              alt="Aurel"
              style={{
                border: '4px solid #D1D5DB',
                boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                transition: 'transform 0.3s',
                maxWidth: '100%',
                width: '12rem',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.1)')}
              onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
            />
          </Box>
          <Typography variant="body1" sx={{ textAlign: 'center', color: '#4A5568' }}>
            Backend Developer
          </Typography>
        </Box>
        <Paper
          elevation={3}
          sx={{
            bgcolor: 'white',
            color: 'black',
            p: 3,
            borderRadius: '8px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: { xs: "100%", md: "50%" },
            transition: 'transform 0.3s',
            '&:hover': { transform: 'scale(1.05)' },
          }}
          data-aos="fade-left"
          data-aos-offset="400"
          data-aos-easing="ease-in-sine"
        >
          <Typography variant="body1" sx={{ textAlign: 'center' }}>
            Hallo Semua, saya{" "}
            <span style={{ fontWeight: 'bold', color: '#3182CE' }}>
              Aurel Fristian Ramdhani Hatorangan Simanjuntak
            </span>
            , seorang pelajar SMK dari Bandung, Jawa Barat, yang bercita-cita
            menjadi Front-End developer dan mobile developer profesional. Saya
            sangat mencintai dunia desain dan coding, dan selalu bersemangat
            menciptakan karya yang menarik secara visual. Keinginan saya
            adalah menjadi ahli di bidang{" "}
            <span style={{ fontWeight: 'bold', color: '#3182CE' }}>
              Front-End development, mobile development, dan UI/UX
            </span>
            , sehingga dapat menghubungkan kreativitas desain dengan
            pengalaman pengguna yang optimal di berbagai platform.
          </Typography>
        </Paper>
      </Box>
    </motion.section>
  );
};

export default About;