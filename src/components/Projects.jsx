import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react'

const projects = [
  {
    id: 1,
    title: 'Fitness Center Student Management Website',
    subtitle: 'Gym & Student Management',
    description:
      'Modern fitness center and student management web application featuring class scheduling, trainer administration, member tracking, and smooth responsive design.',
    image: '/assets/images/projects/dynamic_gym.png',
    viewLink: 'https://dynamicgymfrontend.netlify.app/',
    codeLink: 'https://github.com/suniltechs/Dynamicfront',
    tags: ['React', 'JavaScript', 'Tailwind CSS', 'Vite'],
    featured: false,
  },
  {
    id: 2,
    title: 'DevLog Stream',
    subtitle: 'AI Log Viewer Extension',
    description:
      'Real-time terminal monitoring and AI log viewer extension for developers. Streams live command outputs and application logs directly to a web dashboard with intelligent debugging insights.',
    image: '/assets/images/projects/devlog.png',
    viewLink: 'https://www.npmjs.com/package/devlog-stream',
    codeLink: 'https://github.com/suniltechs/devlog_ui_client',
    tags: ['Node.js', 'CLI', 'WebSockets', 'Developer Tools', 'NPM'],
    featured: false,
  },
  {
    id: 3,
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
    id: 4,
    title: 'WakeStop',
    subtitle: 'Location Alarm Mobile App',
    description:
      'A React Native mobile app that automatically silences alarms when you reach your destination. Set a location-based alarm and WakeStop wakes you up as soon as you arrive — perfect for commuters.',
    mobileImages: [
      '/assets/images/projects/wakestop/1.jpeg',
      '/assets/images/projects/wakestop/2.jpeg',
      '/assets/images/projects/wakestop/3.jpeg',
    ],
    viewLink: 'https://github.com/suniltechs/WakeStop',
    codeLink: 'https://github.com/suniltechs/WakeStop',
    tags: ['React Native', 'Expo', 'Mobile App', 'Geolocation'],
    featured: false,
  },
  {
    id: 5,
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
    id: 6,
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
    id: 7,
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
    id: 8,
    title: 'Smart Cool Technologies',
    subtitle: 'Service & Repair Website',
    description:
      'Professional landing page for Smart Cool Technologies offering AC, washing machine, and refrigeration repair services with modern UI and direct inquiry features.',
    image: '/assets/images/projects/smartcool.png',
    viewLink: 'https://smartcooltechnologies.netlify.app/',
    codeLink: 'https://github.com/suniltechs/SMT_LandingPage',
    tags: ['React', 'Tailwind CSS', 'Vite', 'Responsive Design'],
    featured: false,
  },
  {
    id: 9,
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
]

/* Single Phone Mockup — animated via framer-motion */
const PhoneFrame = ({ src, alt, baseRotate, baseX, baseY, hoverRotate, hoverX, hoverY, zIndex, baseScale, hoverScale, hovered, isCenter }) => (
  <motion.div
    animate={{
      rotate: hovered ? hoverRotate : baseRotate,
      x: hovered ? hoverX : baseX,
      y: hovered ? hoverY : baseY,
      scale: hovered ? hoverScale : baseScale,
    }}
    transition={{ type: 'spring', stiffness: 240, damping: 24 }}
    style={{ position: 'absolute', zIndex, transformOrigin: 'bottom center' }}
  >
    {/* Base shadow on ground */}
    <div
      style={{
        position: 'absolute',
        bottom: -7,
        left: '50%',
        transform: 'translateX(-50%)',
        width: isCenter ? 56 : 44,
        height: 10,
        borderRadius: '50%',
        background: 'radial-gradient(ellipse at center, rgba(0,0,0,0.32) 0%, rgba(0,0,0,0.08) 45%, transparent 70%)',
        filter: 'blur(3px)',
        pointerEvents: 'none',
        zIndex: -1,
      }}
    />

    {/* Center phone: orange glow on hover; side phones: subtle shadow glow */}
    <motion.div
      animate={{
        opacity: hovered ? (isCenter ? 0.65 : 0.3) : 0,
        scale: hovered ? 1.08 : 0.85,
      }}
      transition={{ duration: 0.35 }}
      style={{
        position: 'absolute',
        inset: -5,
        borderRadius: 20,
        background: isCenter
          ? 'radial-gradient(ellipse, rgba(249,115,22,0.5) 0%, transparent 70%)'
          : 'radial-gradient(ellipse, rgba(0,0,0,0.25) 0%, transparent 70%)',
        filter: 'blur(7px)',
        zIndex: -1,
      }}
    />

    {/* Phone shell */}
    <div
      style={{
        width: isCenter ? 64 : 53,
        height: isCenter ? 138 : 115,
        borderRadius: isCenter ? 16 : 13,
        background: 'linear-gradient(160deg, #2c2c2c 0%, #0d0d0d 100%)',
        border: isCenter ? '2px solid #4a4a4a' : '1.5px solid #3c3c3c',
        boxShadow: isCenter
          ? '0 12px 32px rgba(0,0,0,0.45), 0 3px 10px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.1)'
          : '0 8px 20px rgba(0,0,0,0.38), 0 2px 6px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.06)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Dynamic Island */}
      <div
        style={{
          position: 'absolute',
          top: isCenter ? 5 : 4,
          left: '50%',
          transform: 'translateX(-50%)',
          width: isCenter ? 20 : 15,
          height: isCenter ? 6 : 4.5,
          background: '#0f0f0f',
          borderRadius: 5,
          zIndex: 2,
        }}
      />
      {/* Screen */}
      <div
        style={{
          position: 'absolute',
          inset: isCenter ? 2.5 : 2,
          borderRadius: isCenter ? 14 : 11,
          overflow: 'hidden',
          background: '#000',
        }}
      >
        <img src={src} alt={alt} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} loading="lazy" />
      </div>
      {/* Right power button */}
      <div style={{ position: 'absolute', right: -2, top: isCenter ? 32 : 26, width: 2, height: isCenter ? 18 : 14, background: '#555', borderRadius: '0 2px 2px 0' }} />
      {/* Left volume buttons */}
      <div style={{ position: 'absolute', left: -2, top: isCenter ? 26 : 22, width: 2, height: isCenter ? 12 : 10, background: '#555', borderRadius: '2px 0 0 2px' }} />
      <div style={{ position: 'absolute', left: -2, top: isCenter ? 42 : 35, width: 2, height: isCenter ? 12 : 10, background: '#555', borderRadius: '2px 0 0 2px' }} />
      {/* Home indicator */}
      <div style={{ position: 'absolute', bottom: 4, left: '50%', transform: 'translateX(-50%)', width: isCenter ? 20 : 16, height: 2, borderRadius: 2, background: 'rgba(255,255,255,0.22)', zIndex: 2 }} />
    </div>
  </motion.div>
)

/* 3-Phone Fan Showcase */
const MobileAppShowcase = ({ images, hovered, viewLink, codeLink, projectId }) => (
  <div
    style={{
      position: 'relative',
      width: '100%',
      aspectRatio: '1920 / 885',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
    }}
    className="bg-white dark:bg-dark-card border-b border-gray-100 dark:border-gray-800"
  >
    {/* Subtle hover warmth */}
    <motion.div
      animate={{ opacity: hovered ? 0.35 : 0 }}
      transition={{ duration: 0.4 }}
      style={{
        position: 'absolute',
        inset: 0,
        background: 'radial-gradient(ellipse at 50% 60%, rgba(249,115,22,0.1) 0%, transparent 65%)',
        pointerEvents: 'none',
      }}
    />

    {/* Left phone */}
    <PhoneFrame
      src={images[0]} alt="App screen 1"
      baseRotate={-15} baseX={-46} baseY={4} baseScale={0.92}
      hoverRotate={-19} hoverX={-54} hoverY={6} hoverScale={0.90}
      zIndex={1} hovered={hovered} isCenter={false}
    />

    {/* Center phone — larger, lifts on hover */}
    <PhoneFrame
      src={images[1]} alt="App screen 2"
      baseRotate={0} baseX={0} baseY={0} baseScale={1}
      hoverRotate={0} hoverX={0} hoverY={-6} hoverScale={1.04}
      zIndex={3} hovered={hovered} isCenter={true}
    />

    {/* Right phone */}
    <PhoneFrame
      src={images[2]} alt="App screen 3"
      baseRotate={15} baseX={46} baseY={4} baseScale={0.92}
      hoverRotate={19} hoverX={54} hoverY={6} hoverScale={0.90}
      zIndex={2} hovered={hovered} isCenter={false}
    />

    {/* Hover overlay: darken + show buttons */}
    <AnimatePresence>
      {hovered && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          style={{
            position: 'absolute',
            inset: 0,
            zIndex: 20,
            background: 'rgba(0,0,0,0.28)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 16,
          }}
        >
          <motion.a
            href={viewLink} target="_blank" rel="noopener noreferrer"
            initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.05 }}
            className="w-11 h-11 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white flex items-center justify-center hover:bg-orange-primary hover:border-orange-primary transition-all duration-200"
          >
            <ExternalLink className="w-4 h-4" />
          </motion.a>
          <motion.a
            href={codeLink} target="_blank" rel="noopener noreferrer"
            initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.1 }}
            className="w-11 h-11 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white flex items-center justify-center hover:bg-white hover:text-gray-900 transition-all duration-200"
          >
            <Github className="w-4 h-4" />
          </motion.a>
        </motion.div>
      )}
    </AnimatePresence>

    <span style={{ position: 'absolute', bottom: 10, right: 16, zIndex: 10, fontSize: 11, fontFamily: 'monospace', fontWeight: 700 }} className="text-gray-300 dark:text-white/40">
      {String(projectId).padStart(2, '0')}
    </span>
  </div>
)

/* Project Card */
const ProjectCard = ({ project, index }) => {
  const [hovered, setHovered] = useState(false)
  const isMobileApp = Boolean(project.mobileImages)

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: index * 0.08, type: 'spring', bounce: 0.3 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="group relative rounded-2xl overflow-hidden bg-white dark:bg-dark-card border border-gray-100 dark:border-gray-800 hover:border-orange-primary/40 shadow-md hover:shadow-xl hover:shadow-orange-primary/10 transition-all duration-300 flex flex-col h-full"
    >
      {project.featured && (
        <div className="absolute top-3 left-3 z-20">
          <span className="px-2.5 py-1 bg-orange-primary text-white text-[10px] font-bold uppercase tracking-wider rounded-full shadow-lg shadow-orange-primary/30">
            Featured
          </span>
        </div>
      )}

      {isMobileApp ? (
        <MobileAppShowcase images={project.mobileImages} hovered={hovered} viewLink={project.viewLink} codeLink={project.codeLink} projectId={project.id} />
      ) : (
        <div className="relative w-full overflow-hidden bg-white dark:bg-dark-card border-b border-gray-100 dark:border-gray-800">
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent z-10 pointer-events-none" />
          <img src={project.image} alt={project.title} className="w-full h-auto block object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out" loading="lazy" />
          <AnimatePresence>
            {hovered && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0 z-20 flex items-center justify-center gap-4">
                <motion.a href={project.viewLink} target="_blank" rel="noopener noreferrer" initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.05 }} className="w-11 h-11 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white flex items-center justify-center hover:bg-orange-primary hover:border-orange-primary transition-all duration-200">
                  <ExternalLink className="w-4 h-4" />
                </motion.a>
                <motion.a href={project.codeLink} target="_blank" rel="noopener noreferrer" initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.1 }} className="w-11 h-11 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white flex items-center justify-center hover:bg-white hover:text-gray-900 transition-all duration-200">
                  <Github className="w-4 h-4" />
                </motion.a>
              </motion.div>
            )}
          </AnimatePresence>
          <span className="absolute bottom-3 right-4 z-20 text-white/50 text-xs font-mono font-bold">
            {String(project.id).padStart(2, '0')}
          </span>
        </div>
      )}

      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          <p className="text-xs font-bold text-orange-primary uppercase tracking-wider mb-1">{project.subtitle}</p>
          <div className="flex items-start justify-between gap-2 mb-3">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white leading-tight group-hover:text-orange-primary transition-colors duration-300">
              {project.title}
            </h3>
            <a href={project.viewLink} target="_blank" rel="noopener noreferrer" className="flex-shrink-0 w-8 h-8 rounded-full border border-gray-200 dark:border-gray-700 group-hover:border-orange-primary group-hover:bg-orange-primary group-hover:text-white text-gray-500 dark:text-gray-400 flex items-center justify-center transition-all duration-300">
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-4 line-clamp-2">
            {project.description}
          </p>
        </div>
        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span key={tag} className="text-[11px] px-2.5 py-0.5 rounded-full bg-gray-50 dark:bg-gray-800 text-gray-600 dark:text-gray-400 border border-gray-100 dark:border-gray-700 font-medium">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

/* Projects Section */
const Projects = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 })

  return (
    <section id="work" className="bg-cream-lighter py-12 dark:bg-dark-bg">
      <div className="container mx-auto px-4">
        <motion.div ref={ref} initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold dark:text-dark-text relative inline-block">
            Projects <span className="text-orange-primary">Made</span>
            <motion.span className="absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 w-24 h-1 bg-orange-primary rounded-full" initial={{ scaleX: 0 }} animate={inView ? { scaleX: 1 } : {}} transition={{ delay: 0.4, duration: 0.6 }} />
          </h2>
          <p className="text-base text-gray-600 dark:text-gray-400 mt-6 max-w-2xl mx-auto font-medium">
            A curated collection of projects built with passion, precision, and modern technologies.
          </p>
        </motion.div>
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
