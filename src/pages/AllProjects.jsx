import { useState, useEffect, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowLeft, Search } from 'lucide-react'
import { projects } from '../data/projects'
import ProjectCard from '../components/ProjectCard'
import ThemeToggle from '../components/ThemeToggle'
import Footer from '../components/Footer'

const CATEGORIES = ['All', 'Web Apps', 'Mobile', 'AI & ML', 'Dev Tools']

export const AllProjects = () => {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')

  // Scroll to top on page mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [])

  // Filter projects based on category and search query
  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      // Category match
      let matchesCategory = true
      if (selectedCategory === 'Web Apps') {
        matchesCategory =
          project.tags.some((t) => ['React', 'Vite', 'MERN Stack'].includes(t)) &&
          !project.mobileImages
      } else if (selectedCategory === 'Mobile') {
        matchesCategory = Boolean(project.mobileImages) || project.tags.includes('React Native')
      } else if (selectedCategory === 'AI & ML') {
        matchesCategory =
          project.tags.some((t) => ['Python', 'Deep Learning', 'Streamlit'].includes(t)) ||
          project.title.toLowerCase().includes('deepguard')
      } else if (selectedCategory === 'Dev Tools') {
        matchesCategory =
          project.tags.some((t) => ['Node.js', 'CLI', 'WebSockets', 'NPM'].includes(t)) ||
          project.title.toLowerCase().includes('devlog')
      }

      // Search match
      const query = searchQuery.trim().toLowerCase()
      const matchesSearch =
        !query ||
        project.title.toLowerCase().includes(query) ||
        project.subtitle.toLowerCase().includes(query) ||
        project.description.toLowerCase().includes(query) ||
        project.tags.some((tag) => tag.toLowerCase().includes(query))

      return matchesCategory && matchesSearch
    })
  }, [selectedCategory, searchQuery])

  return (
    <div className="min-h-screen bg-cream-lighter dark:bg-dark-bg text-gray-900 dark:text-dark-text transition-colors duration-300 flex flex-col justify-between">
      <div>
        {/* Sticky Header Bar */}
        <header className="sticky top-0 z-50 backdrop-blur-xl bg-cream-lighter/85 dark:bg-dark-bg/85 border-b border-gray-200/80 dark:border-gray-800/80 transition-colors duration-300">
          <div className="container mx-auto px-4 max-w-7xl h-16 flex items-center justify-between gap-4">
            {/* Back button */}
            <Link
              to="/#work"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-sm font-semibold text-gray-700 dark:text-gray-300 hover:text-orange-primary dark:hover:text-orange-primary bg-white/70 dark:bg-dark-card/70 border border-gray-200 dark:border-gray-700/60 shadow-sm hover:shadow transition-all duration-200 group"
            >
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
              <span>Back to Portfolio</span>
            </Link>

            {/* Actions: Theme Toggle */}
            <div className="flex items-center gap-3">
              <ThemeToggle />
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="container mx-auto px-4 max-w-7xl py-12 md:py-16">
          {/* Page Hero Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4">
              All <span className="text-orange-primary">Projects</span>
            </h1>

            <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed font-normal">
              A comprehensive collection of web applications, mobile experiences, developer tools,
              and AI systems crafted with modern architecture and thoughtful UX.
            </p>
          </motion.div>

          {/* Filter Controls & Search */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10 pb-6 border-b border-gray-200/70 dark:border-gray-800/70">
            {/* Category Tabs */}
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 w-full md:w-auto">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-xl text-xs md:text-sm font-semibold transition-all duration-200 ${
                    selectedCategory === cat
                      ? 'bg-orange-primary text-white shadow-md shadow-orange-primary/25 scale-[1.02]'
                      : 'bg-white dark:bg-dark-card text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-800 hover:border-orange-primary/40 hover:text-orange-primary'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search Bar */}
            <div className="relative w-full md:w-72">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500" />
              <input
                type="text"
                placeholder="Search by name or tech..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 text-sm rounded-xl bg-white dark:bg-dark-card border border-gray-200 dark:border-gray-800 text-gray-800 dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:border-orange-primary dark:focus:border-orange-primary shadow-sm transition-all"
              />
            </div>
          </div>

          {/* Results Counter */}
          <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400 font-medium mb-6 px-1">
            <span>
              Showing <strong className="text-orange-primary">{filteredProjects.length}</strong> of{' '}
              <strong>{projects.length}</strong> projects
            </span>
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="text-orange-primary hover:underline"
              >
                Clear search
              </button>
            )}
          </div>

          {/* Projects Grid */}
          <AnimatePresence mode="popLayout">
            {filteredProjects.length > 0 ? (
              <motion.div
                layout
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch"
              >
                {filteredProjects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    layout
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="h-full flex"
                  >
                    <ProjectCard project={project} />
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-20 bg-white/50 dark:bg-dark-card/50 rounded-3xl border border-dashed border-gray-200 dark:border-gray-800 my-8"
              >
                <p className="text-base font-semibold text-gray-600 dark:text-gray-400 mb-2">
                  No projects found matching your criteria.
                </p>
                <button
                  onClick={() => {
                    setSelectedCategory('All')
                    setSearchQuery('')
                  }}
                  className="mt-3 px-4 py-2 text-xs font-bold text-orange-primary bg-orange-primary/10 hover:bg-orange-primary/20 rounded-xl transition-all"
                >
                  Reset Filters
                </button>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Footer Contact CTA Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-20 p-8 md:p-12 rounded-3xl bg-gradient-to-r from-orange-primary/10 via-amber-500/5 to-orange-primary/10 border border-orange-primary/20 text-center relative overflow-hidden"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-3 dark:text-white">
              Interested in collaborating or building something together?
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-xl mx-auto mb-6 text-sm md:text-base">
              Feel free to check out my experience or reach out directly for freelance opportunities
              or full-time roles.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/#contact"
                className="px-6 py-3 rounded-xl bg-orange-primary hover:bg-orange-600 text-white font-semibold text-sm shadow-lg shadow-orange-primary/30 transition-all hover:scale-[1.02] active:scale-95"
              >
                Get in Touch
              </Link>
              <Link
                to="/"
                className="px-6 py-3 rounded-xl bg-white dark:bg-dark-card text-gray-800 dark:text-gray-200 border border-gray-200 dark:border-gray-700 font-semibold text-sm hover:border-orange-primary/40 transition-all"
              >
                Back to Home
              </Link>
            </div>
          </motion.div>
        </main>
      </div>

      {/* Footer Section */}
      <Footer />
    </div>
  )
}

export default AllProjects
