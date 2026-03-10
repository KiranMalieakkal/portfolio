import { motion } from "framer-motion";
import { Work } from "./Experience";

interface WorkGridProps {
  work: Work;
  index: number;
}

function WorkGrid({ work, index }: WorkGridProps) {
  const isOdd = index % 2 !== 0;

  const cardVariants = {
    initial: {
      opacity: 0,
      x: isOdd ? 100 : -100,
    },
    whileInView: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeInOut" as const,
      },
    },
  };

  return (
    <motion.div
      className="relative flex items-center justify-center"
      variants={cardVariants}
    >
      <div
        className={`w-full lg:w-1/2 p-6 bg-card rounded-lg shadow-lg ${
          isOdd ? "lg:ml-[50%]" : "lg:mr-[50%]"
        }`}
      >
        <div
          className={`absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-accent rounded-full ${
            isOdd ? "left-[-8px] lg:left-[-1.7%]" : "right-[-8px] lg:right-[-1.7%]"
          }`}
        />

        <p className="text-sm text-accent mb-2 font-mono">{work.period}</p>
        <h3 className="text-xl font-bold text-text-primary mb-3">
          {work.position}
        </h3>
        <div className="text-text-secondary space-y-3 mb-4">
          {work.descriptions.map((description, i) => (
            <p key={i} className="text-sm leading-relaxed">
              {description}
            </p>
          ))}
        </div>
        <div className="flex flex-wrap gap-2">
          {work.tech.map((tech, i) => (
            <span
              key={i}
              className="bg-accent/10 text-accent text-xs font-semibold px-3 py-1 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default WorkGrid;
