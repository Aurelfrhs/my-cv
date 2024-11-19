import { Footer as FlowbiteFooter } from "flowbite-react";
import {
  BsFacebook,
  BsGithub,
  BsLinkedin,
  BsTwitter,
  BsInstagram,
} from "react-icons/bs";

export const CustomFooter = () => {
  return (
    <FlowbiteFooter container className="bg-gray-900 text-white">
      <div className="w-full py-10">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div className="flex items-center mb-4 sm:mb-0">
            <span className="text-2xl font-bold text-blue-500">Flowbite</span>{" "}
            {/* Ganti warna di sini */}
          </div>
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <FlowbiteFooter.Title title="About" />
              <FlowbiteFooter.LinkGroup col>
                <FlowbiteFooter.Link
                  href="#"
                  className="hover:underline hover:text-green-400"
                >
                  Flowbite
                </FlowbiteFooter.Link>{" "}
                {/* Ganti warna di sini */}
                <FlowbiteFooter.Link
                  href="#"
                  className="hover:underline hover:text-green-400"
                >
                  Tailwind CSS
                </FlowbiteFooter.Link>{" "}
                {/* Ganti warna di sini */}
              </FlowbiteFooter.LinkGroup>
            </div>
            <div>
              <FlowbiteFooter.Title title="Follow Us" />
              <FlowbiteFooter.LinkGroup col>
                <FlowbiteFooter.Link
                  href="#"
                  className="hover:underline hover:text-green-400"
                >
                  GitHub
                </FlowbiteFooter.Link>{" "}
                {/* Ganti warna di sini */}
                <FlowbiteFooter.Link
                  href="#"
                  className="hover:underline hover:text-green-400"
                >
                  Discord
                </FlowbiteFooter.Link>{" "}
                {/* Ganti warna di sini */}
              </FlowbiteFooter.LinkGroup>
            </div>
            <div>
              <FlowbiteFooter.Title title="Legal" />
              <FlowbiteFooter.LinkGroup col>
                <FlowbiteFooter.Link
                  href="#"
                  className="hover:underline hover:text-green-400"
                >
                  Privacy Policy
                </FlowbiteFooter.Link>{" "}
                {/* Ganti warna di sini */}
                <FlowbiteFooter.Link
                  href="#"
                  className="hover:underline hover:text-green-400"
                >
                  Terms & Conditions
                </FlowbiteFooter.Link>{" "}
                {/* Ganti warna di sini */}
              </FlowbiteFooter.LinkGroup>
            </div>
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
                <span className={`text-3xl ${color} animate-bounce`}>
                  {icon}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </FlowbiteFooter>
  );
};

export default CustomFooter;
