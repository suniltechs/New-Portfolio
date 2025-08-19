import { FaChevronRight } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

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
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
}

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold mb-8 relative inline-block">
            <span className="text-orange-primary">About</span> Me
            <motion.span 
              className="absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 w-16 h-1 bg-orange-primary"
              initial={{ scaleX: 0 }}
              animate={inView ? { scaleX: 1 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
            />
          </h2>
        </motion.div>

        <div ref={ref} className="flex flex-col md:flex-row items-center gap-12">
          {/* Image Section */}
          <motion.div 
            className="md:w-1/2 flex justify-center"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.img
              src="/assets/images/profile2.jpg"
              alt="Sunil Sowrirajan"
              className="w-full max-w-md rounded-xl shadow-xl border border-orange-primary/30"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 10px 25px -5px rgba(255, 107, 0, 0.2)"
              }}
              transition={{ type: "spring", stiffness: 300 }}
            />
          </motion.div>

          {/* Content Section */}
          <motion.div 
            className="md:w-1/2"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <motion.h3 variants={itemVariants} className="text-3xl font-bold mb-4 text-black">
              I'm Sunil
            </motion.h3>
            
            <motion.span 
              variants={itemVariants}
              className="inline-block bg-orange-primary text-white px-4 py-1.5 rounded-full text-sm mb-6 font-medium"
            >
              Full Stack Developer (MERN)
            </motion.span>

            <motion.p 
              variants={itemVariants}
              className="text-black mb-6 text-lg leading-relaxed"
            >
              I'm a Full Stack Developer based in Tamil Nadu, India, a recent graduate in B.Tech in Artificial
              Intelligence and Data Science. I build responsive, interactive web applications using the MERN stack and
              enjoy turning creative ideas into functional digital experiences. I'm always learning and improving my
              skills through hands-on projects.
            </motion.p>

            {/* Info Cards */}
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8"
              variants={containerVariants}
            >
              <motion.div 
                variants={itemVariants}
                className="bg-white p-5 rounded-lg shadow-md border border-orange-primary/10"
                whileHover={{ 
                  scale: 1.03,
                  boxShadow: "0 10px 15px -3px rgba(255, 107, 0, 0.1)"
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <p className="text-black">
                  <span className="font-semibold text-orange-primary">email : </span> sunilsowrirajan@gmail.com
                </p>
              </motion.div>
              
              <motion.div 
                variants={itemVariants}
                className="bg-white p-5 rounded-lg shadow-md border border-orange-primary/10"
                whileHover={{ 
                  scale: 1.03,
                  boxShadow: "0 10px 15px -3px rgba(255, 107, 0, 0.1)"
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <p className="text-black">
                  <span className="font-semibold text-orange-primary">place : </span> Thiruvarur, Tamil Nadu
                </p>
              </motion.div>
            </motion.div>

            {/* Resume Button */}
            <motion.div 
              variants={itemVariants}
              className="mt-6"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.a
                href="https://drive.google.com/file/d/1Keri4k0hG28EmLwXJWBsK2isT1Oi3Zye/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 rounded-lg font-medium text-white bg-orange-primary"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 10px 25px -5px rgba(255, 107, 0, 0.3)"
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <span>View Resume</span>
                <motion.span 
                  animate={{ x: [0, 4, 0] }}
                  transition={{ 
                    repeat: Infinity,
                    duration: 1.5,
                    ease: "easeInOut"
                  }}
                  className="ml-2"
                >
                  <FaChevronRight />
                </motion.span>
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
