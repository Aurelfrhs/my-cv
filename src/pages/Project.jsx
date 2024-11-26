import Aos from "aos";
import { useEffect } from "react";

export const Project = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  const projects = [
    { title: "Title Project 1", tags: ["Tag1", "Tag2", "Tag3"], imageUrl: "https://via.placeholder.com/300" },
    { title: "Title Project 2", tags: ["Tag1", "Tag2", "Tag3"], imageUrl: "https://via.placeholder.com/300" },
    { title: "Title Project 3", tags: ["Tag1", "Tag2", "Tag3"], imageUrl: "https://via.placeholder.com/300" },
    { title: "Title Project 4", tags: ["Tag1", "Tag2", "Tag3"], imageUrl: "https://via.placeholder.com/300" },
  ];

  return (
    <section className="flex flex-col p-10 pt-15 min-h-screen w-full" id="project">
      <h2 className="font-extrabold text-4xl mb-10 mt-20 text-center text-gray-800" data-aos="fade-up" data-aos-offset="300" data-aos-easing="ease-in-sine">
        My Projects
      </h2>
      <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
        {projects.map((project, index) => (
          <div
            key={index}
            className="flex flex-col justify-center items-center bg-white w-full h-auto p-5 rounded-lg shadow-md transition-transform transform hover:scale-105"
            data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            <img src={project.imageUrl} alt={project.title} className="w-full h-48 object-cover rounded-md mb-3" />
            <h3 className="text-gray-800 text-xl font-bold text-center">{project.title}</h3>
            <div className="flex gap-3 mt-2 flex-wrap justify-center">
              {project.tags.map((tag, tagIndex) => (
                <span key={tagIndex} className="px-3 py-1 bg-blue-500 text-white rounded-md font-semibold">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Project;