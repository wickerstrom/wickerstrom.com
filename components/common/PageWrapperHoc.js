import { motion } from "framer-motion";

const content = {
  initial: { y: 10, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
};

const Contact = ({ children }) => {
  return (
    <motion.section
      exit={{ opacity: 0 }}
    >
      <motion.div
        variants={content}
        animate="animate"
        initial="initial"
      >
        {children}
      </motion.div>
    </motion.section>
  );
};

export default Contact;
