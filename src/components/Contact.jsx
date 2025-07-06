import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaUser, FaEnvelope, FaCommentDots, FaPaperPlane } from 'react-icons/fa'
import Lottie from 'react-lottie'
import contactAnimation from '/src/data/contact-animation' 

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    const data = new FormData(form)
    const action = form.action
    
    fetch(action, {
      method: 'POST',
      body: data,
      headers: {
        'Accept': 'application/json'
      }
    }).then(response => {
      if (response.ok) {
        alert('Message sent successfully!')
        form.reset()
      } else {
        throw new Error('Network response was not ok')
      }
    }).catch(error => {
      alert('There was a problem sending your message. Please try again later.')
      console.error('Error:', error)
    })
  }

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

  // Lottie animation options
  const defaultOptions = {
    loop: true,
    autoplay: true, 
    animationData: contactAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <section id="contact" className="py-20 bg-cream-lighter">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold relative inline-block">
            Get in <span className="text-orange-primary">Touch</span>
            <motion.span 
              className="absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 w-16 h-1 bg-orange-primary"
              initial={{ scaleX: 0 }}
              animate={inView ? { scaleX: 1 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
            />
          </h2>
        </motion.div>

        <div ref={ref} className="flex flex-col md:flex-row items-center gap-12">
          {/* Lottie Animation Section */}
          <motion.div 
            className="md:w-1/2 flex justify-center"
            variants={itemVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            whileHover={{ scale: 1.02 }}
          >
            <div className="w-full max-w-md">
              <Lottie 
                options={defaultOptions}
                height="100%"
                width="100%"
                isStopped={false}
                isPaused={false}
              />
            </div>
          </motion.div>

          {/* Form Section */}
          <motion.div 
            className="md:w-1/2"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <form
              id="contact-form"
              action="https://formspree.io/f/xgvejazn"
              method="POST"
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              <motion.div 
                className="relative"
                variants={itemVariants}
              >
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Name"
                  required
                  className="w-full px-4 py-3 pl-12 border border-orange-primary/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-primary/50 focus:border-transparent transition-all"
                />
                <FaUser className="absolute left-4 top-1/2 transform -translate-y-1/2 text-orange-primary" />
              </motion.div>

              <motion.div 
                className="relative"
                variants={itemVariants}
              >
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                  required
                  className="w-full px-4 py-3 pl-12 border border-orange-primary/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-primary/50 focus:border-transparent transition-all"
                />
                <FaEnvelope className="absolute left-4 top-1/2 transform -translate-y-1/2 text-orange-primary" />
              </motion.div>

              <motion.div 
                className="relative"
                variants={itemVariants}
              >
                <textarea
                  id="message"
                  name="message"
                  placeholder="Message"
                  rows="5"
                  required
                  className="w-full px-4 py-3 pl-12 border border-orange-primary/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-primary/50 focus:border-transparent transition-all"
                ></textarea>
                <FaCommentDots className="absolute left-4 top-5 text-orange-primary" />
              </motion.div>

              <motion.button
                type="submit"
                className="w-full px-6 py-3 bg-orange-primary text-white rounded-lg font-medium flex items-center justify-center hover:bg-orange-600 transition-colors"
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 10px 20px -5px rgba(255, 107, 0, 0.3)"
                }}
                whileTap={{ scale: 0.98 }}
              >
                <span>Send Message</span>
                <motion.span
                  animate={{ x: [0, 4, 0] }}
                  transition={{ 
                    repeat: Infinity,
                    duration: 1.5,
                    ease: "easeInOut"
                  }}
                  className="ml-2"
                >
                  <FaPaperPlane />
                </motion.span>
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact