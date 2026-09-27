import { useState, useEffect, useRef, useCallback } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Link } from 'react-router-dom'
import { ChevronLeft, ChevronRight, Pause, Play, ArrowRight } from 'lucide-react'
import { projects } from '../data/projects'
import ProjectCard from './ProjectCard'

const Projects = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [currentIndex, setCurrentIndex] = useState(0)
  const [itemsPerView, setItemsPerView] = useState(3)
  const [isPaused, setIsPaused] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const [dragStartX, setDragStartX] = useState(null)
  const [dragOffset, setDragOffset] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const trackRef = useRef(null)

  // Dynamically calculate visible items per view
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsPerView(1)
      } else if (window.innerWidth < 1024) {
        setItemsPerView(2)
      } else {
        setItemsPerView(3)
      }
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const maxIndex = Math.max(0, projects.length - itemsPerView)

  // Bounds check when itemsPerView changes
  useEffect(() => {
    if (currentIndex > maxIndex) {
      setCurrentIndex(maxIndex)
    }
  }, [itemsPerView, maxIndex, currentIndex])

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1))
  }, [maxIndex])

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1))
  }, [maxIndex])

  // Auto-swipe timer (pauses when hovered, dragging, or user pauses)
  useEffect(() => {
    if (isPaused || isHovered || isDragging) return

    const interval = setInterval(() => {
      handleNext()
    }, 3500)

    return () => clearInterval(interval)
  }, [isPaused, isHovered, isDragging, handleNext])

  // Keyboard navigation
  const handleKeyDown = (e) => {
    if (e.key === 'ArrowLeft') handlePrev()
    if (e.key === 'ArrowRight') handleNext()
  }

  // Touch swipe support
  const handleTouchStart = (e) => {
    setDragStartX(e.touches[0].clientX)
    setDragOffset(0)
    setIsDragging(true)
  }

  const handleTouchMove = (e) => {
    if (dragStartX !== null) {
      setDragOffset(e.touches[0].clientX - dragStartX)
    }
  }

  const handleTouchEnd = () => {
    if (dragOffset > 50) {
      handlePrev()
    } else if (dragOffset < -50) {
      handleNext()
    }
    setDragStartX(null)
    setDragOffset(0)
    setIsDragging(false)
  }

  // Mouse drag swipe support
  const handleMouseDown = (e) => {
    if (e.target.closest('a') || e.target.closest('button')) return
    setDragStartX(e.clientX)
    setDragOffset(0)
    setIsDragging(true)
  }

  const handleMouseMove = (e) => {
    if (dragStartX !== null && isDragging) {
      setDragOffset(e.clientX - dragStartX)
    }
  }

  const handleMouseUp = () => {
    if (dragOffset > 60) {
      handlePrev()
    } else if (dragOffset < -60) {
      handleNext()
    }
    setDragStartX(null)
    setDragOffset(0)
    setIsDragging(false)
  }

  return (
    <section
      id="work"
      className="bg-cream-lighter py-16 md:py-20 dark:bg-dark-bg transition-colors duration-300 relative overflow-hidden"
      onKeyDown={handleKeyDown}
      tabIndex={0}
      aria-label="Projects Showcase"
    >
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Section Header (Featured Work badge removed) */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
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
          <p className="text-base text-gray-600 dark:text-gray-400 mt-5 max-w-2xl mx-auto font-medium">
            A curated collection of web apps, developer tools, and intelligent systems built with
            modern tech stacks.
          </p>
        </motion.div>

        {/* Manual & Auto Controls Bar */}
        <div className="flex items-center justify-between gap-4 mb-6 px-4">
          {/* Minimal "Show All" button */}
          <Link
            to="/projects"
            className="group inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold text-gray-700 dark:text-gray-300 bg-white dark:bg-dark-card border border-gray-200 dark:border-gray-700 hover:border-orange-primary/50 hover:text-orange-primary dark:hover:text-orange-primary shadow-sm hover:shadow transition-all duration-200"
          >
            <span>Show All</span>
            <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-orange-primary transition-transform duration-200 group-hover:translate-x-1" />
          </Link>

          {/* Navigation Controls: Play/Pause Toggle + Manual Prev & Next */}
          <div className="flex items-center gap-2">
            {/* Auto-play toggle button */}
            <button
              onClick={() => setIsPaused((prev) => !prev)}
              title={isPaused ? 'Resume auto-scroll' : 'Pause auto-scroll'}
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white dark:bg-dark-card border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 hover:text-orange-primary hover:border-orange-primary/40 flex items-center justify-center transition-all duration-200 shadow-sm active:scale-95"
              aria-label={isPaused ? 'Resume auto-scroll' : 'Pause auto-scroll'}
            >
              {isPaused ? (
                <Play className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current text-orange-primary" />
              ) : (
                <Pause className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current" />
              )}
            </button>

            {/* Manual Previous Button */}
            <button
              onClick={handlePrev}
              title="Previous project"
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white dark:bg-dark-card border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-orange-primary hover:border-orange-primary hover:text-white flex items-center justify-center transition-all duration-200 shadow-sm active:scale-95 group"
              aria-label="Previous project"
            >
              <ChevronLeft className="w-5 h-5 transition-transform group-hover:-translate-x-0.5" />
            </button>

            {/* Manual Next Button */}
            <button
              onClick={handleNext}
              title="Next project"
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white dark:bg-dark-card border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-orange-primary hover:border-orange-primary hover:text-white flex items-center justify-center transition-all duration-200 shadow-sm active:scale-95 group"
              aria-label="Next project"
            >
              <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5" />
            </button>
          </div>
        </div>

        {/* Swipeable / Draggable Track Viewport */}
        <div
          className="relative overflow-hidden rounded-3xl cursor-grab active:cursor-grabbing p-1"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => {
            setIsHovered(false)
            handleMouseUp()
          }}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
        >
          {/* Sliding Track with smooth CSS transition */}
          <div
            ref={trackRef}
            className="flex transition-transform duration-500 ease-out will-change-transform"
            style={{
              transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
            }}
          >
            {projects.map((project) => (
              <div
                key={project.id}
                className="w-full sm:w-1/2 lg:w-1/3 flex-shrink-0 px-3 py-2"
                style={{ boxSizing: 'border-box' }}
              >
                <div className="h-full flex">
                  <ProjectCard project={project} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pagination Dots Indicator */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                currentIndex === idx
                  ? 'w-8 bg-orange-primary shadow-md shadow-orange-primary/30'
                  : 'w-2.5 bg-gray-300 dark:bg-gray-700 hover:bg-gray-400 dark:hover:bg-gray-600'
              }`}
              aria-label={`Jump to project set ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
