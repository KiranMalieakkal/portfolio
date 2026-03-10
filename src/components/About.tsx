import { motion } from "framer-motion";

const skills = [
  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-plain.svg" },
  { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
  { name: "Spring", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg" },
  { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" },
  { name: "Azure", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original.svg" },
  { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-plain-wordmark.svg" },
  { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-plain-wordmark.svg" },
  { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
];

const fadeInAnimation = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: "easeInOut" as const },
  viewport: { once: true },
};

function About() {
  return (
    <motion.section
      id="about"
      className="min-h-screen bg-background flex flex-col items-center justify-center text-text-primary py-20 px-6"
      initial={fadeInAnimation.initial}
      whileInView={fadeInAnimation.whileInView}
      transition={fadeInAnimation.transition}
      viewport={fadeInAnimation.viewport}
    >
      <div className="container mx-auto max-w-4xl text-center">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-4"
          initial={fadeInAnimation.initial}
          whileInView={fadeInAnimation.whileInView}
          viewport={fadeInAnimation.viewport}
          transition={{ ...fadeInAnimation.transition, delay: 0.2 }}
        >
          About Me
        </motion.h2>
        <motion.div
          className="h-1.5 w-32 bg-accent mx-auto mb-8"
          initial={fadeInAnimation.initial}
          whileInView={fadeInAnimation.whileInView}
          viewport={fadeInAnimation.viewport}
          transition={{ ...fadeInAnimation.transition, delay: 0.4 }}
        />
        
        <motion.p
          className="text-lg md:text-xl text-text-secondary leading-relaxed mb-12"
          initial={fadeInAnimation.initial}
          whileInView={fadeInAnimation.whileInView}
          viewport={fadeInAnimation.viewport}
          transition={{ ...fadeInAnimation.transition, delay: 0.6 }}
        >
          I am a Master's student in Industrial Management at KTH Royal Institute of Technology in Stockholm, where I am honing my skills in the strategic management of technology and innovation. While my academic focus is on the intersection of business and engineering, my personal passion lies in the world of software development. I see coding as a powerful tool for creative problem-solving and a way to bring innovative ideas to life. This blend of technical expertise and strategic thinking allows me to approach challenges from a unique perspective, turning complex problems into elegant and efficient full-stack solutions. When I'm not immersed in my studies or building applications, you'll find me playing football, watching movies, or exploring new ideas.
        </motion.p>

        <motion.h3
          className="text-3xl font-bold text-text-primary mb-8"
          initial={fadeInAnimation.initial}
          whileInView={fadeInAnimation.whileInView}
          viewport={fadeInAnimation.viewport}
          transition={{ ...fadeInAnimation.transition, delay: 0.8 }}
        >
          My Tech Stack
        </motion.h3>

        <motion.div
          className="flex flex-wrap justify-center items-center gap-6 md:gap-8"
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.1, delayChildren: 1.0 }}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="group relative flex flex-col items-center"
              variants={{
                initial: { opacity: 0, y: 20 },
                whileInView: { opacity: 1, y: 0 },
              }}
              whileHover={{ scale: 1.1, y: -5 }}
            >
              <img
                alt={skill.name}
                loading="lazy"
                width="50"
                height="50"
                decoding="async"
                src={skill.icon}
                className="transition-transform duration-300 ease-in-out"
              />
              <span className="absolute -bottom-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm text-accent">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}

export default About;