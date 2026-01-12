import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { ABOUT, BUSINESS_NAME } from '../constants'

const About = () => {
  const metricsRef = useRef(null)

  useEffect(() => {
    const observerOptions = {
      threshold: 0.5,
      rootMargin: '0px',
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const countUpElements = entry.target.querySelectorAll('.count-up')
          countUpElements.forEach((element) => {
            const targetValue = parseInt(element.getAttribute('data-val'), 10)
            if (isNaN(targetValue)) return

            const duration = 2000 // 2 seconds
            const startTime = Date.now()
            const startValue = 0

            const animateCounter = () => {
              const elapsed = Date.now() - startTime
              const progress = Math.min(elapsed / duration, 1)

              // Easing function for smooth animation
              const easeOutQuart = 1 - Math.pow(1 - progress, 4)
              const currentValue = Math.floor(startValue + (targetValue - startValue) * easeOutQuart)

              element.textContent = currentValue

              if (progress < 1) {
                requestAnimationFrame(animateCounter)
              } else {
                element.textContent = targetValue
              }
            }

            animateCounter()
          })
          observer.unobserve(entry.target)
        }
      })
    }, observerOptions)

    if (metricsRef.current) {
      observer.observe(metricsRef.current)
    }

    return () => {
      if (metricsRef.current) {
        observer.unobserve(metricsRef.current)
      }
    }
  }, [])

  const { heading, content, metrics, image } = ABOUT

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative h-64 sm:h-80 md:h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={image}
                alt={`${BUSINESS_NAME} boutique interior`}
                className="w-full h-full object-cover object-center"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-gold/20 rounded-full blur-3xl -z-10" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-5xl font-serif text-magenta dark:text-gold mb-4 md:mb-6" dangerouslySetInnerHTML={{ __html: heading }} />
            <div className="space-y-3 md:space-y-4 text-gray-700 dark:text-gray-300 text-base md:text-lg leading-relaxed">
              {content.map((item, index) => (
                <p key={index} dangerouslySetInnerHTML={{ __html: item.paragraph || item }} />
              ))}
            </div>

            <div ref={metricsRef} className="mt-8 grid grid-cols-2 gap-4">
              {metrics.map((metric, index) => (
                <div key={index} className="bg-blush-pink dark:bg-gray-800 p-6 rounded-xl">
                  <h3 className="text-2xl md:text-3xl font-bold text-magenta dark:text-gold mb-2">
                    <span className="count-up" data-val={metric.value}>0</span>{metric.suffix}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base">{metric.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
