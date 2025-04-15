import { Box, Typography, Button, TextField } from "@mui/material";
import { motion } from "framer-motion";
import {
  BsFacebook,
  BsGithub,
  BsLinkedin,
  BsTwitter,
  BsInstagram,
  BsEnvelope,
  BsTelephone,
} from "react-icons/bs";

// Variants untuk animasi
const footerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const sectionVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 },
};

export const Footer = () => {
  return (
    <motion.div
      variants={footerVariants}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.5 }}
    >
      <Box
        sx={{
          backgroundColor: "#1a202c", // Dark gray background
          color: "white",
          py: 4, // Increased vertical padding for better spacing
          px: 2, // Horizontal padding
        }}
      >
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))", // Grid columns for responsiveness
            gap: 4, // Increased gap for better spacing between sections
          }}
        >
          {/* Portfolio Section */}
          <Box>
            <Typography
              variant="h6"
              sx={{ color: "#4f8a8b", fontWeight: "bold", fontSize: "1.25rem" }}
            >
              Portfolio
            </Typography>
            <Typography sx={{ color: "gray", mt: 1, fontSize: "1rem" }}>
              Your one-stop solution for web development and design.
            </Typography>
          </Box>

          {/* Contact Section */}
          <Box>
            <Typography
              variant="h6"
              sx={{ color: "#4f8a8b", fontWeight: "bold", fontSize: "1.25rem" }}
            >
              Contact Us
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", mt: 2 }}>
              <BsEnvelope
                style={{ marginRight: "8px", color: "gray", fontSize: "1.25rem" }}
              />
              <Typography sx={{ color: "gray", fontSize: "1rem" }}>
                info@portfolio.com
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", mt: 2 }}>
              <BsTelephone
                style={{ marginRight: "8px", color: "gray", fontSize: "1.25rem" }}
              />
              <Typography sx={{ color: "gray", fontSize: "1rem" }}>
                +1 234 567 890
              </Typography>
            </Box>
          </Box>

          {/* Social Media Section */}
          <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <Typography
              variant="h6"
              sx={{
                color: "#4f8a8b",
                fontWeight: "bold",
                fontSize: "1.25rem",
                mb: 2,
              }}
            >
              Follow Us
            </Typography>
            <Box sx={{ display: "flex", gap: 3 }}>
              {[BsFacebook, BsGithub, BsLinkedin, BsTwitter, BsInstagram].map(
                (Icon, index) => (
                  <a
                    key={index}
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      color: "gray",
                      fontSize: "1.5rem", // Bigger icons for better visibility
                      transition: "color 0.3s",
                    }}
                    className="hover:text-blue-500"
                  >
                    <Icon />
                  </a>
                )
              )}
            </Box>
          </Box>
        </Box>

        {/* Copyright Section */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mt: 6,
            borderTop: "1px solid #2d3748", // Divider line between content and copyright
            pt: 2,
          }}
        >
          <Typography sx={{ color: "gray", fontSize: "1rem" }}>
            &copy; 2024 Portfolio. All rights reserved.
          </Typography>
        </Box>
      </Box>
    </motion.div>
  );
};
