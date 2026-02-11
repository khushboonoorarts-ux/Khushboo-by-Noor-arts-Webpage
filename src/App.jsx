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
      <div className="relative min-h-screen text-slate-800 dark:text-slate-100 transition-colors duration-500">
        <div className="mesh-gradient" />
        <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <main className="relative z-10">
          <Hero />
          <BulkOfferings />
          <About />
          <Collaborations />
          <Location />
          <Contact />
        </main>
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
