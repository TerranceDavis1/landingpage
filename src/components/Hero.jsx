import profilePic from "/assets/PNG Skills/Linked-in-tdavis.jpg";
import { motion } from "framer-motion";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.8, delay: delay } },
});

const circleVariants = {
  animate: {
    rotate: 360,
    transition: {
      duration: 20,
      repeat: Infinity,
      ease: "linear",
    },
  },
};

const strokeVariants = {
  animate: {
    strokeDasharray: ["40 20", "50 25", "60 30"],
    transition: {
      duration: 20,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "linear",
    },
  },
};

const Hero = () => {
  return (
    <div className="w-full min-h-screen">
      <div className="container mx-auto px-4 max-w-7xl py-8 md:py-16 lg:py-24">
        <div className="flex flex-wrap items-center">
          <div className="w-full lg:w-2/3 pr-0 lg:pr-8">
            <div className="flex flex-col items-center lg:items-start">
              <motion.h1
                variants={container(0)}
                initial="hidden"
                animate="visible"
                className="pb-8 lg:pb-16 text-6xl lg:text-7xl font-thin tracking-tight"
              >
                Terrance Davis
              </motion.h1>
              <motion.span
                variants={container(0.5)}
                initial="hidden"
                animate="visible"
                className="bg-gradient-to-r from-orange-600 via-teal-800 to-red-600 bg-clip-text text-2xl lg:text-3xl tracking-tight text-transparent"
              >
                Full Stack Developer
              </motion.span>
              <motion.p
                variants={container(1)}
                initial="hidden"
                animate="visible"
                className="mt-6 text-lg lg:text-xl lg:leading-relaxed"
              >
  
                Welcome to my portfolio! I'm a sophomore at Syracuse University, majoring in Computer Engineering with a minor in Business. I am passionate about full-stack development, with 2 years of experience working with front-end technologies such as HTML, CSS, and JavaScript. Additionally, I have knowledge in back-end technologies like SQL and Node.js. My goal is to leverage my skills to create innovative solutions in the tech industry. Feel free to explore my work and reach out for collaboration.
              </motion.p>
            </div>
          </div>
          <div className="w-full lg:w-1/3 mt-8 lg:mt-0">
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-64 h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96">
                <motion.svg
                  className="absolute inset-0 w-full h-full"
                  viewBox="0 0 400 400"
                  variants={circleVariants}
                  animate="animate"
                >
                  <motion.circle
                    cx="200"
                    cy="200"
                    r="196"
                    stroke="#00ff99"
                    strokeWidth="4"
                    strokeLinecap="round"
                    fill="none"
                    initial={{ strokeDasharray: "40 20" }}
                    variants={strokeVariants}
                  />
                </motion.svg>
                <motion.img
                  initial={{ x: 100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 1, delay: 1.2 }}
                  src={profilePic}
                  alt="Terrance Davis"
                  className="rounded-full w-full h-full object-cover z-10"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

