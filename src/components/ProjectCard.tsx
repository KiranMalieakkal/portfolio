import { motion } from "framer-motion";

export interface Project {
  name: string;
  img_link?: string;
  description: string;
  project_link: string;
  github_link: string;
}

const cardVariants = {
  initial: { opacity: 0, y: 50, scale: 0.95 },
  whileInView: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut" as const,
    },
  },
};

function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div
      variants={cardVariants}
      className="bg-card rounded-lg shadow-lg overflow-hidden flex flex-col group transition-all duration-300 hover:shadow-accent hover:-translate-y-2"
    >
      <div className="relative h-64 overflow-hidden">
        <img
          className="absolute top-0 left-0 w-full h-full object-contain object-center transition-transform duration-500 ease-in-out group-hover:scale-110"
          src={project.img_link || "https://placehold.co/600x400/1e2f3f/eaeaea?text=Project"}
          alt={`Screenshot of ${project.name}`}
        />
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-text-primary mb-3">{project.name}</h3>
        <p className="text-text-secondary text-sm flex-grow mb-6">{project.description}</p>

        <div className="mt-auto flex justify-between items-center">
          <div className="flex flex-wrap gap-2">
            {/* Tech tags could go here if available in the data */}
          </div>
          <div className="flex space-x-4">
            <a
              href={project.github_link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary hover:text-accent transition-colors duration-300"
              aria-label={`GitHub repository for ${project.name}`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
            </a>
            <a
              href={project.project_link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary hover:text-accent transition-colors duration-300"
              aria-label={`Live demo of ${project.name}`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default ProjectCard;
