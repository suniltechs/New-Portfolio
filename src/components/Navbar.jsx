import { useState, useEffect } from 'react'
import { FaArrowRight, FaBars, FaTimes } from 'react-icons/fa'
import { motion, AnimatePresence } from 'framer-motion'
import ThemeToggle from './ThemeToggle'

const Navbar = ({ activeSection }) => {
  const [isOpen, setIsOpen] = useState(false)

  // Lock scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setIsOpen(false)
      }
    }

    window.addEventListener('keydown', handleEscape)
    return () => window.removeEventListener('keydown', handleEscape)
  }, [])

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'education', label: 'Education' },
    { id: 'work', label: 'Work' },
    { id: 'publications', label: 'Publications' },
    { id: 'experience', label: 'Experience' },
  ]

  const isHeroSection = activeSection === 'home'
  const isTransparentHeader = isHeroSection && !isOpen

  const scrollToSection = (sectionId) => {
    setIsOpen(false)
    
    // Small delay to let the menu closing animation start
    setTimeout(() => {
      const element = document.getElementById(sectionId)
      if (element) {
        const offset = 64 // Height of the compact fixed navbar
        const bodyRect = document.body.getBoundingClientRect().top
        const elementRect = element.getBoundingClientRect().top
        const elementPosition = elementRect - bodyRect
        const offsetPosition = elementPosition - offset

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        })
      }
    }, 100)
  }

  const menuVariants = {
    hidden: { opacity: 0, y: -18, scale: 0.98 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: 'spring',
        damping: 26,
        stiffness: 260,
        staggerChildren: 0.04,
        delayChildren: 0.08,
      },
    },
    exit: {
      opacity: 0,
      y: -18,
      scale: 0.98,
      transition: { duration: 0.18 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 12 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <>
      <header
        className={`font-nav fixed left-0 top-0 z-[60] w-full border-b px-5 py-4 transition-all duration-300 sm:px-8 sm:py-5 ${
          isTransparentHeader
            ? 'border-transparent bg-transparent'
            : 'border-gray-200/80 bg-cream-lighter/95 shadow-[0_10px_30px_-24px_rgba(37,52,63,0.55)] backdrop-blur-xl dark:border-white/10 dark:bg-dark-bg/95'
        }`}
      >
        <div className="mx-auto flex w-full max-w-[92rem] items-center justify-between gap-5">
          <motion.a 
            href="#home" 
            className={`group shrink-0 text-xl font-bold tracking-[-0.045em] transition-all duration-300 hover:-translate-y-0.5 sm:text-2xl ${
              isTransparentHeader
                ? 'text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)]'
                : 'text-dark-bg hover:text-orange-primary dark:text-white'
            }`}
            onClick={(e) => {
              e.preventDefault()
              scrollToSection('home')
            }}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <span className="text-orange-primary">&lt;</span>Sunil<span className="inline-block origin-bottom text-orange-primary transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110"> /&gt;</span>
          </motion.a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:block" aria-label="Primary navigation">
            <ul className="flex items-center gap-5 xl:gap-8">
              {navLinks.map((link, index) => (
                <motion.li 
                  key={link.id}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <a
                    href={`#${link.id}`}
                    onClick={(e) => {
                      e.preventDefault()
                      scrollToSection(link.id)
                    }}
                    className={`relative block py-2 text-[13px] font-medium tracking-[0.025em] transition-colors duration-300 xl:text-sm ${
                      activeSection === link.id 
                        ? 'text-orange-primary drop-shadow-[0_2px_8px_rgba(0,0,0,0.35)]'
                        : isTransparentHeader
                          ? 'text-white/90 drop-shadow-[0_2px_8px_rgba(0,0,0,0.75)] hover:text-orange-primary'
                          : 'text-dark-bg hover:text-orange-primary dark:text-white/80 dark:hover:text-orange-primary'
                    }`}
                  >
                    {activeSection === link.id && (
                      <motion.span 
                        layoutId="activeDesktopNav"
                        className="absolute inset-x-0 bottom-0 h-0.5 rounded-full bg-orange-primary shadow-[0_2px_8px_rgba(255,155,81,0.45)]"
                        transition={{ type: 'spring', stiffness: 420, damping: 34 }}
                      />
                    )}
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <a 
              href="#contact"
              onClick={(e) => {
                e.preventDefault()
                scrollToSection('contact')
              }}
              className={`group relative hidden items-center gap-2 py-2 text-[13px] font-semibold tracking-[0.035em] transition-all duration-300 hover:-translate-y-0.5 md:inline-flex xl:text-sm ${
                isTransparentHeader
                  ? 'text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.75)] hover:text-orange-primary'
                  : 'text-dark-bg hover:text-orange-primary dark:text-white dark:hover:text-orange-primary'
              }`}
            >
              <span>Let's Talk</span>
              <FaArrowRight className="text-[11px] transition-transform duration-300 group-hover:translate-x-1" />
              <span className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-orange-primary transition-transform duration-300 group-hover:scale-x-100" />
            </a>
            <div className="grid h-10 w-10 place-items-center drop-shadow-[0_2px_8px_rgba(0,0,0,0.45)] transition-transform duration-300 hover:rotate-6 hover:scale-110">
              <ThemeToggle />
            </div>
            
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="grid h-11 w-11 place-items-center rounded-full bg-orange-primary text-white shadow-lg shadow-orange-primary/25 transition-transform hover:scale-105 active:scale-95 lg:hidden"
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
              aria-controls="mobile-navigation"
            >
              {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-[50] bg-dark-bg/45 backdrop-blur-sm dark:bg-black/55 lg:hidden"
            />
            
            {/* Menu Content */}
            <motion.nav 
              id="mobile-navigation"
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed left-4 right-4 top-24 z-[55] max-h-[calc(100dvh-7rem)] overflow-y-auto rounded-[2rem] border border-gray-300/70 bg-cream-lighter/95 p-4 shadow-2xl shadow-dark-bg/25 backdrop-blur-2xl dark:border-white/10 dark:bg-dark-card/95 lg:hidden"
              aria-label="Mobile navigation"
            >
              <ul className="grid gap-2">
                {navLinks.map((link, index) => (
                  <motion.li 
                    key={link.id}
                    variants={itemVariants}
                    transition={{ delay: index * 0.05 }}
                  >
                    <button
                      onClick={() => scrollToSection(link.id)}
                      className={`group flex w-full items-center justify-between rounded-2xl px-4 py-3.5 text-left text-base font-bold transition-all ${
                        activeSection === link.id 
                          ? 'bg-orange-primary text-white shadow-lg shadow-orange-primary/20' 
                          : 'text-dark-bg hover:bg-white dark:text-dark-text dark:hover:bg-white/5'
                      }`}
                    >
                      <span>{link.label}</span>
                      <span className={`grid h-8 w-8 place-items-center rounded-full transition-transform group-hover:translate-x-0.5 ${
                        activeSection === link.id
                          ? 'bg-white/20 text-white'
                          : 'bg-orange-primary/10 text-orange-primary'
                      }`}>
                        <FaArrowRight className="text-xs" />
                      </span>
                    </button>
                  </motion.li>
                ))}
              </ul>

              <motion.button
                variants={itemVariants}
                onClick={() => scrollToSection('contact')}
                className="mt-4 flex w-full items-center justify-center gap-2 rounded-2xl bg-gray-950 px-5 py-4 text-sm font-black text-white shadow-lg shadow-gray-950/10 transition-all hover:bg-orange-primary dark:bg-white dark:text-gray-950 dark:hover:bg-orange-primary dark:hover:text-white"
              >
                <span>Start a Conversation</span>
                <FaArrowRight className="text-xs" />
              </motion.button>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar
