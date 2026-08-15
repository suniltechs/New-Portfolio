import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import skillsData from '../data/skills'

// Infinite marquee strip
const MarqueeStrip = ({ skills, direction = 'left' }) => {
  const doubled = [...skills, ...skills]
  return (
    <div className="relative overflow-hidden py-2">
      <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-cream-lighter dark:from-dark-bg to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-cream-lighter dark:from-dark-bg to-transparent pointer-events-none" />
      <motion.div
        className="flex gap-4 w-max"
        animate={{ x: direction === 'left' ? ['0%', '-50%'] : ['-50%', '0%'] }}
        transition={{ duration: 35, repeat: Infinity, ease: 'linear' }}
      >
        {doubled.map((skill, i) => (
          <div
            key={i}
            className="flex items-center gap-2.5 px-4 py-2 rounded-full bg-white dark:bg-dark-card border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md hover:border-orange-primary/40 transition-all duration-300 cursor-default group shrink-0"
          >
            <img src={skill.icon} alt={skill.name} className="w-5 h-5 object-contain" loading="lazy" />
            <span className="text-sm font-semibold text-gray-700 dark:text-gray-300 group-hover:text-orange-primary transition-colors">{skill.name}</span>
          </div>
        ))}
      </motion.div>
    </div>
  )
}

const Skills = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 })

  const half = Math.ceil(skillsData.length / 2)
  const row1 = skillsData.slice(0, half)
  const row2 = skillsData.slice(half)

  return (
    <section
      id="skills"
      className="relative z-10 overflow-hidden bg-cream-lighter py-16 dark:bg-dark-bg"
    >
      <div className="container mx-auto px-4 max-w-7xl relative z-10">

        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold dark:text-dark-text relative inline-block">
            Technical <span className="text-orange-primary">Expertise</span>
            <motion.span
              className="absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 w-24 h-1 bg-orange-primary rounded-full"
              initial={{ scaleX: 0 }}
              animate={inView ? { scaleX: 1 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
            />
          </h2>
          <p className="text-base text-gray-600 dark:text-gray-400 mt-6 max-w-2xl mx-auto font-medium">
            A curated toolkit of technologies I use to build modern, scalable applications.
          </p>
        </motion.div>

      </div>

      {/* Dual Marquee — full width, outside container */}
      <div className="flex flex-col gap-4 mt-4">
        <MarqueeStrip skills={row1} direction="left" />
        <MarqueeStrip skills={row2} direction="right" />
      </div>

    </section>
  )
}

export default Skills
