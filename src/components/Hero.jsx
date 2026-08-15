import { useEffect, useRef } from 'react'
import { FaArrowCircleDown, FaLinkedin, FaGithub, FaDev } from 'react-icons/fa'
import Typed from 'typed.js'
import { motion } from 'framer-motion'

const Hero = () => {
  const typedRef = useRef(null)
  const typedInstance = useRef(null)

  const floatingVariants = {
    float: {
      y: [0, -7, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  }

  useEffect(() => {
    if (typedRef.current) {
      typedInstance.current = new Typed(typedRef.current, {
        strings: ['Full Stack Development', 'MERN Stack Development', 'Web Designing'],
        typeSpeed: 50,
        backSpeed: 25,
        backDelay: 500,
        loop: true,
      })
    }

    return () => {
      typedInstance.current?.destroy()
    }
  }, [])

  return (
    <section
      id="home"
      className="hero-background relative flex min-h-screen items-center overflow-hidden pt-24 text-white"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-dark-bg/95 via-dark-bg/70 to-dark-bg/15" />

      <div className="container relative z-10 mx-auto px-5 py-16 sm:px-8 md:py-20 lg:px-12">
        <motion.div
          className="max-w-2xl"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="mb-4 text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
            <span className="block md:whitespace-nowrap">Hi There, I&apos;m Sunil</span>
            <span className="block text-primary">Sowrirajan</span>
          </h1>

          <p className="mb-6 text-lg font-medium text-white/90 sm:text-xl">
            I&apos;m into{' '}
            <span ref={typedRef} className="font-semibold text-primary" />
          </p>

          <motion.div
            className="mt-8 flex space-x-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <motion.a
              href="https://www.linkedin.com/in/sunil-sowrirajan-40548826b/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-2xl text-white/90 transition-colors duration-300 hover:text-primary"
              variants={floatingVariants}
              animate="float"
            >
              <FaLinkedin />
            </motion.a>
            <motion.a
              href="https://github.com/suniltechs"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-2xl text-white/90 transition-colors duration-300 hover:text-primary"
              variants={floatingVariants}
              animate="float"
            >
              <FaGithub />
            </motion.a>
            <motion.a
              href="https://dev.to/sunil_s"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Dev"
              className="text-2xl text-white/90 transition-colors duration-300 hover:text-primary"
              variants={floatingVariants}
              animate="float"
            >
              <FaDev />
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <a href="#about" className="btn mt-8 inline-flex items-center">
              <span>About Me</span>
              <FaArrowCircleDown className="ml-2" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
