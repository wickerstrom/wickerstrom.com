import { motion } from "framer-motion"

function OnScrollHOC({ children }) {
    return (
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 10 }
        }}
      >
        {children}
      </motion.div>
    );
  }

export default OnScrollHOC;