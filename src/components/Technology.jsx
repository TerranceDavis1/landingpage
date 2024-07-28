import html5Icon from "/assets/PNG Skills/html-5.png";
import javasIcon from "/assets/PNG Skills/java-script.png";
import pythonIcon from "/assets/PNG Skills/python.png";
import cssIcon from "/assets/PNG Skills/social.png";
import reactIcon from "/assets/PNG Skills/atom.png";
import sqlIcon from "/assets/PNG Skills/sql-server.png";
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technology = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <h2 className="my-20 text-center text-3xl">Skills</h2> 
      <div className="flex flex-wrap items-center justify-center gap-4">
        <motion.div 
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-xl border-4 border-neutral-800 p-4"
        >
          <img src={html5Icon} alt="HTML5" className="w-16 h-16" />
        </motion.div>
        <motion.div 
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className="rounded-xl border-4 border-neutral-800 p-4"
        >
          <img src={javasIcon} alt="Javascript" className="w-16 h-16" />
        </motion.div>
        <motion.div 
          variants={iconVariants(5)}
          initial="initial"
          animate="animate"
          className="rounded-xl border-4 border-neutral-800 p-4"
        >
          <img src={pythonIcon} alt="Python" className="w-16 h-16" />
        </motion.div>
        <motion.div 
          variants={iconVariants(4)}
          initial="initial"
          animate="animate"
          className="rounded-xl border-4 border-neutral-800 p-4"
        >
          <img src={cssIcon} alt="CSS" className="w-16 h-16" />
        </motion.div>
        <motion.div 
          variants={iconVariants(2)}
          initial="initial"
          animate="animate"
          className="rounded-xl border-4 border-neutral-800 p-4"
        >
          <img src={reactIcon} alt="React" className="w-16 h-16" />
        </motion.div>
        <motion.div 
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className="rounded-xl border-4 border-neutral-800 p-4"
        >
          <img src={sqlIcon} alt="SQL" className="w-16 h-16" />
        </motion.div>
      </div>
    </div>
  );
};


export default Technology;