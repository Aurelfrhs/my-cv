import Aos from "aos";
import { useEffect } from "react";

export const Project = () => {
  useEffect(() => {
    Aos.init(); // Memanggil fungsi init
  }, []);

  const projects = [
    { title: "Title Project 1", tags: ["Tag1", "Tag2", "Tag3"] },
    { title: "Title Project 2", tags: ["Tag1", "Tag2", "Tag3"] },
    { title: "Title Project 3", tags: ["Tag1", "Tag2", "Tag3"] },
    { title: "Title Project 4", tags: ["Tag1", "Tag2", "Tag3"] },
  ];

  return (
    <section className="flex flex-col p-10 pt-20 min-h-screen w-full" id="project">
      <h2 className="font-extrabold text-4xl mb-5 text-center" data-aos="fade-up" data-aos-offset="300" data-aos-easing="ease-in-sine">
        My Projects
      </h2>
      <div className="grid grid-cols-1 gap-10 phone:grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-2">
        {projects.map((project, index) => (
          <div
            key={index}
            className="flex flex-col justify-center items-center bg-Container w-full h-auto p-5 rounded-lg shadow-md transition-transform transform hover:scale-105"
            data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            <h3 className="text-Title text-xl font-bold text-center phone:text-lg laptop:text-xl">{project.title}</h3>
            <div className="flex gap-3 mt-2">
              {project.tags.map((tag, tagIndex) => (
                <span key={tagIndex} className="px-3 bg-Primary rounded-md text-Body font-semibold">
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