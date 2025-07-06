import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const experiences = [
  {
    id: 1,
    company: "Technohacks",
    role: "Website Developer | Internship",
    period: "Nov 2023 - Dec 2023",
    description: "Developed responsive websites using modern frontend technologies, implemented UI components, and collaborated with team members on web development projects.",
    icon: "🚀" 
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
      x: (index) => (index % 2 === 0 ? 100 : -100)
    },
    visible: (index) => ({
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 12,
        duration: 0.8
      }
    })
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
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold relative inline-block">
            Experience
            <motion.span 
              className="absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 w-16 h-1 bg-orange-primary"
              initial={{ scaleX: 0 }}
              animate={inView ? { scaleX: 1 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
            />
          </h2>
        </motion.div>

        <div ref={ref} className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <motion.div 
              className="absolute left-1/2 h-full w-0.5 bg-orange-primary -ml-0.5"
              variants={lineVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
            />

            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="space-y-16"
            >
              {experiences.map((exp, index) => (
                <motion.div 
                  key={exp.id}
                  custom={index}
                  variants={itemVariants}
                  className="relative group"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 -ml-3 top-8 w-6 h-6 rounded-full bg-orange-primary shadow-lg flex items-center justify-center text-white z-10">
                    {exp.icon}
                  </div>

                  {/* Experience card - positioned to right for odd, left for even */}
                  <div className={`relative ${index % 2 === 0 ? 'md:ml-auto md:pl-8' : 'md:mr-auto md:pr-8'}`} style={{ width: 'calc(50% - 20px)' }}>
                    <motion.div 
                      whileHover={{ 
                        scale: 1.03,
                        boxShadow: "0 10px 25px -5px rgba(255, 107, 0, 0.1)"
                      }}
                      className={`bg-white p-6 rounded-xl shadow-md border border-orange-primary/10 hover:border-orange-primary/30 transition-all ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}
                    >
                      <h3 className="text-xl font-bold mb-2 text-black">{exp.company}</h3>
                      <p className="font-medium text-orange-primary mb-1">{exp.role}</p>
                      <p className="text-sm text-gray-600 mb-3">{exp.period}</p>
                      <p className="text-gray-700">{exp.description}</p>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience