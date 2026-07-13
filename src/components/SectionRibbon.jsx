import { motion } from 'framer-motion'

const ribbonItems = [
  'MERN Stack',
  'Available 2026',
  'Chennai, India',
  'Full Stack Developer',
  'AI + Data Science',
  'Responsive UI',
]

const SectionRibbon = () => {
  const items = [...ribbonItems, ...ribbonItems]

  return (
    <div className="relative -my-1 overflow-hidden bg-cream-lighter py-5 dark:bg-dark-bg">
      <div className="absolute inset-x-0 top-1/2 h-px bg-orange-primary/20" />
      <div className="-mx-8 rotate-[-2deg] overflow-hidden bg-gray-950 py-4 dark:bg-black">
        <motion.div
          className="flex w-max items-center gap-10"
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 24, repeat: Infinity, ease: 'linear' }}
        >
          {items.map((item, index) => (
            <div
              key={`${item}-${index}`}
              className="flex shrink-0 items-center gap-10 text-white"
            >
              <span className="text-lg font-black tracking-tight sm:text-2xl md:text-3xl">
                {item}
              </span>
              <span className="grid h-3 w-3 place-items-center rounded-full bg-orange-primary shadow-[0_0_18px_rgba(255,107,0,0.75)]" />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

export default SectionRibbon
