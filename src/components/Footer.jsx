import { Footer as FlowbiteFooter } from "flowbite-react";
import { motion } from "framer-motion";
import {
  BsFacebook,
  BsGithub,
  BsLinkedin,
  BsTwitter,
  BsInstagram,
} from "react-icons/bs";

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
        <div className="w-full py-10">
          <div className="grid w-full justify-between gap-8 sm:flex sm:justify-between md:grid-cols-1">
            <div className="flex items-center mb-4 sm:mb-0">
              <span className="text-2xl font-bold text-blue-500">Flowbite</span>
            </div>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
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
                        <FlowbiteFooter.Link
                          href="#"
                          className="hover:underline hover:text-green-400"
                        >
                          Flowbite
                        </FlowbiteFooter.Link>
                        <FlowbiteFooter.Link
                          href="#"
                          className="hover:underline hover:text-green-400"
                        >
                          Tailwind CSS
                        </FlowbiteFooter.Link>
                      </>
                    )}
                    {title === "Follow Us" && (
                      <>
                        <FlowbiteFooter.Link
                          href="#"
                          className="hover:underline hover:text-green-400"
                        >
                          GitHub
                        </FlowbiteFooter.Link>
                        <FlowbiteFooter.Link
                          href="#"
                          className="hover:underline hover:text-green-400"
                        >
                          Discord
                        </FlowbiteFooter.Link>
                      </>
                    )}
                    {title === "Legal" && (
                      <>
                        <FlowbiteFooter.Link
                          href="#"
                          className="hover:underline hover:text-green-400"
                        >
                          Privacy Policy
                        </FlowbiteFooter.Link>
                        <FlowbiteFooter.Link
                          href="#"
                          className="hover:underline hover:text-green-400"
                        >
                          Terms & Conditions
                        </FlowbiteFooter.Link>
                      </>
                    )}
                  </FlowbiteFooter.LinkGroup>
                </motion.div>
              ))}
            </div>
          </div>
          <FlowbiteFooter.Divider className="border-gray-700" />
          <div className="w-full flex flex-col sm:flex-row sm:items-center sm:justify-between mt-4">
            <FlowbiteFooter.Copyright href="#" by="Flowbite™" year={2022} />
            <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
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
                  label: " Instagram",
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
                    className={`text-3xl ${color} animate-bounce`}
                    whileHover={{ scale: 1.2 }}
                  >
                    {icon}
                  </motion.span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </FlowbiteFooter>
    </motion.div>
  );
};