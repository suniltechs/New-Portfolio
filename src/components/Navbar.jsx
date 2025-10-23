import { useState } from 'react'
import { FaBars, FaTimes, FaCode } from 'react-icons/fa'
import ThemeToggle from './ThemeToggle'

const Navbar = ({ activeSection }) => {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'education', label: 'Education' },
    { id: 'work', label: 'Work' },
    { id: 'experience', label: 'Experience' },
    { id: 'contact', label: 'Contact' },
  ]

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsOpen(false)
    }
  }

  return (
    <header className="fixed w-full bg-cream-lighter dark:bg-dark-bg shadow-md z-50 border-b border-orange-primary/20 dark:border-dark-primary/20">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <a 
          href="#home" 
          className="flex items-center text-2xl font-bold text-orange-primary dark:text-dark-primary hover:text-orange-primary/80 dark:hover:text-dark-primary/80 transition-colors"
          onClick={(e) => {
            e.preventDefault()
            scrollToSection('home')
          }}
        >
          <FaCode className="mr-2" />
          Sunil
        </a>

        <div className="flex items-center gap-6">
          <ThemeToggle />
          
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="md:hidden text-black dark:text-dark-text hover:text-orange-primary dark:hover:text-dark-primary focus:outline-none transition-colors"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        <nav className={`${isOpen ? 'block absolute top-full left-0 w-full bg-cream-light dark:bg-dark-card shadow-lg py-4' : 'hidden'} md:block`}>
          <ul className={`${isOpen ? 'flex flex-col space-y-4 px-4' : 'flex space-x-6'}`}>
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToSection(link.id)
                  }}
                  className={`block py-2 px-3 font-medium transition-colors ${
                    activeSection === link.id 
                      ? 'text-orange-primary dark:text-dark-primary border-b-2 border-orange-primary dark:border-dark-primary' 
                      : 'text-black dark:text-dark-text hover:text-orange-primary dark:hover:text-dark-primary'
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Navbar

