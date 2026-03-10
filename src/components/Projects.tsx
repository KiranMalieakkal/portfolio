import { projects } from "../assets/projects";
import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";

const fadeInAnimation = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: "easeInOut" as const },
  viewport: { once: true },
};

function Projects() {
  return (
    <motion.section
      id="projects"
      className="min-h-screen bg-background flex flex-col items-center justify-center text-text-primary py-20 px-6"
      initial={fadeInAnimation.initial}
      whileInView={fadeInAnimation.whileInView}
      transition={fadeInAnimation.transition}
      viewport={fadeInAnimation.viewport}
    >
      <div className="container mx-auto max-w-6xl">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-4 text-center"
          initial={fadeInAnimation.initial}
          whileInView={fadeInAnimation.whileInView}
          viewport={fadeInAnimation.viewport}
          transition={{ ...fadeInAnimation.transition, delay: 0.2 }}
        >
          Projects
        </motion.h2>
        <motion.div
          className="h-1.5 w-32 bg-accent mx-auto mb-12"
          initial={fadeInAnimation.initial}
          whileInView={fadeInAnimation.whileInView}
          viewport={fadeInAnimation.viewport}
          transition={{ ...fadeInAnimation.transition, delay: 0.4 }}
        />

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.2, delayChildren: 0.6 }}
        >
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}

export default Projects;
