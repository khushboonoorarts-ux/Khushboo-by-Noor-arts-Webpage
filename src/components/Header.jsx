import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-scroll'
import { HiMenuAlt3, HiX } from 'react-icons/hi'
import { motion, AnimatePresence } from 'framer-motion'
import { NAV_ITEMS, BUSINESS_NAME } from '../constants'

const Header = ({ darkMode, toggleDarkMode }) => {
  const [navOpen, setNavOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const headerRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    const handleClickOutside = (event) => {
      if (headerRef.current && !headerRef.current.contains(event.target)) {
        setNavOpen(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    if (navOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      window.removeEventListener('scroll', handleScroll)
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [navOpen])

  return (
    <header
      ref={headerRef}
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-7xl transition-all duration-500 rounded-2xl md:rounded-full ${scrolled ? 'glass py-3' : 'bg-transparent py-5'
        }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <Link to="hero" smooth={true} duration={500} className="cursor-pointer group">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex flex-col"
          >
            <span className="text-xl md:text-2xl font-serif font-bold tracking-tight text-magenta group-hover:text-gold transition-colors duration-300">
              {BUSINESS_NAME.split(' ')[0]}
            </span>
            <span className="text-[10px] md:text-xs uppercase tracking-[0.2em] font-sans font-medium text-slate-500">
              By Noor Arts
            </span>
          </motion.div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8 items-center">
          {NAV_ITEMS.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Link
                to={item.to}
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                className="text-sm font-medium hover:text-magenta transition-colors duration-300 cursor-pointer relative group"
                activeClass="text-magenta"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-magenta transition-all duration-300 group-hover:w-full" />
              </Link>
            </motion.div>
          ))}
          {/* Theme Toggle integrated into desktop nav */}
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full hover:bg-magenta/10 text-magenta transition-colors ml-4"
            aria-label="Toggle theme"
          >
            {darkMode ? '🌙' : '☀️'}
          </button>
        </nav>

        {/* Mobile Controls */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={toggleDarkMode}
            className="p-2 text-magenta"
            aria-label="Toggle theme"
          >
            {darkMode ? '🌙' : '☀️'}
          </button>
          <button
            onClick={() => setNavOpen(!navOpen)}
            className="text-magenta p-2 focus:outline-none"
            aria-label="Toggle Navigation"
          >
            {navOpen ? <HiX size={28} /> : <HiMenuAlt3 size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {navOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 mt-2 glass rounded-3xl overflow-hidden mx-4 md:hidden"
          >
            <nav className="flex flex-col p-6 gap-4">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.name}
                  to={item.to}
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={500}
                  onClick={() => setNavOpen(false)}
                  className="text-lg font-medium hover:text-magenta transition-colors duration-300 cursor-pointer border-b border-magenta/10 pb-2"
                  activeClass="text-magenta font-bold"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Header
