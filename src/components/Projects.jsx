import { PROJECTS } from "../constants"
import { motion } from "framer-motion"

const Projects = () => {
  return (
    <div className="border-b border-neutral-700 pb-4">
      <motion.h2 
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-3xl"
      >
        Projects
      </motion.h2>
      <div>
        {PROJECTS.map((project, index) => (
          <div key={index} className="mb-8 flex flex-wrap justify-center">
            <motion.div 
              className="w-full lg:w-1/4"
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
            >
              <img 
                src={project.image} 
                alt={project.title} 
                width={150}
                height={150}
                className="mb-6 rounded"
              />
            </motion.div>
            <div className="w-full max-w-xl lg:w-3/4">
              <motion.h6 
                className="mb-2 font-semibold"
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 0.5 }}
              >
                {project.title}
              </motion.h6>
              <motion.p 
                className="mb-4 text-neutral-400"
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 0.5 }}
              >
                {project.description}
              </motion.p>
              <motion.div 
                className="flex flex-wrap gap-2"
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 100 }}
                transition={{ duration: 0.5 }}
              >
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="rounded bg-neutral-800 px-2 py-1 text-sm">
                    {tech}
                  </span>
                ))}
              </motion.div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects