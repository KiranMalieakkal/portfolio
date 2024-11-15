import { projects } from "../assets/projects";
import ProjectCard from "./ProjectCard";
function Projects() {
  return (
    <>
      <div
        className="h-auto bg-gray-50 flex flex-col items-center "
        id="project"
      >
        <div className="mt-10">
          <p className="text-black font-libre font-extrabold lg:text-[40px] md:text-[40px] text-[24px]">
            Projects
          </p>
        </div>
        <div className="flex lg:flex-wrap lg:flex-row flex-col space-x-10 items-center justify-center mb-10">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Projects;
