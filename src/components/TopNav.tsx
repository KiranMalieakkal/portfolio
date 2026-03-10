
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../contexts/ThemeContext"; // Import useTheme
import { Sun, Moon } from 'lucide-react'; // Import icons

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Blog", href: "https://kiranmalieakkal.wordpress.com" },
  { name: "Contact", href: "#contact" },
];

function TopNav() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme(); // Use the theme context

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const targetId = href.replace("#", "");
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const menuVariants = {
    closed: {
      opacity: 0,
      y: "-100%",
    },
    open: {
      opacity: 1,
      y: "0%",
      transition: {
        type: "spring" as const,
        stiffness: 260,
        damping: 20,
      },
    },
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 bg-background/80 backdrop-blur-md text-text-primary"
      id="home"
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo / Name */}
        <a
          href="#home"
          onClick={(e) => handleScroll(e, "#home")}
          className="text-xl font-bold tracking-wider hover:text-accent transition-colors duration-300"
        >
          KM
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-6 items-center">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target={link.name === "Blog" ? "_blank" : "_self"}
              rel={link.name === "Blog" ? "noopener noreferrer" : ""}
              className="font-mono text-sm hover:text-accent transition-colors duration-300"
              onClick={(e) => handleScroll(e, link.href)}
            >
              {link.name}
            </a>
          ))}
          <a href="/Resume.pdf" target="_blank">
            <motion.button
              className="bg-accent text-background font-bold text-sm py-2 px-4 rounded-md shadow-lg shadow-accent/20 hover:bg-accent-dark transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Resume
            </motion.button>
          </a>
          {/* Theme Toggle */}
          <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-card">
            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
           {/* Theme Toggle */}
           <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-card mr-4">
            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
          </button>
          <button onClick={toggleMenu} aria-label="Toggle menu">
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
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="md:hidden absolute top-full left-0 w-full bg-card shadow-lg"
          >
            <div className="flex flex-col items-center space-y-4 py-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target={link.name === "Blog" ? "_blank" : "_self"}
                  rel={link.name === "Blog" ? "noopener noreferrer" : ""}
                  className="font-mono text-lg hover:text-accent transition-colors duration-300"
                  onClick={(e) => {
                    handleScroll(e, link.href);
                    toggleMenu();
                  }}
                >
                  {link.name}
                </a>
              ))}
              <a href="/Resume.pdf" target="_blank">
                <motion.button
                  className="bg-accent text-background font-bold text-base py-3 px-6 rounded-md shadow-lg shadow-accent/20 hover:bg-accent-dark transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Resume
                </motion.button>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

export default TopNav;
