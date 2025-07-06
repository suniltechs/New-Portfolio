import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const Education = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  return (
    <section id="education" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-4"
        >
          <h2 className="text-3xl font-bold relative inline-block">
            My <span className="text-orange-primary">Education</span>
            <motion.span 
              className="absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 w-16 h-1 bg-orange-primary"
              initial={{ scaleX: 0 }}
              animate={inView ? { scaleX: 1 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
            />
          </h2>
        </motion.div>

        <motion.p 
          className="text-center text-black italic mb-12 max-w-2xl mx-auto text-lg"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3 }}
        >
          "Education is not the learning of facts, but the training of the mind to think."
        </motion.p>

        <motion.div 
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-3xl mx-auto"
        >
          <motion.div 
            variants={itemVariants}
            className="bg-white rounded-xl shadow-lg overflow-hidden border border-orange-primary/10 hover:shadow-xl hover:border-orange-primary/30 transition-all"
            whileHover={{ y: -5 }}
          >
            <div className="md:flex bg-cream-lighter">
              <motion.div 
                className="md:w-1/3"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <img
                  src="/assets/images/education/college.png"
                  alt="Education"
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <div className="p-8 md:w-2/3">
                <motion.h3 
                  className="text-2xl font-bold mb-3 text-black"
                  variants={itemVariants}
                >
                  B.Tech Artificial Intelligence and Data Science
                </motion.h3>
                <motion.p 
                  className="text-black mb-4"
                  variants={itemVariants}
                >
                  Sir Issac Newton College of Engineering and Technology | AU
                </motion.p>
                <motion.div
                  className="inline-block bg-orange-primary/10 text-orange-primary px-4 py-2 rounded-full text-sm font-medium"
                  variants={itemVariants}
                >
                  2021-2025 | Completed
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Education