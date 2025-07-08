import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaEye, FaCode, FaExternalLinkAlt } from 'react-icons/fa'

const projects = [
  {
    id: 1,
    title: 'Etech: E-learning Platform',
    description:
      'A responsive e-learning platform built with React.js and Tailwind CSS. Features interactive course listings, user authentication, and a modern UI with custom animations and icon libraries.',
    image: '/assets/images/projects/E learning.png',
    viewLink: 'https://etech-new.netlify.app/',
    codeLink: 'https://github.com/suniltechs/Etech-new',
    tags: ['React', 'Tailwind CSS', 'Responsive Design']
  },
  {
    id: 2,
    title: 'X-Clone: Social Media Platform',
    description:
      'A full-stack Twitter clone built with MERN stack (MongoDB, Express, React, Node.js). Implements CRUD operations, JWT authentication, real-time updates, and a responsive design.',
    image: '/assets/images/projects/x clone.png',
    viewLink: 'https://x-clone-jrdx.onrender.com/login',
    codeLink: 'https://github.com/suniltechs/X-Clone.git',
    tags: ['MERN Stack', 'JWT Auth', 'CRUD Operations']
  },
  {
    id: 3,
    title: 'DeepGuard: Deepfake Detection',
    description:
      'AI-powered deepfake detection system using Python, Streamlit, and deep learning models (MesoNet, Hugging Face). Analyzes media files for authenticity with 85%+ accuracy.',
    image: '/assets/images/projects/deepguard.png',
    viewLink: 'https://deepguard-g8tg.onrender.com/',
    codeLink: 'https://github.com/suniltechs/Deepfake-Detection.git',
    tags: ['Python', 'Deep Learning', 'Streamlit']
  },
  {
    id: 4,
    title: 'Dynamic Gym: Fitness Center',
    description:
      'Modern fitness center website with responsive design, class scheduling, and trainer profiles. Built with HTML5, CSS3, and JavaScript with smooth animations.',
    image: '/assets/images/projects/fitness center.png',
    viewLink: 'https://suniltechs.github.io/Dynamic-Gym/',
    codeLink: 'https://github.com/suniltechs/Dynamic-Gym.git',
    tags: ['HTML5', 'CSS3', 'JavaScript']
  },
  {
    id: 5,
    title: 'Hotel Golden Sand: Resort Booking',
    description:
      'Elegant resort booking website featuring room galleries, booking system, and responsive design. Implemented with modern CSS techniques and interactive elements.',
    image: '/assets/images/projects/Resort website.png',
    viewLink: 'https://suniltechs.github.io/Resort_website/',
    codeLink: 'https://github.com/suniltechs/Resort_website.git',
    tags: ['Responsive Design', 'CSS Animations', 'Booking System']
  }
]

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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
    <section id="work" className="py-20 bg-cream-lighter">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold relative inline-block">
            Projects <span className="text-orange-primary">Made</span>
            <motion.span 
              className="absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 w-16 h-1 bg-orange-primary"
              initial={{ scaleX: 0 }}
              animate={inView ? { scaleX: 1 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
            />
          </h2>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{ 
                y: -8,
                boxShadow: "0 20px 25px -5px rgba(255, 107, 0, 0.1), 0 10px 10px -5px rgba(255, 107, 0, 0.04)"
              }}
              className="bg-white rounded-xl shadow-lg overflow-hidden border border-orange-primary/10 hover:border-orange-primary/30 transition-all"
            >
              <div className="relative group overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <FaExternalLinkAlt className="text-white text-2xl" />
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-black">{project.title}</h3>
                <p className="text-black mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span 
                      key={index}
                      className="text-xs bg-orange-primary/10 text-orange-primary px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <motion.a
                    href={project.viewLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center px-4 py-2 bg-orange-primary text-white rounded-lg text-sm hover:bg-orange-600 transition-colors duration-300 flex-1"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaEye className="mr-2" />
                    Live Demo
                  </motion.a>
                  <motion.a
                    href={project.codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center px-4 py-2 bg-gray-100 text-black rounded-lg text-sm hover:bg-gray-200 transition-colors duration-300 flex-1"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaCode className="mr-2" />
                    View Code
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
