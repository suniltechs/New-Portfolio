import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const experiences = [
  {
    id: 1,
    company: "Technohacks",
    role: "Website Developer | Internship",
    period: "Nov 2023 - Dec 2023",
    description: "Developed responsive websites using modern frontend technologies, implemented UI components, and collaborated with team members on web development projects.",
    icon: "🥇",
    skills: ["HTML5", "CSS3", "JavaScript", "React", "Tailwind CSS", "Responsive Design"]
  },
  {
  id: 2,
  company: "ScalingWolf AI",
  role: "Full Stack Developer Intern | Internship",
  period: "Dec 2024 - Present",
  description: "Working on the development of full-stack web applications by building responsive user interfaces, developing backend APIs, and integrating databases for scalable, AI-driven solutions. Collaborating with the team to implement features, optimize performance, and follow best development practices.",
  icon: "🚀",
  skills: ["React.js", "TypeScript", "Tailwind CSS", "Node.js", "Express.js", "Postgresql", "REST APIs", "Git", "LLMs"]
}

]

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.4
      }
    }
  }

  const itemVariants = {
    hidden: { 
      opacity: 0,
      y: 50
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 12,
        duration: 0.8
      }
    }
  }

  const lineVariants = {
    hidden: { scaleY: 0, originY: 0 },
    visible: {
      scaleY: 1,
      transition: {
        duration: 1.2,
        ease: [0.43, 0.13, 0.23, 0.96]
      }
    }
  }

  return (
    <section id="experience" className="py-20 dark:bg-dark-bg bg-cream-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-8 text-black dark:text-dark-text relative inline-block">
            <span className="text-orange-primary">My</span> Experience
            <motion.span 
              className="absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 w-16 h-1 bg-orange-primary"
              initial={{ scaleX: 0 }}
              animate={inView ? { scaleX: 1 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
            />
          </h2>
          <p className="text-lg text-black dark:text-gray-400 max-w-2xl mx-auto">
            My professional journey and hands-on experience
          </p>
        </motion.div>

        <div ref={ref} className="max-w-6xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <motion.div 
              className="absolute left-4 md:left-1/2 h-full w-1 bg-gradient-to-b from-orange-400 to-orange-600 -ml-0.5"
              variants={lineVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
            />

            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="space-y-12"
            >
              {experiences.map((exp, index) => (
                <motion.div 
                  key={exp.id}
                  variants={itemVariants}
                  className="relative group"
                >
                  {/* Timeline dot */}
                  <motion.div 
                    className="absolute left-4 md:left-1/2 -ml-4 top-6 w-8 h-8 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 shadow-lg flex items-center justify-center text-white z-10 border-2 border-white dark:border-dark-bg"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <span className="text-sm">{exp.icon}</span>
                  </motion.div>

                  {/* Experience card */}
                  <div className={`ml-16 md:ml-0 ${index % 2 === 0 ? 'md:ml-auto md:pl-12' : 'md:mr-auto md:pr-12'} md:w-[45%]`}>
                    <motion.div 
                      whileHover={{ 
                        scale: 1.02,
                        y: -5,
                        boxShadow: "0 20px 40px -10px rgba(255, 107, 0, 0.15)"
                      }}
                      className="bg-white dark:bg-dark-card p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-800 hover:border-orange-300 dark:hover:border-orange-400 transition-all duration-300"
                    >
                      {/* Header */}
                      <div className={`flex flex-col ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                        <span className="inline-block px-4 py-2 bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 text-sm font-medium rounded-full mb-3 self-start">
                          {exp.period}
                        </span>
                        
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                          {exp.company}
                        </h3>
                        
                        <p className="text-lg font-semibold text-orange-500 dark:text-orange-400 mb-4">
                          {exp.role}
                        </p>
                      </div>

                      {/* Description */}
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                        {exp.description}
                      </p>

                      {/* Skills */}
                      {exp.skills && (
                        <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                          {exp.skills.map((skill, skillIndex) => (
                            <span 
                              key={skillIndex}
                              className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm rounded-full border border-gray-200 dark:border-gray-700"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      )}
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            Ready to bring your next project to life?{" "}
            <a 
              href="#contact" 
              className="text-orange-500 dark:text-orange-400 font-semibold hover:underline underline-offset-4"
            >
              Let's connect!
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience
