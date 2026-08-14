import { motion, useReducedMotion } from 'framer-motion'

const ribbonItems = [
  'Ideas into interfaces',
  'React & modern JavaScript',
  'Node.js & MongoDB',
  'AI-powered products',
  'Responsive by default',
  'Open to opportunities',
]

const SectionRibbon = () => {
  const reduceMotion = useReducedMotion()

  return (
    <section
      className="relative isolate overflow-hidden bg-transparent"
      aria-label="Sunil's development focus"
    >
      <p className="sr-only">
        Sunil builds responsive full-stack and AI-powered products with React,
        Node.js, and MongoDB, and is open to new opportunities.
      </p>

      <div className="relative overflow-hidden border-y-2 border-orange-primary bg-transparent py-4 sm:py-5">
        <motion.div
          aria-hidden="true"
          className="flex w-max items-center"
          animate={reduceMotion ? undefined : { x: ['0%', '-50%'] }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
        >
          {[0, 1].map((group) => (
            <div key={group} className="flex shrink-0 items-center">
              {ribbonItems.map((item, index) => (
                <div
                  key={item}
                  className="flex shrink-0 items-center gap-5 pr-8 text-gray-900 dark:text-white sm:gap-7 sm:pr-12"
                >
                  <span className="whitespace-nowrap text-base font-bold tracking-[-0.02em] sm:text-xl md:text-2xl">
                    {item}
                  </span>
                  <span
                    className={`h-2.5 w-2.5 shrink-0 rotate-45 ${
                      index % 2 === 0
                        ? 'bg-orange-primary shadow-[0_0_16px_rgba(255,107,0,0.8)]'
                        : 'border-2 border-orange-primary bg-transparent'
                    }`}
                  />
                </div>
              ))}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default SectionRibbon
