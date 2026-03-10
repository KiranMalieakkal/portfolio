import WorkGrid from "./WorkGrid";
import { motion } from "framer-motion";

export interface Work {
  period: string;
  position: string;
  descriptions: string[];
  tech: string[];
}

const fadeInAnimation = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: "easeInOut" as const },
  viewport: { once: true },
};

function Experience({ works }: { works: Work[] }) {
  const handleShowResume = () => {
    window.open("/Resume.pdf", "_blank");
  };

  return (
    <motion.section
      id="experience"
      className="min-h-screen bg-background flex flex-col items-center justify-center text-text-primary py-20 px-6"
      initial={fadeInAnimation.initial}
      whileInView={fadeInAnimation.whileInView}
      transition={fadeInAnimation.transition}
      viewport={fadeInAnimation.viewport}
    >
      <div className="container mx-auto max-w-4xl">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-4 text-center"
          initial={fadeInAnimation.initial}
          whileInView={fadeInAnimation.whileInView}
          viewport={fadeInAnimation.viewport}
          transition={{ ...fadeInAnimation.transition, delay: 0.2 }}
        >
          Experience
        </motion.h2>
        <motion.div
          className="h-1.5 w-32 bg-accent mx-auto mb-12"
          initial={fadeInAnimation.initial}
          whileInView={fadeInAnimation.whileInView}
          viewport={fadeInAnimation.viewport}
          transition={{ ...fadeInAnimation.transition, delay: 0.4 }}
        />

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 -translate-x-1/2 h-full w-0.5 bg-accent/30" />

          <motion.div
            className="space-y-12"
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.4, delayChildren: 0.6 }}
          >
            {works.map((work, index) => (
              <WorkGrid key={index} work={work} index={index} />
            ))}
          </motion.div>
        </div>

        <motion.div
          className="text-center mt-16"
          initial={fadeInAnimation.initial}
          whileInView={fadeInAnimation.whileInView}
          viewport={fadeInAnimation.viewport}
          transition={{ ...fadeInAnimation.transition, delay: 0.8 }}
        >
          <motion.button
            className="bg-accent text-background font-bold py-3 px-8 rounded-md shadow-lg shadow-accent/20 hover:bg-accent-dark transition-all duration-300"
            onClick={handleShowResume}
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            View Full Resume
          </motion.button>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default Experience;
