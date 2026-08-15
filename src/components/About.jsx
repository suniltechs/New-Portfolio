import { FaChevronRight } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { GraduationCap, Mail, MapPin } from 'lucide-react'

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
  hidden: { y: 24, opacity: 0 },
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
    <section id="about" className="relative -mt-px overflow-hidden bg-cream-lighter pb-16 pt-12 dark:bg-dark-bg sm:mt-0 sm:pb-20">
      <div className="container relative z-10 mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-10 max-w-3xl text-center"
        >
          <h2 className="relative inline-block text-3xl font-bold text-dark-bg dark:text-white md:text-4xl">
            <span className="text-orange-primary">About</span> Me
            <motion.span 
              className="absolute bottom-[-12px] left-1/2 h-1 w-20 -translate-x-1/2 rounded-full bg-orange-primary"
              initial={{ scaleX: 0 }}
              animate={inView ? { scaleX: 1 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
            />
          </h2>
          <p className="mx-auto mt-7 max-w-2xl text-sm font-medium leading-relaxed text-gray-600 dark:text-gray-400 md:text-base">
            I turn ideas into responsive, practical digital products using modern JavaScript, thoughtful UI, and a habit of learning by building.
          </p>
        </motion.div>

        <div ref={ref} className="grid items-center gap-8 lg:grid-cols-[0.9fr_1.1fr] xl:gap-12">
          <motion.div 
            className="relative mx-auto w-full max-w-sm md:max-w-md"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.div
              className="relative overflow-hidden rounded-3xl border border-gray-200 bg-white p-2.5 shadow-xl shadow-dark-bg/10 dark:border-white/10 dark:bg-dark-card dark:shadow-black/20"
              whileHover={{ y: -6 }}
              transition={{ type: 'spring', stiffness: 260, damping: 20 }}
            >
              <div className="relative overflow-hidden rounded-[1.25rem]">
                <img
                  src="/assets/images/profile2.jpg"
                  alt="Sunil Sowrirajan"
                  className="aspect-[4/5] w-full object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-gray-950/80 via-gray-950/10 to-transparent p-4">
                  <div className="inline-flex items-center gap-2 rounded-full bg-white/95 px-3 py-1.5 text-xs font-bold text-gray-950 shadow-lg backdrop-blur">
                    <span className="h-2 w-2 rounded-full bg-orange-primary" />
                    Open to opportunities
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div 
            className="w-full"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <motion.h3 variants={itemVariants} className="text-2xl font-black tracking-tight text-dark-bg dark:text-white md:text-3xl">
              I'm Sunil Sowrirajan
            </motion.h3>
            
            <motion.span 
              variants={itemVariants}
              className="mt-4 inline-flex items-center gap-2 rounded-full bg-orange-primary px-3.5 py-1.5 text-xs font-bold text-white shadow-lg shadow-orange-primary/20"
            >
              <GraduationCap className="h-3.5 w-3.5" />
              Full Stack Developer (MERN)
            </motion.span>

            <motion.p 
              variants={itemVariants}
              className="mt-5 max-w-2xl text-base leading-7 text-gray-600 dark:text-gray-300"
            >
              I'm a Full Stack Developer based in Tamil Nadu, India, a recent graduate in B.Tech in Artificial
              Intelligence and Data Science. I build responsive, interactive web applications using the MERN stack and
              enjoy turning creative ideas into functional digital experiences. I'm always learning and improving my
              skills through hands-on projects.
            </motion.p>

            <motion.div
              variants={containerVariants}
              className="mt-7 grid gap-3 sm:grid-cols-2"
            >
              <motion.a
                variants={itemVariants}
                href="mailto:sunilsowrirajan@gmail.com"
                className="flex items-center gap-2.5 rounded-2xl border border-gray-200 bg-white p-3 text-xs font-bold text-dark-bg shadow-sm transition-all hover:-translate-y-1 hover:border-orange-primary/40 hover:shadow-lg hover:shadow-orange-primary/10 dark:border-white/10 dark:bg-dark-card dark:text-dark-text"
              >
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-orange-primary/10 text-orange-primary">
                  <Mail className="h-4 w-4" />
                </span>
                <span className="min-w-0 truncate">sunilsowrirajan@gmail.com</span>
              </motion.a>

              <motion.div
                variants={itemVariants}
                className="flex items-center gap-2.5 rounded-2xl border border-gray-200 bg-white p-3 text-xs font-bold text-dark-bg shadow-sm dark:border-white/10 dark:bg-dark-card dark:text-dark-text"
              >
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-orange-primary/10 text-orange-primary">
                  <MapPin className="h-4 w-4" />
                </span>
                <span>Chennai, Tamil Nadu</span>
              </motion.div>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              className="mt-6"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.a
                href="https://drive.google.com/file/d/1MyD49ckJXkU9exxZtKDHIfjNM0oCyRzJ/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-full bg-dark-bg px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-dark-bg/20 transition-colors hover:bg-orange-primary hover:text-white dark:bg-white dark:text-gray-950 dark:shadow-black/20"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 10px 25px -5px rgba(255, 155, 81, 0.3)"
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
