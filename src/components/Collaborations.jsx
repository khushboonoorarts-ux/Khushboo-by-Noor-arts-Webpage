import { motion } from 'framer-motion'
import { COLLABORATIONS } from '../constants'

const Collaborations = () => {
  const brands = COLLABORATIONS.brands

  // Duplicate brands for seamless infinite scroll
  const brandsRow1 = [...brands, ...brands, ...brands] // Triplicate for more variety
  const brandsRow2 = [...brands, ...brands, ...brands].reverse() // Triplicate and reverse for variety

  return (
    <section id="collaborations" className="py-20 bg-gradient-to-b from-blush-pink to-ivory dark:from-gray-900 dark:to-dark-bg overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-magenta dark:text-gold mb-3 sm:mb-4">
            {COLLABORATIONS.heading}
          </h2>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            {COLLABORATIONS.description}
          </p>
        </motion.div>
      </div>

      {/* Scrolling Brand Logos - Row 1 (Leftward) */}
      <div className="marquee-wrapper py-6 md:py-8 [mask-image:_linear-gradient(to_right,transparent_0%,theme(colors.white)_10%,theme(colors.white)_90%,transparent_100%)]">
        <div className="marquee-content marquee-left-animation">
          {brandsRow1.map((brand, index) => (
            <motion.div
              key={`row1-${brand.name}-${index}`}
              className="marquee-item bg-gradient-to-br from-white via-blush-pink/30 to-ivory/50 dark:from-gray-800 dark:via-gray-700/50 dark:to-gray-800 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform backdrop-blur-sm border border-white/50 dark:border-gray-700/50"
            >
              <img
                src={brand.logo}
                alt={`${brand.name} logo`}
                className="w-full h-16 object-contain transition-all duration-300"
                loading="lazy"
              />
              <p className="text-center text-sm font-semibold text-gray-700 dark:text-gray-300 mt-2">
                {brand.name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Scrolling Brand Logos - Row 2 (Rightward) */}
      <div className="marquee-wrapper py-6 md:py-8 [mask-image:_linear-gradient(to_left,transparent_0%,theme(colors.white)_10%,theme(colors.white)_90%,transparent_100%)] mt-4">
        <div className="marquee-content marquee-right-animation">
          {brandsRow2.map((brand, index) => (
            <motion.div
              key={`row2-${brand.name}-${index}`}
              className="marquee-item bg-gradient-to-br from-white via-blush-pink/30 to-ivory/50 dark:from-gray-800 dark:via-gray-700/50 dark:to-gray-800 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform backdrop-blur-sm border border-white/50 dark:border-gray-700/50"
            >
              <img
                src={brand.logo}
                alt={`${brand.name} logo`}
                className="w-full h-16 object-contain transition-all duration-300"
                loading="lazy"
              />
              <p className="text-center text-sm font-semibold text-gray-700 dark:text-gray-300 mt-2">
                {brand.name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Collaborations
