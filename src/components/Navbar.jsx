import { useState, useEffect } from 'react'
import { FaArrowRight, FaBars, FaCode, FaTimes } from 'react-icons/fa'
import { motion, AnimatePresence } from 'framer-motion'
import ThemeToggle from './ThemeToggle'

const Navbar = ({ activeSection }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

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

  const scrollToSection = (sectionId) => {
    setIsOpen(false)
    
    // Small delay to let the menu closing animation start
    setTimeout(() => {
      const element = document.getElementById(sectionId)
      if (element) {
        const offset = 80 // Height of the fixed navbar
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
        className={`fixed left-0 top-0 w-full z-[60] transition-all duration-500 ${
          scrolled || isOpen
            ? 'py-3' 
            : 'py-5'
        }`}
      >
        <div className={`mx-auto flex w-[min(92rem,calc(100%-2rem))] items-center justify-between rounded-full border px-3 py-2 transition-all duration-500 sm:px-4 ${
          scrolled || isOpen
            ? 'border-orange-primary/15 bg-white/85 shadow-[0_18px_55px_-28px_rgba(37,52,63,0.45)] backdrop-blur-2xl dark:border-white/10 dark:bg-dark-bg/85'
            : 'border-transparent bg-white/45 backdrop-blur-md dark:bg-dark-bg/35'
        }`}>
          <motion.a 
            href="#home" 
            className="group flex min-w-0 items-center gap-3 rounded-full pr-2 text-orange-primary transition-transform hover:scale-[1.02]"
            onClick={(e) => {
              e.preventDefault()
              scrollToSection('home')
            }}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <div className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-orange-primary text-white shadow-lg shadow-orange-primary/25 transition-transform group-hover:rotate-6">
              <FaCode className="text-lg" />
            </div>
            <div className="leading-none">
              <span className="block text-lg font-black tracking-tight text-gray-950 dark:text-white sm:text-xl">Sunil</span>
            </div>
          </motion.a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:block" aria-label="Primary navigation">
            <ul className="flex items-center rounded-full border border-gray-200/80 bg-white/70 p-1 shadow-inner shadow-white/60 dark:border-white/10 dark:bg-white/5 dark:shadow-none">
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
                    className={`relative isolate block overflow-hidden rounded-full px-4 py-2 text-sm font-semibold transition-colors duration-300 ${
                      activeSection === link.id 
                        ? 'text-white' 
                        : 'text-gray-600 hover:text-gray-950 dark:text-gray-300 dark:hover:text-white'
                    }`}
                  >
                    {activeSection === link.id && (
                      <motion.span 
                        layoutId="activeDesktopNav"
                        className="absolute inset-0 -z-10 rounded-full bg-orange-primary shadow-lg shadow-orange-primary/20"
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
              className="hidden items-center gap-2 rounded-full bg-gray-950 px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-gray-950/10 transition-all duration-300 hover:-translate-y-0.5 hover:bg-orange-primary hover:shadow-orange-primary/25 dark:bg-white dark:text-gray-950 dark:hover:bg-orange-primary dark:hover:text-white md:inline-flex"
            >
              <span>Let's Talk</span>
              <FaArrowRight className="text-xs" />
            </a>
            <div className="grid h-11 w-11 place-items-center rounded-full border border-gray-200/80 bg-white/70 dark:border-white/10 dark:bg-white/5">
              <ThemeToggle />
            </div>
            
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="grid h-11 w-11 place-items-center rounded-full bg-orange-primary text-white shadow-lg shadow-orange-primary/25 transition-transform active:scale-95 lg:hidden"
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
              className="fixed inset-0 z-[50] bg-gray-950/30 backdrop-blur-sm dark:bg-black/50 lg:hidden"
            />
            
            {/* Menu Content */}
            <motion.nav 
              id="mobile-navigation"
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed left-4 right-4 top-24 z-[55] max-h-[calc(100dvh-7rem)] overflow-y-auto rounded-[2rem] border border-orange-primary/10 bg-white/95 p-4 shadow-2xl shadow-gray-950/20 backdrop-blur-2xl dark:border-white/10 dark:bg-dark-card/95 lg:hidden"
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
                          : 'text-gray-700 hover:bg-gray-100 dark:text-dark-text dark:hover:bg-white/5'
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
