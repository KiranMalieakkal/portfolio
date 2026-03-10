import { motion } from "framer-motion";

const fadeInAnimation = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: "easeInOut" as const },
  viewport: { once: true },
};

const socialLinks = [
  {
    name: "Email",
    url: "mailto:kiranmalieakkal18@gmail.com",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
    ),
  },
  {
    name: "GitHub",
    url: "https://github.com/KiranMalieakkal",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
    ),
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/kiran-malieakkal-2a66541a5/",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
    ),
  },
];

function Contact() {
  return (
    <footer id="contact" className="bg-card text-text-primary py-16 px-6">
      <motion.div
        className="container mx-auto max-w-3xl text-center"
        initial={fadeInAnimation.initial}
        whileInView={fadeInAnimation.whileInView}
        transition={fadeInAnimation.transition}
        viewport={fadeInAnimation.viewport}
      >
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-4"
          initial={fadeInAnimation.initial}
          whileInView={fadeInAnimation.whileInView}
          viewport={fadeInAnimation.viewport}
          transition={{ ...fadeInAnimation.transition, delay: 0.2 }}
        >
          Get In Touch
        </motion.h2>
        <motion.p
          className="text-text-secondary md:text-lg mb-8"
          initial={fadeInAnimation.initial}
          whileInView={fadeInAnimation.whileInView}
          viewport={fadeInAnimation.viewport}
          transition={{ ...fadeInAnimation.transition, delay: 0.4 }}
        >
          I'm always excited to connect with fellow developers, potential collaborators, or anyone interested in tech! Feel free to reach out—I'd love to hear from you.
        </motion.p>
        
        <motion.div
          className="flex justify-center space-x-6 mb-10"
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.15, delayChildren: 0.6 }}
        >
          {socialLinks.map((link) => (
            <motion.a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary hover:text-accent hover:scale-110 transition-all duration-300"
              aria-label={`Connect with me on ${link.name}`}
              variants={{ initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 } }}
              whileHover={{ y: -3 }}
            >
              {link.icon}
            </motion.a>
          ))}
        </motion.div>

        <motion.div 
          className="text-sm text-text-secondary/70"
          initial={fadeInAnimation.initial}
          whileInView={fadeInAnimation.whileInView}
          viewport={fadeInAnimation.viewport}
          transition={{ ...fadeInAnimation.transition, delay: 0.8 }}
        >
          <p>COPYRIGHT © {new Date().getFullYear()} &middot; KIRAN MALIEAKKAL</p>
          <p>Designed & Built with ❤️</p>
        </motion.div>
      </motion.div>
    </footer>
  );
}

export default Contact;
