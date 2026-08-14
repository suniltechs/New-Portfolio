import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react'

const educationData = [
  {
    degree: "B.Tech Artificial Intelligence and Data Science",
    institution: "Sir Issac Newton College of Engineering and Technology",
    university: "Anna University",
    period: "2021 – 2025",
    status: "Completed",
    location: "Tamil Nadu, India",
    image: "/assets/images/education/college.png",
    highlights: ["AI & ML", "Data Science", "Deep Learning", "Web Technologies"],
  }
]

const Education = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="education" className="py-16 bg-cream-lighter dark:bg-dark-bg overflow-hidden">
      <div className="container mx-auto px-4">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold relative text-gray-900 dark:text-dark-text inline-block">
            My <span className="text-orange-primary">Education</span>
            <motion.span
              className="absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 w-24 h-1 bg-orange-primary rounded-full"
              initial={{ scaleX: 0 }}
              animate={inView ? { scaleX: 1 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
            />
          </h2>
          <p className="text-base text-gray-600 dark:text-gray-400 mt-6 max-w-xl mx-auto font-medium italic">
            "Education is not the learning of facts, but the training of the mind to think."
          </p>
        </motion.div>

        {/* Education Cards */}
        <div ref={ref} className="max-w-5xl mx-auto space-y-8">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: index * 0.15, type: 'spring', bounce: 0.3 }}
              className="group relative rounded-3xl p-[1px] bg-gradient-to-br from-orange-primary/30 via-gray-200 to-orange-primary/10 dark:from-orange-primary/20 dark:via-gray-800 dark:to-orange-primary/5 hover:from-orange-primary/60 hover:to-orange-primary/20 transition-colors duration-500 shadow-xl hover:shadow-orange-primary/20"
            >
              <div className="relative bg-white dark:bg-dark-card rounded-[1.4rem] overflow-hidden">
                <div className="flex flex-col lg:flex-row">

                  {/* Image Panel */}
                  <div className="relative lg:w-2/5 h-56 lg:h-auto overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white dark:to-dark-card z-10 hidden lg:block" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10 lg:hidden" />
                    <img
                      src={edu.image}
                      alt={edu.institution}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    {/* Status badge on image */}
                    <div className="absolute bottom-4 left-4 z-20 lg:hidden">
                      <span className="px-3 py-1 bg-orange-primary/90 text-white text-xs font-bold uppercase tracking-wider rounded-full">
                        {edu.status}
                      </span>
                    </div>
                  </div>

                  {/* Content Panel */}
                  <div className="flex-1 p-8 lg:p-10 flex flex-col justify-center relative">
                    {/* Decorative quote mark */}
                    <div className="absolute top-4 right-6 text-8xl font-serif text-orange-primary/5 dark:text-orange-primary/10 leading-none select-none pointer-events-none">
                      ❝
                    </div>

                    {/* Degree */}
                    <div className="flex items-start gap-4 mb-5">
                      <div className="w-12 h-12 rounded-2xl bg-orange-primary/10 flex items-center justify-center text-orange-primary flex-shrink-0 mt-1">
                        <GraduationCap className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-xl lg:text-2xl font-bold text-gray-900 dark:text-white leading-tight mb-1 group-hover:text-orange-primary transition-colors duration-300">
                          {edu.degree}
                        </h3>
                        <p className="text-orange-primary font-semibold text-sm">{edu.university}</p>
                      </div>
                    </div>

                    {/* Meta info */}
                    <div className="flex flex-wrap gap-4 mb-6 text-sm text-gray-600 dark:text-gray-400">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-orange-primary" />
                        <span>{edu.institution}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-orange-primary" />
                        <span>{edu.period}</span>
                      </div>
                    </div>

                    {/* Status badge (desktop) */}
                    <div className="hidden lg:flex items-center gap-3 mb-6">
                      <span className="flex items-center gap-2 rounded-full border border-orange-primary/30 bg-orange-primary/10 px-4 py-1.5 text-xs font-bold text-orange-primary">
                        <span className="w-2 h-2 rounded-full bg-orange-primary animate-pulse" />
                        {edu.status}
                      </span>
                    </div>

                    {/* Highlights */}
                    <div className="flex items-start gap-3">
                      <Award className="w-4 h-4 text-orange-primary mt-0.5 flex-shrink-0" />
                      <div className="flex flex-wrap gap-2">
                        {edu.highlights.map((tag) => (
                          <span
                            key={tag}
                            className="text-xs px-3 py-1 rounded-full bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-100 dark:border-gray-700 font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Education
