import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaLinkedin, FaGithub, FaEnvelope, FaChevronRight } from 'react-icons/fa'
import { FaCode, FaBolt, FaMapMarkerAlt } from 'react-icons/fa'

const Footer = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const footerLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'education', label: 'Education' },
    { id: 'work', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
  ]

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

  return (
    <footer className="bg-white text-black py-16">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-12"
        >
          {/* Brand Column */}
          <motion.div variants={itemVariants}>
            <motion.h3 
              className="text-2xl font-bold mb-6 flex items-center"
              whileHover={{ scale: 1.02 }}
            >
              <FaCode className="mr-3 text-orange-primary" />
              <span>Sunil's Portfolio</span>
            </motion.h3>
            <p className="text-black mb-6">
              Thank you for visiting my personal portfolio website. Connect with me over socials.
            </p>
            <motion.p 
              className="flex items-center text-black font-medium"
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <FaBolt className="mr-2 text-orange-primary animate-pulse" />
              Keep Rising 🚀
            </motion.p>
          </motion.div>

          {/* Quick Links Column */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold mb-6 text-orange-primary">Quick Links</h3>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <motion.li 
                  key={link.id}
                  variants={itemVariants}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <a
                    href={`#${link.id}`}
                    className="flex items-center text-black hover:text-orange-primary transition-colors duration-300 group"
                  >
                    <motion.span 
                      className="inline-block mr-3 text-orange-primary"
                      animate={{ x: [0, 3, 0] }}
                      transition={{ 
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      <FaChevronRight size={14} />
                    </motion.span>
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Column */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold mb-6 text-orange-primary">Contact Info</h3>
            <motion.a
              href="mailto:sunilsowrirajan@gmail.com"
              className="flex items-center text-black mb-4 hover:text-orange-primary transition-colors"
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <FaEnvelope className="mr-3 text-orange-primary" />
              sunilsowrirajan@gmail.com
            </motion.a>
            <motion.div
              className="flex items-center text-black mb-8"
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <FaMapMarkerAlt className="mr-3 text-orange-primary" />
              Thiruvarur, Tamil Nadu
            </motion.div>

            <div className="flex space-x-5">
              <motion.a
                href="https://www.linkedin.com/in/sunil-sowrirajan-40548826b/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-black hover:text-orange-primary transition-colors"
                aria-label="LinkedIn"
                whileHover={{ y: -5, scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaLinkedin />
              </motion.a>
              <motion.a
                href="https://github.com/suniltechs"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-black hover:text-orange-primary transition-colors"
                aria-label="GitHub"
                whileHover={{ y: -5, scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaGithub />
              </motion.a>
              <motion.a
                href="mailto:sunilsowrirajan@gmail.com"
                className="text-2xl text-black hover:text-orange-primary transition-colors"
                aria-label="Mail"
                whileHover={{ y: -5, scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaEnvelope />
              </motion.a>
            </div>
          </motion.div>
        </motion.div>

        <motion.div 
          className="border-t border-black/50 mt-12 pt-8 text-center"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
        >
          <p className="text-black">
            Designed with <FaBolt className="inline mx-1 text-orange-primary animate-pulse" /> by{' '}
            <motion.a
              href="https://www.linkedin.com/in/sunil-sowrirajan-40548826b/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-primary font-medium hover:underline"
              whileHover={{ scale: 1.05 }}
            >
              Sunil Sowrirajan
            </motion.a>
          </p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer