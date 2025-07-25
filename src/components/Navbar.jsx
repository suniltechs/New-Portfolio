import { useState } from 'react'
import { FaBars, FaTimes, FaCode } from 'react-icons/fa'

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
    <header className="fixed w-full bg-white shadow-md z-50 border-b border-orange-primary/20">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <a 
          href="#home" 
          className="flex items-center text-2xl font-bold text-orange-primary hover:text-orange-primary/80 transition-colors"
          onClick={(e) => {
            e.preventDefault()
            scrollToSection('home')
          }}
        >
          <FaCode className="mr-2" />
          Sunil
        </a>

        <div className="md:hidden">
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="text-black hover:text-orange-primary focus:outline-none transition-colors"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        <nav className={`${isOpen ? 'block absolute top-full left-0 w-full bg-cream-light shadow-lg py-4' : 'hidden'} md:block`}>
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
                      ? 'text-orange-primary border-b-2 border-orange-primary' 
                      : 'text-black hover:text-orange-primary'
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