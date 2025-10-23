import { useState, useEffect } from 'react'
import { FiSun, FiMoon } from 'react-icons/fi'

const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches

    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setDarkMode(true)
      document.documentElement.classList.add('dark')
    }
  }, [])

  const toggleTheme = () => {
    if (darkMode) {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    } else {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    }
    setDarkMode(!darkMode)
  }

  return (
    <button
      onClick={toggleTheme}
      aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
      className="flex items-center justify-center w-10 h-10 rounded-full 
                 transition-all duration-300"
    >
      {darkMode ? (
        <FiMoon className="text-blue-300 text-xl transition-transform duration-300 transform rotate-0" />
      ) : (
        <FiSun className="text-yellow-500 text-xl transition-transform duration-300 transform rotate-180" />
      )}
    </button>
  )
}

export default ThemeToggle
