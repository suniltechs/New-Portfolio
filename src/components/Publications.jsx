import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaFilePdf, FaExternalLinkAlt, FaCalendar, FaBook } from 'react-icons/fa'

const Publications = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

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
    hidden: { y: 40, opacity: 0, scale: 0.95 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20
      }
    }
  }

  const publications = [
    {
      id: 1,
      title: "Deepfake Detection Using Deep Learning",
      authors: "Sunil Sowrirajan",
      journal: "IJSREM",
      volume: "Vol. 07, Issue 05",
      year: "2025",
      date: "May 2025",
      link: "https://drive.google.com/file/d/1gYpkaznqcvD78jLQ5Zqo0L7I_nYNODvK/view",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      description: "This research paper explores advanced deep learning techniques for detecting deepfake content in digital media. The study implements convolutional neural networks and recurrent neural networks to analyze facial features and temporal patterns, achieving state-of-the-art accuracy in identifying manipulated media across various datasets.",
      category: "AI Research"
    },
    {
      id: 2,
      title: "Modern Era of JavaScript: What's Shaping the Future of Web Development?",
      authors: "Sunil Sowrirajan",
      journal: "Personal Blog",
      year: "2024",
      date: "December 2024",
      link: "https://dev.to/sunil_s/modern-era-of-javascript--56gn", 
      image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      description: "An in-depth exploration of JavaScript's evolution and the cutting-edge technologies shaping modern web development. Covering Deno, TypeScript, WebAssembly, Svelte, React Server Components, and TensorFlow.js with practical code examples and insights into the future of JavaScript ecosystem.",
      readTime: "8 min read",
      category: "Web Development"
    }
  ]

  return (
    <section id="publications" className="py-12 lg:py-16 relative bg-cream-lighter dark:bg-dark-bg overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        {/* Modern Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white tracking-tight relative inline-block">
            Publications <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-primary to-orange-400">& Blogs</span>
            <motion.span
              className="absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 w-24 h-1 bg-orange-primary rounded-full"
              initial={{ scaleX: 0 }}
              animate={inView ? { scaleX: 1 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
            />
          </h2>
          <p className="text-base text-gray-600 dark:text-gray-400 mt-6 max-w-2xl mx-auto font-medium">
            Research contributions and deep dives into AI and Web Development.
          </p>
        </motion.div>

        <motion.div 
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {publications.map((publication) => (
            <motion.div
              key={publication.id}
              variants={itemVariants}
              className="group relative rounded-3xl p-[1px] bg-gradient-to-b from-gray-200 to-white dark:from-gray-800 dark:to-dark-card hover:from-orange-primary/50 hover:to-orange-primary/10 transition-colors duration-500 overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-orange-primary/20"
            >
              {/* Inner Card */}
              <div className="relative h-full bg-white dark:bg-dark-card rounded-[1.4rem] overflow-hidden flex flex-col">
                
                {/* Image Header */}
                <div className="relative h-48 sm:h-56 overflow-hidden">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                  <img
                    src={publication.image}
                    alt={publication.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent z-10" />
                  
                  {/* Category Badge */}
                  <div className="absolute bottom-4 left-6 z-20">
                    <span className="px-3 py-1 bg-orange-primary/90 backdrop-blur-md text-white text-xs font-bold uppercase tracking-wider rounded-full shadow-lg">
                      {publication.category}
                    </span>
                  </div>
                </div>

                {/* Content Body */}
                <div className="p-6 sm:p-8 relative flex-grow flex flex-col">
                  {/* Floating Action Button */}
                  <a
                    href={publication.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute -top-6 right-6 w-12 h-12 bg-white dark:bg-[#1a1a1a] text-orange-primary rounded-full flex items-center justify-center shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-gray-100 dark:border-gray-800 group-hover:bg-orange-primary group-hover:text-white transition-all duration-300 z-30 hover:scale-110 group-hover:shadow-orange-primary/40"
                    aria-label="Read Publication"
                  >
                    <FaExternalLinkAlt className="w-5 h-5" />
                  </a>

                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 leading-tight group-hover:text-orange-primary transition-colors duration-300 pr-10">
                    {publication.title}
                  </h3>
                  
                  <p className="text-sm font-semibold text-orange-primary mb-5">
                    By {publication.authors}
                  </p>
                  
                  <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base leading-relaxed mb-8 flex-grow line-clamp-4 group-hover:line-clamp-none transition-all duration-500">
                    {publication.description}
                  </p>

                  {/* Metadata Footer */}
                  <div className="grid grid-cols-2 gap-4 pt-6 border-t border-gray-100 dark:border-gray-800 text-sm font-medium text-gray-500 dark:text-gray-400">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-orange-primary/10 flex items-center justify-center text-orange-primary">
                        <FaBook className="w-3.5 h-3.5" />
                      </div>
                      <span className="truncate">{publication.journal}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-orange-primary/10 flex items-center justify-center text-orange-primary">
                        <FaCalendar className="w-3.5 h-3.5" />
                      </div>
                      <span>{publication.date}</span>
                    </div>
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Publications
