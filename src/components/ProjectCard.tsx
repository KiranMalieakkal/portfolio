export interface Project {
  name: string;
  img_link?: string;
  description: string;
  project_link: string;
  github_link: string;
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <>
      <div className="lg:w-[25%] w-[70%] flex flex-col  items-center mt-10 hover:scale-105 hover:shadow-lg hover:bg-gray-100 transition-all duration-300 ">
        <div className="h-full ">
          <img className="" src={project.img_link} />
        </div>
        <div className="flex flex-col bg-white p-4 w-[90%] -mt-20">
          <div className="flex items-center justify-center h-[45px] text-center ">
            <p className="font-libre text-[20px] font-bold">{project.name}</p>
          </div>
          <div className="m-2 h-[90px]">
            <p className="flex items-center justify-center text-center text-xs">
              {project.description}
            </p>
          </div>
          <div className="flex flex-row items-center justify-center m-1 space-x-2">
            <a
              href={project.project_link}
              className="hover:scale-110 hover:text-gray-700 transition-all duration-300"
              target="_blank"
            >
              <img
                width="30"
                height="30"
                src="https://img.icons8.com/ios-glyphs/30/laptop.png"
                alt="laptop"
              />
            </a>

            <a
              href={project.github_link}
              className="hover:scale-110 hover:text-gray-700 transition-all duration-300"
              target="_blank"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="30"
                height="30"
                viewBox="0 0 50 50"
              >
                <path d="M17.791,46.836C18.502,46.53,19,45.823,19,45v-5.4c0-0.197,0.016-0.402,0.041-0.61C19.027,38.994,19.014,38.997,19,39 c0,0-3,0-3.6,0c-1.5,0-2.8-0.6-3.4-1.8c-0.7-1.3-1-3.5-2.8-4.7C8.9,32.3,9.1,32,9.7,32c0.6,0.1,1.9,0.9,2.7,2c0.9,1.1,1.8,2,3.4,2 c2.487,0,3.82-0.125,4.622-0.555C21.356,34.056,22.649,33,24,33v-0.025c-5.668-0.182-9.289-2.066-10.975-4.975 c-3.665,0.042-6.856,0.405-8.677,0.707c-0.058-0.327-0.108-0.656-0.151-0.987c1.797-0.296,4.843-0.647,8.345-0.714 c-0.112-0.276-0.209-0.559-0.291-0.849c-3.511-0.178-6.541-0.039-8.187,0.097c-0.02-0.332-0.047-0.663-0.051-0.999 c1.649-0.135,4.597-0.27,8.018-0.111c-0.079-0.5-0.13-1.011-0.13-1.543c0-1.7,0.6-3.5,1.7-5c-0.5-1.7-1.2-5.3,0.2-6.6 c2.7,0,4.6,1.3,5.5,2.1C21,13.4,22.9,13,25,13s4,0.4,5.6,1.1c0.9-0.8,2.8-2.1,5.5-2.1c1.5,1.4,0.7,5,0.2,6.6c1.1,1.5,1.7,3.2,1.6,5 c0,0.484-0.045,0.951-0.11,1.409c3.499-0.172,6.527-0.034,8.204,0.102c-0.002,0.337-0.033,0.666-0.051,0.999 c-1.671-0.138-4.775-0.28-8.359-0.089c-0.089,0.336-0.197,0.663-0.325,0.98c3.546,0.046,6.665,0.389,8.548,0.689 c-0.043,0.332-0.093,0.661-0.151,0.987c-1.912-0.306-5.171-0.664-8.879-0.682C35.112,30.873,31.557,32.75,26,32.969V33 c2.6,0,5,3.9,5,6.6V45c0,0.823,0.498,1.53,1.209,1.836C41.37,43.804,48,35.164,48,25C48,12.318,37.683,2,25,2S2,12.318,2,25 C2,35.164,8.63,43.804,17.791,46.836z"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectCard;
