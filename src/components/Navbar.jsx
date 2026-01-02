import { useState, useEffect } from 'react'
import { FaBars, FaTimes, FaCode } from 'react-icons/fa'
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
  }, [isOpen])

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'education', label: 'Education' },
    { id: 'work', label: 'Work' },
    { id: 'publications', label: 'Publications'},
    { id: 'experience', label: 'Experience' },
    { id: 'contact', label: 'Contact' },
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

  return (
    <>
      <header 
        className={`fixed w-full z-[60] transition-all duration-500 ${
          scrolled || isOpen
            ? 'py-3 bg-white/80 dark:bg-dark-bg/80 backdrop-blur-lg shadow-lg border-b border-orange-primary/10' 
            : 'py-5 bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          <motion.a 
            href="#home" 
            className="flex items-center text-2xl font-black text-orange-primary hover:scale-105 transition-transform"
            onClick={(e) => {
              e.preventDefault()
              scrollToSection('home')
            }}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <div className="p-2 bg-orange-primary/10 rounded-xl mr-3">
              <FaCode />
            </div>
            <span className="tracking-tighter">Sunil</span>
          </motion.a>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex items-center space-x-2">
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
                    className={`relative px-4 py-2 rounded-full text-sm font-bold transition-all duration-300 ${
                      activeSection === link.id 
                        ? 'text-orange-primary' 
                        : 'text-gray-700 dark:text-dark-text hover:text-orange-primary'
                    }`}
                  >
                    {link.label}
                    {activeSection === link.id && (
                      <motion.div 
                        layoutId="activeTab"
                        className="absolute inset-0 bg-orange-primary/10 rounded-full -z-10"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </a>
                </motion.li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-4">
            <ThemeToggle />
            
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="md:hidden p-2 rounded-xl bg-orange-primary/10 text-orange-primary focus:outline-none transition-transform active:scale-95"
              aria-label={isOpen ? "Close menu" : "Open menu"}
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
              className="fixed inset-0 bg-black/20 dark:bg-black/40 backdrop-blur-sm z-[50] md:hidden"
            />
            
            {/* Menu Content */}
            <motion.nav 
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -100, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 left-0 w-full bg-white dark:bg-dark-bg pt-24 pb-10 px-6 z-[55] md:hidden shadow-2xl border-b border-orange-primary/10"
            >
              <ul className="flex flex-col space-y-2">
                {navLinks.map((link, index) => (
                  <motion.li 
                    key={link.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <button
                      onClick={() => scrollToSection(link.id)}
                      className={`w-full text-left px-6 py-4 rounded-2xl font-black text-lg transition-all ${
                        activeSection === link.id 
                          ? 'bg-orange-primary text-white shadow-lg shadow-orange-primary/20 scale-[1.02]' 
                          : 'text-gray-700 dark:text-dark-text hover:bg-orange-primary/5 active:bg-orange-primary/10'
                      }`}
                    >
                      {link.label}
                    </button>
                  </motion.li>
                ))}
              </ul>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar
