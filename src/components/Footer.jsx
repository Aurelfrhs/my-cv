import { Footer as FlowbiteFooter } from "flowbite-react";
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
import { Box, Typography, Button, TextField } from "@mui/material";

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
      <FlowbiteFooter container className="bg-gray-900 text-white">
        <Box className="w-full py-6">
          <Box className="grid w-full gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <Box className="flex flex-col mb-4 sm:mb-0">
              <Typography variant="h6" className="text-blue-500 font-bold">
                Portofolio
              </Typography>
              <Typography className="text-gray-400 mt-1">
                Your one-stop solution for web development and design.
              </Typography>
            </Box>
            <Box className="grid grid-cols-1 gap-4">
              {["About", "Follow Us", "Legal"].map((title, index) => (
                <motion.div
                  key={index}
                  variants={sectionVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  <FlowbiteFooter.Title title={title} />
                  <FlowbiteFooter.LinkGroup col>
                    {title === "About" && (
                      <>
                        <FlowbiteFooter.Link href="#" className="hover:underline hover:text-green-400">Flowbite</FlowbiteFooter.Link>
                        <FlowbiteFooter.Link href="#" className="hover:underline hover:text-green-400">Tailwind CSS</FlowbiteFooter.Link>
                      </>
                    )}
                    {title === "Follow Us" && (
                      <>
                        <FlowbiteFooter.Link href="#" className="hover:underline hover:text-green-400">GitHub</FlowbiteFooter.Link>
                        <FlowbiteFooter.Link href="#" className="hover:underline hover:text-green-400">Discord</FlowbiteFooter.Link>
                      </>
                    )}
                    {title === "Legal" && (
                      <>
                        <FlowbiteFooter.Link href="#" className="hover:underline hover:text-green-400">Privacy Policy</FlowbiteFooter.Link>
                        <FlowbiteFooter.Link href="#" className="hover:underline hover:text-green-400">Terms & Conditions</FlowbiteFooter.Link>
                      </>
                    )}
                  </FlowbiteFooter.LinkGroup>
                </motion.div>
              ))}
            </Box>
            <Box className="flex flex-col mb-4 sm:mb-0">
              <FlowbiteFooter.Title title="Contact Us" />
              <Box className="flex items-center mt-1">
                <BsEnvelope className="text-gray-400 mr-1" />
                <Typography className="text-gray-400 text-sm">info@portofolio.com</Typography>
              </Box>
              <Box className="flex items-center mt-1">
                <BsTelephone className="text-gray-400 mr-1" />
                <Typography className="text-gray-400 text-sm">+1 234 567 890</Typography>
              </Box>
            </Box>
            <Box className="flex flex-col mb-4 sm:mb-0">
              <FlowbiteFooter.Title title="Subscribe" />
              <Typography className="text-gray-400 mt-1 text-sm">Stay updated with our latest news.</Typography>
              <form className="flex mt-1">
                <TextField
                  type="email"
                  placeholder="Your email"
                  variant="outlined"
                  size="small"
                  className="rounded-l-md border border-gray-600 bg-white text-black" 
                  required
                />
                <Button
                  type="submit"
                  variant="contained"
                  className="rounded-r-md bg-white text-black hover:bg -blue-600 transition duration-300" 
                >
                  Subscribe
                </Button>
              </form>
            </Box>
          </Box>
          <FlowbiteFooter.Divider className="border-gray-700" />
          <Box className="w-full flex flex-col sm:flex-row sm:items-center sm:justify-between mt-4">
            <FlowbiteFooter.Copyright href="#" by="Portofolio" year={2024} />
            <Box className="mt-4 flex space-x-4 sm:mt-0 sm:justify-center">
              {[
                {
                  icon: <BsFacebook />,
                  label: "Facebook",
                  color: "hover:text-blue-600",
                },
                {
                  icon: <BsGithub />,
                  label: "GitHub",
                  color: "hover:text-gray-400",
                },
                {
                  icon: <BsLinkedin />,
                  label: "LinkedIn",
                  color: "hover:text-blue-500",
                },
                {
                  icon: <BsTwitter />,
                  label: "Twitter",
                  color: "hover:text-blue-400",
                },
                {
                  icon: <BsInstagram />,
                  label: "Instagram",
                  color: "hover:text-pink-500",
                },
              ].map(({ icon, label, color }, index) => (
                <a
                  key={index}
                  href="#"
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`transition duration-300 ease-in-out transform hover:scale-110 ${color} flex items-center`}
                >
                  <motion.span
                    className={`text-2xl ${color} animate-bounce`}
                  >
                    {icon}
                  </motion.span>
                </a>
              ))}
            </Box>
          </Box>
        </Box>
      </FlowbiteFooter>
    </motion.div>
  );
};