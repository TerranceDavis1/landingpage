import aboutImg from "/assets/unnamed.jpg";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="border-b border-neutral-400 pb-4">
      <h2 className="my-20 text-center text-4xl">About Me</h2>
      <div className="flex flex-wrap">
        <motion.div 
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 lg:p-8"
        >
          <div className="flex items-center justify-center">
            <img className="rounded-2xl" src={aboutImg} alt="about" />
          </div>
        </motion.div>

        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 lg:p-8"
        >
          <div className="flex justify-center lg:justify-end">
            <p className="my-2 max-w-xl py-4">
              With 2 years of experience in front-end development (HTML, CSS, JavaScript) and knowledge in back-end technologies (SQL, Node.js), I focus on creating innovative tech solutions. I also offer freelance front-end development services, bringing a passion for technology and problem-solving to every project.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;