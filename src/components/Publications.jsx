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
    <section id="publications" className="py-20 bg-white dark:bg-dark-bg">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold relative text-black dark:text-dark-text inline-block">
            My Publications<span className="text-primary"> and Blogs</span>
            <motion.span 
              className="absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 w-16 h-1 bg-primary dark:bg-dark-primary"
              initial={{ scaleX: 0 }}
              animate={inView ? { scaleX: 1 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
            />
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mt-6 max-w-2xl mx-auto">
            Research contributions and academic publications in the field of Artificial Intelligence and Deep Learning
          </p>
        </motion.div>

        <motion.div 
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          {publications.map((publication, index) => (
            <motion.div
              key={publication.id}
              variants={itemVariants}
              className="bg-white dark:bg-dark-card rounded-2xl shadow-xl overflow-hidden border border-gray-200 dark:border-dark-secondary hover:shadow-2xl transition-all duration-300 mb-8"
              whileHover={{ y: -8 }}
            >
              <div className="lg:flex">
                {/* Publication Image */}
                <motion.div 
                  className="lg:w-2/5 relative overflow-hidden"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <img
                    src={publication.image}
                    alt={publication.title}
                    className="w-full h-64 lg:h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <span className="text-white text-sm font-medium bg-primary dark:bg-dark-primary px-3 py-1 rounded-full">
                      {publication.category}
                    </span>
                  </div>
                </motion.div>

                {/* Publication Details */}
                <div className="p-8 lg:w-3/5">
                  <motion.h3 
                    className="text-2xl font-bold mb-4 text-black dark:text-dark-text leading-tight"
                    variants={itemVariants}
                  >
                    {publication.title}
                  </motion.h3>

                  <motion.p 
                    className="text-gray-700 dark:text-gray-300 mb-4 text-lg font-medium"
                    variants={itemVariants}
                  >
                    {publication.authors}
                  </motion.p>

                  <motion.p 
                    className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed"
                    variants={itemVariants}
                  >
                    {publication.description}
                  </motion.p>

                  {/* Publication Metadata */}
                  <motion.div 
                    className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6"
                    variants={itemVariants}
                  >
                    <div className="flex items-center text-gray-600 dark:text-gray-400">
                      <FaBook className="mr-3 text-primary dark:text-dark-primary" />
                      <span className="font-medium">{publication.journal}</span>
                    </div>
                    <div className="flex items-center text-gray-600 dark:text-gray-400">
                      <FaFilePdf className="mr-3 text-primary dark:text-dark-primary" />
                      <span className="font-medium">{publication.volume ? publication.volume : publication.readTime}</span>
                    </div>
                    <div className="flex items-center text-gray-600 dark:text-gray-400">
                      <FaCalendar className="mr-3 text-primary dark:text-dark-primary" />
                      <span className="font-medium">{publication.date}</span>
                    </div>
                    <div className="flex items-center text-gray-600 dark:text-gray-400">
                      <span className="w-3 h-3 bg-green-500 rounded-full mr-3"></span>
                      <span className="font-medium">Published</span>
                    </div>
                  </motion.div>

                  {/* Action Buttons */}
                  <motion.div 
                    className="flex flex-wrap gap-4"
                    variants={itemVariants}
                  >
                    <a
                      href={publication.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-6 py-3 bg-primary dark:bg-dark-primary text-white rounded-lg font-medium hover:bg-opacity-90 transition-all duration-300 hover:shadow-lg"
                    >
                      <FaExternalLinkAlt className="mr-2" />
                      Read Online
                    </a>
                  </motion.div>
                </div>
              </div>

              {/* Decorative Elements
              <div className="absolute top-4 right-4 w-3 h-3 bg-primary dark:bg-dark-primary rounded-full opacity-60"></div>
              <div className="absolute bottom-4 left-4 w-2 h-2 bg-primary dark:bg-dark-primary rounded-full opacity-40"></div> */}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Publications
