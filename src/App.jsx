import { useState, useEffect } from 'react'
import { HelmetProvider } from 'react-helmet-async'
import Header from './components/Header'
import Hero from './components/Hero'
import BulkOfferings from './components/BulkOfferings'
import About from './components/About'
import Collaborations from './components/Collaborations'
import Location from './components/Location'
import Contact from './components/Contact'
import Footer from './components/Footer'
import LoadingScreen from './components/LoadingScreen'
import SEO from './components/SEO'
import FloatingWhatsApp from './components/FloatingWhatsApp'
import LegalModal from './components/LegalModal'

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [darkMode, setDarkMode] = useState(false)
  const [legalModal, setLegalModal] = useState({ open: false, type: null })

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    // Check for saved theme preference
    const savedTheme = localStorage.getItem('darkMode')
    if (savedTheme === 'true') {
      setDarkMode(true)
      document.documentElement.classList.add('dark')
    }

    return () => clearTimeout(timer)
  }, [])

  const toggleDarkMode = () => {
    const newMode = !darkMode
    setDarkMode(newMode)
    localStorage.setItem('darkMode', newMode.toString())
    if (newMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }

  if (isLoading) {
    return <LoadingScreen />
  }

  return (
    <HelmetProvider>
      <SEO />
      <div className="min-h-screen bg-ivory dark:bg-dark-bg overflow-x-hidden w-full max-w-full">
        <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <Hero />
        <BulkOfferings />
        <About />
        <Collaborations />
        <Location />
        <Contact />
        <Footer
          onOpenPrivacy={() => setLegalModal({ open: true, type: 'privacy' })}
          onOpenTerms={() => setLegalModal({ open: true, type: 'terms' })}
        />
        <FloatingWhatsApp darkMode={darkMode} />
        <LegalModal
          isOpen={legalModal.open}
          type={legalModal.type}
          onClose={() => setLegalModal({ open: false, type: null })}
        />
      </div>
    </HelmetProvider>
  )
}

export default App
