import { useEffect, useRef } from 'react'
import { FaArrowCircleDown, FaLinkedin, FaGithub, FaDev } from 'react-icons/fa'
import Typed from 'typed.js'
import { motion } from 'framer-motion'

const Hero = () => {
  const typedRef = useRef(null)
  const typedInstance = useRef(null)

  const floatingVariants = {
    float: {
      y: [0, -15, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: 'easeInOut'
      }
    }
  }

  useEffect(() => {
    if (typedRef.current) {
      typedInstance.current = new Typed(typedRef.current, {
        strings: ['Full Stack Development','MERN Stack Development', 'Web Designing'],
        typeSpeed: 50,
        backSpeed: 25,
        backDelay: 500,
        loop: true
      })
    }

    return () => {
      if (typedInstance.current) {
        typedInstance.current.destroy()
      }
    }
  }, [])

  return (
    <section id="home" className="relative bg-cream-light min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Left Text Content */}
          <div className="md:w-1/2 mb-10 md:mb-0">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                Hi There, <br /> I'm Sunil <span className="text-primary">Sowrirajan</span>
              </h1>
              <p className="text-xl mb-6">
                I'm into{' '}
                <span ref={typedRef} className="text-primary font-medium"></span>
              </p>
            </motion.div>

            {/* Social Icons */}
            <motion.div 
              className="flex space-x-6 mt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <motion.a
                href="https://www.linkedin.com/in/sunil-sowrirajan-40548826b/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-2xl text-gray-700 hover:text-primary transition-colors duration-300"
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
                className="text-2xl text-gray-700 hover:text-primary transition-colors duration-300"
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
                className="text-2xl text-gray-700 hover:text-primary transition-colors duration-300"
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
          </div>

          {/* Right Image with reduced shadow */}
          <div className="md:w-1/2 flex justify-center relative">
            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <div className="absolute -inset-3 mb-10 mr-6 bg-brown opacity-50 rounded-full blur-xl"></div>
              <motion.img
                src="/assets/images/hero.jpeg"
                alt="Sunil Sowrirajan"
                className="w-full max-w-md rounded-[30%_70%_70%_30%_/_30%_30%_70%_70%] shadow-sm"
                variants={floatingVariants}
                animate="float"
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Enhanced Floating Decorative Shapes */}
      {/* Top Left Cluster */}
      <motion.div 
        className="absolute top-[15%] left-[5%] w-8 h-8 rounded-full bg-primary opacity-20"
        animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div 
        className="absolute top-[25%] left-[15%] w-6 h-6 rounded-full bg-secondary opacity-15"
        animate={{ y: [0, -15, 0], x: [0, -5, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
      />
      <motion.div 
        className="absolute top-[20%] left-[10%] w-10 h-4 bg-accent opacity-15 rounded-lg"
        animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }}
      />
      
      {/* Top Right Cluster */}
      <motion.div 
        className="absolute top-[10%] right-[10%] w-10 h-10 rounded-full bg-primary opacity-15"
        animate={{ y: [0, -25, 0], x: [0, 15, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }}
      />
      <motion.div 
        className="absolute top-[15%] right-[20%] w-5 h-5 rounded-full bg-secondary opacity-10"
        animate={{ y: [0, -10, 0], x: [0, -8, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.7 }}
      />
      <motion.div 
        className="absolute top-[12%] right-[15%] w-8 h-3 bg-accent opacity-10 rounded-lg"
        animate={{ y: [0, -15, 0], rotate: [0, -3, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 0.4 }}
      />
      
      {/* Bottom Left Cluster */}
      <motion.div 
        className="absolute bottom-[20%] left-[10%] w-7 h-7 rounded-full bg-primary opacity-15"
        animate={{ y: [0, 15, 0], x: [0, -10, 0] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay: 0.2 }}
      />
      <motion.div 
        className="absolute bottom-[30%] left-[5%] w-9 h-9 rounded-full bg-secondary opacity-20"
        animate={{ y: [0, 20, 0], x: [0, 12, 0] }}
        transition={{ duration: 6.5, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
      />
      <motion.div 
        className="absolute bottom-[25%] left-[8%] w-12 h-2 bg-accent opacity-10 rounded-lg"
        animate={{ y: [0, 10, 0], rotate: [0, 8, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
      />
      
      {/* Bottom Right Cluster */}
      <motion.div 
        className="absolute bottom-[30%] right-[10%] w-12 h-12 rounded-full bg-secondary opacity-20"
        animate={{ y: [0, 20, 0], x: [0, -15, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
      />
      <motion.div 
        className="absolute bottom-[20%] right-[20%] w-4 h-4 rounded-full bg-primary opacity-10"
        animate={{ y: [0, 12, 0], x: [0, 8, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 1.2 }}
      />
      <motion.div 
        className="absolute bottom-[25%] right-[15%] w-6 h-6 bg-accent opacity-15 rounded-lg"
        animate={{ y: [0, 15, 0], rotate: [0, -5, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 0.9 }}
      />
      
      {/* Center Floating Elements */}
      <motion.div 
        className="absolute top-[45%] left-[20%] w-5 h-5 rounded-full bg-primary opacity-15"
        animate={{ y: [0, -15, 0], x: [0, 8, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.4 }}
      />
      <motion.div 
        className="absolute top-[55%] right-[20%] w-6 h-6 rounded-full bg-secondary opacity-15"
        animate={{ y: [0, 15, 0], x: [0, -8, 0] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay: 0.6 }}
      />
      <motion.div 
        className="absolute top-[50%] left-[30%] w-7 h-3 bg-accent opacity-10 rounded-lg"
        animate={{ y: [0, -10, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 0.7 }}
      />
      <motion.div 
        className="absolute top-[60%] right-[30%] w-4 h-8 bg-accent opacity-15 rounded-lg"
        animate={{ y: [0, 12, 0], rotate: [0, -8, 0] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
      />
      
      {/* Additional floating elements for better coverage */}
      <motion.div 
        className="absolute top-[35%] left-[30%] w-3 h-3 bg-primary opacity-10 rounded-full"
        animate={{ y: [0, -8, 0], x: [0, 5, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.2 }}
      />
      <motion.div 
        className="absolute top-[40%] right-[35%] w-4 h-4 bg-secondary opacity-10 rounded-full"
        animate={{ y: [0, 10, 0], x: [0, -5, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }}
      />
      <motion.div 
        className="absolute bottom-[15%] left-[25%] w-5 h-2 bg-accent opacity-10 rounded-lg"
        animate={{ y: [0, 8, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.6 }}
      />
      <motion.div 
        className="absolute bottom-[10%] right-[25%] w-3 h-6 bg-primary opacity-10 rounded-lg"
        animate={{ y: [0, 5, 0], rotate: [0, -3, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 0.7 }}
      />
    </section>
  )
}

export default Hero