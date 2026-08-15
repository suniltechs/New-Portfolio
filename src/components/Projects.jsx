import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react'

const projects = [
  {
    id: 1,
    title: 'SunDrift Beach Resort',
    subtitle: 'Luxury Hotel Website',
    description:
      'A premium, fully responsive luxury beach resort website with an animated hero slider, glass-morphism UI, and micro-interactions powered by Framer Motion.',
    image: '/assets/images/projects/sundrift.png',
    viewLink: 'https://hotelsundrift.netlify.app/',
    codeLink: 'https://github.com/suniltechs/SandDrift_Beach_Resort',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Redux'],
    featured: false,
  },
  {
    id: 2,
    title: 'Etech',
    subtitle: 'E-learning Platform',
    description:
      'A responsive e-learning platform featuring interactive course listings, user authentication, and a modern UI with custom animations.',
    image: '/assets/images/projects/E learning.png',
    viewLink: 'https://etech-new.netlify.app/',
    codeLink: 'https://github.com/suniltechs/Etech-new',
    tags: ['React', 'Tailwind CSS', 'Vite'],
    featured: false,
  },
  {
    id: 3,
    title: 'Movora',
    subtitle: 'Movie Discovery App',
    description:
      'A sleek movie discovery app with advanced search, trending carousel, and detailed movie info. Cinematic UI powered by Framer Motion.',
    image: '/assets/images/projects/movora.png',
    viewLink: 'https://m0v0ra.netlify.app/',
    codeLink: 'https://github.com/suniltechs/movora',
    tags: ['React', 'Vite', 'Framer Motion', 'OMDb API'],
    featured: false,
  },
  {
    id: 4,
    title: 'X-Clone',
    subtitle: 'Social Media Platform',
    description:
      'A full-stack Twitter clone with MERN stack implementing CRUD, JWT authentication, and real-time updates with a fully responsive design.',
    image: '/assets/images/projects/x clone.png',
    viewLink: 'https://x-clone-jrdx.onrender.com/login',
    codeLink: 'https://github.com/suniltechs/X-Clone.git',
    tags: ['MERN Stack', 'JWT Auth', 'MongoDB'],
    featured: false,
  },
  {
    id: 5,
    title: 'DeepGuard',
    subtitle: 'Deepfake Detection',
    description:
      'AI-powered deepfake detection using Python, Streamlit, and deep learning models (MesoNet, Hugging Face) with 85%+ accuracy.',
    image: '/assets/images/projects/deepguard.png',
    viewLink: 'https://deepguard-g8tg.onrender.com/',
    codeLink: 'https://github.com/suniltechs/Deepfake-Detection.git',
    tags: ['Python', 'Deep Learning', 'Streamlit'],
    featured: false,
  },
  {
    id: 6,
    title: 'Dynamic Gym',
    subtitle: 'Fitness Center Website',
    description:
      'Modern fitness center website with class scheduling, trainer profiles, and smooth animations. Built with pure HTML, CSS, and JavaScript.',
    image: '/assets/images/projects/fitness center.png',
    viewLink: 'https://suniltechs.github.io/Dynamic-Gym/',
    codeLink: 'https://github.com/suniltechs/Dynamic-Gym.git',
    tags: ['HTML5', 'CSS3', 'JavaScript'],
    featured: false,
  },
  {
    id: 7,
    title: 'Hotel Golden Sand',
    subtitle: 'Resort Booking',
    description:
      'Elegant resort booking website featuring room galleries, a booking system, and responsive design with modern CSS techniques.',
    image: '/assets/images/projects/Resort website.png',
    viewLink: 'https://suniltechs.github.io/Resort_website/',
    codeLink: 'https://github.com/suniltechs/Resort_website.git',
    tags: ['Responsive Design', 'CSS Animations', 'Booking System'],
    featured: false,
  }
]

const ProjectCard = ({ project, index }) => {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: index * 0.08, type: 'spring', bounce: 0.3 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="group relative rounded-2xl overflow-hidden bg-white dark:bg-dark-card border border-gray-100 dark:border-gray-800 hover:border-orange-primary/40 shadow-md hover:shadow-xl hover:shadow-orange-primary/10 transition-all duration-300"
    >
      {/* Featured Badge */}
      {project.featured && (
        <div className="absolute top-3 left-3 z-20">
          <span className="px-2.5 py-1 bg-orange-primary text-white text-[10px] font-bold uppercase tracking-wider rounded-full shadow-lg shadow-orange-primary/30">
            Featured
          </span>
        </div>
      )}

      {/* Image */}
      <div className="relative w-full overflow-hidden bg-white dark:bg-dark-card border-b border-gray-100 dark:border-gray-800">
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent z-10 pointer-events-none" />
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-auto block object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
          loading="lazy"
        />
        {/* Hover action buttons on image */}
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 z-20 flex items-center justify-center gap-4"
            >
              <motion.a
                href={project.viewLink}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.05 }}
                className="w-11 h-11 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white flex items-center justify-center hover:bg-orange-primary hover:border-orange-primary transition-all duration-200"
              >
                <ExternalLink className="w-4 h-4" />
              </motion.a>
              <motion.a
                href={project.codeLink}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 }}
                className="w-11 h-11 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white flex items-center justify-center hover:bg-white hover:text-gray-900 transition-all duration-200"
              >
                <Github className="w-4 h-4" />
              </motion.a>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Project number */}
        <span className="absolute bottom-3 right-4 z-20 text-white/50 text-xs font-mono font-bold">
          {String(project.id).padStart(2, '0')}
        </span>
      </div>

      {/* Content */}
      <div className="p-5">
        <p className="text-xs font-bold text-orange-primary uppercase tracking-wider mb-1">{project.subtitle}</p>
        <div className="flex items-start justify-between gap-2 mb-3">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white leading-tight group-hover:text-orange-primary transition-colors duration-300">
            {project.title}
          </h3>
          <a
            href={project.viewLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 w-8 h-8 rounded-full border border-gray-200 dark:border-gray-700 group-hover:border-orange-primary group-hover:bg-orange-primary group-hover:text-white text-gray-500 dark:text-gray-400 flex items-center justify-center transition-all duration-300"
          >
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
        <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-4 line-clamp-2">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-[11px] px-2.5 py-0.5 rounded-full bg-gray-50 dark:bg-gray-800 text-gray-600 dark:text-gray-400 border border-gray-100 dark:border-gray-700 font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

const Projects = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 })

  return (
    <section id="work" className="bg-cream-lighter py-12 dark:bg-dark-bg">
      <div className="container mx-auto px-4">

        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold dark:text-dark-text relative inline-block">
            Projects <span className="text-orange-primary">Made</span>
            <motion.span
              className="absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 w-24 h-1 bg-orange-primary rounded-full"
              initial={{ scaleX: 0 }}
              animate={inView ? { scaleX: 1 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
            />
          </h2>
          <p className="text-base text-gray-600 dark:text-gray-400 mt-6 max-w-2xl mx-auto font-medium">
            A curated collection of projects built with passion, precision, and modern technologies.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

      </div>
    </section>
  )
}

export default Projects
