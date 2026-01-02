import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import skillsData from '../data/skills'

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05
    }
  },
  exit: {
    opacity: 0,
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1
    }
  }
}

const itemVariants = {
  hidden: { y: 20, opacity: 0, scale: 0.9 },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 20
    }
  },
  exit: { y: 20, opacity: 0, scale: 0.9 }
}

const SkillCard = ({ skill }) => (
  <motion.div
    variants={itemVariants}
    layout
    whileHover={{
      y: -10,
      transition: { duration: 0.2 }
    }}
    className="relative group"
  >
    <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-primary to-orange-600 rounded-2xl blur opacity-0 group-hover:opacity-20 transition duration-500"></div>
    <div className="relative flex flex-col items-center gap-4 p-6 rounded-2xl bg-white/80 dark:bg-dark-card/80 backdrop-blur-md border border-white/20 dark:border-white/10 shadow-xl hover:shadow-2xl transition-all duration-300">
      <div className="relative">
        <div className="absolute -inset-2 bg-orange-primary/10 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <motion.div
          className="relative p-4 rounded-xl bg-gradient-to-br from-white to-gray-50 dark:from-dark-secondary dark:to-dark-card shadow-inner"
          whileHover={{ rotate: [0, -5, 5, 0], scale: 1.1 }}
          transition={{ duration: 0.5 }}
        >
          <img
            src={skill.icon}
            alt={skill.name}
            className="w-12 h-12 object-contain filter drop-shadow-sm group-hover:drop-shadow-md transition-all"
            loading="lazy"
          />
        </motion.div>
      </div>
      <span className="text-sm font-semibold text-gray-700 dark:text-dark-text group-hover:text-orange-primary transition-colors duration-300">
        {skill.name}
      </span>
    </div>
  </motion.div>
)

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('All')
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const categories = useMemo(() => {
    const cats = ['All', ...new Set(skillsData.map(s => s.category))]
    return cats
  }, [])

  const filteredSkills = useMemo(() => {
    return activeCategory === 'All'
      ? skillsData
      : skillsData.filter(s => s.category === activeCategory)
  }, [activeCategory])

  return (
    <section id="skills" className="relative py-24 overflow-hidden bg-cream-lighter dark:bg-dark-bg">
      {/* Background Orbs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-10">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-orange-primary/5 rounded-full blur-[100px]"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            x: [0, -50, 0],
            y: [0, -30, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-[10%] -right-[10%] w-[40%] h-[40%] bg-orange-600/5 rounded-full blur-[100px]"
        />
      </div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl font-extrabold tracking-tight dark:text-dark-text mb-6">
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-primary to-orange-600">Expertise</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-orange-primary to-orange-600 mx-auto rounded-full mb-8" />
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto font-medium">
            A comprehensive overview of my technological toolkit and specialized skills.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-8 py-3 rounded-full text-sm font-bold transition-all duration-500 border-2 ${
                activeCategory === category
                  ? 'bg-orange-primary border-orange-primary text-white shadow-lg shadow-orange-primary/30 scale-105'
                  : 'bg-white/50 dark:bg-dark-secondary/50 border-transparent text-gray-600 dark:text-gray-400 hover:border-orange-primary/30'
              } backdrop-blur-sm`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <motion.div
          ref={ref}
          layout
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-8"
        >
          <AnimatePresence mode='popLayout'>
            {filteredSkills.map((skill) => (
              <SkillCard key={skill.name} skill={skill} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills

