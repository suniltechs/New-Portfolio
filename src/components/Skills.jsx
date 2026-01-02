import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import skillsData from '../data/skills'

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
}

const itemVariants = {
  hidden: { y: 20, opacity: 0, scale: 0.8 },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10
    }
  }
}

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  return (
    <section id="skills" className="py-20 bg-cream-lighter dark:bg-dark-bg">
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold relative inline-block dark:text-dark-text">
            My <span className="text-orange-primary">Skills</span>
            <motion.span 
              className="absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 w-20 h-1.5 bg-orange-primary rounded-full"
              initial={{ scaleX: 0 }}
              animate={inView ? { scaleX: 1 } : {}}
              transition={{ delay: 0.4, duration: 0.8 }}
            />
          </h2>
          <p className="mt-4 text-lg dark:text-dark-text text-gray-600 max-w-2xl mx-auto">
            Technologies I've worked with
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
        >
          {skillsData.map((skill, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              whileHover={{
                y: -8,
                scale: 1.03,
                boxShadow: "0 20px 25px -5px rgba(255, 107, 0, 0.1), 0 10px 10px -5px rgba(255, 107, 0, 0.04)",
                transition: { type: "spring", stiffness: 400, damping: 10 }
              }}
              className="group dark:bg-dark-card dark:border-dark-secondary bg-white/70 backdrop-blur-sm p-6 rounded-xl shadow-sm border border-white/30 hover:border-orange-primary/20 transition-all duration-300 hover:bg-white/90"
            >
              <div className="flex flex-col items-center gap-3">
                <motion.div 
                  className="p-3 rounded-lg bg-white shadow-md group-hover:shadow-lg transition-all duration-300"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <img 
                    src={skill.icon} 
                    alt={skill.name} 
                    className="w-10 h-10 object-contain"
                    loading="eager"
                  />
                </motion.div>
                <span className="font-medium dark:text-dark-text text-gray-800 text-center">
                  {skill.name}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
