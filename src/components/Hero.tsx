import { motion } from "framer-motion";
import { FiArrowDown } from "react-icons/fi";

const Hero = () => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center items-center text-center bg-background text-text-primary px-6"
    >
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <p className="text-lg md:text-xl text-accent mb-3 font-mono tracking-wide">
          KIRAN MALIEAKKAL
        </p>
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-text-primary mb-6 leading-tight">
          I build things for the web.
        </h1>
        <p className="max-w-2xl mx-auto text-base md:text-lg text-text-secondary mb-10">
          I'm a full-stack software engineer with a passion for creating beautiful, functional, and user-centered digital experiences. I'm always looking for new challenges and opportunities to learn and grow.
        </p>
        <motion.a
          href="#projects"
          onClick={(e) => handleScroll(e, "#projects")}
          className="inline-block bg-accent text-background font-bold py-3 px-8 rounded-full shadow-lg shadow-accent/30 hover:bg-accent-dark transition-all duration-300 text-lg"
          whileHover={{ scale: 1.05, y: -5, boxShadow: "0px 15px 30px rgba(100, 190, 255, 0.4)"}}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          View My Work
        </motion.a>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 1, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
        className="absolute bottom-10"
      >
        <a href="#about" onClick={(e) => handleScroll(e, "#about")} aria-label="Scroll down">
          <FiArrowDown className="text-3xl text-text-secondary hover:text-accent transition-colors duration-300" />
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
