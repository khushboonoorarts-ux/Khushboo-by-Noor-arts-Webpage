import { motion } from 'framer-motion'
import { FaBoxes, FaPalette, FaGem } from 'react-icons/fa'
import { BULK_OFFERINGS } from '../constants'

const BulkOfferings = () => {
  const iconMap = {
    'Stitched Elegance': FaBoxes,
    'Unstitched Masterpieces': FaPalette,
    'Diverse Fabric Range': FaGem,
  }

  const offerings = BULK_OFFERINGS.offerings.map(offering => ({
    ...offering,
    icon: iconMap[offering.title] || FaBoxes,
  }))

  return (
    <section id="bulk-offerings" className="py-20 bg-gradient-to-b from-ivory to-blush-pink dark:from-dark-bg dark:to-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-magenta dark:text-gold mb-3 sm:mb-4">
            {BULK_OFFERINGS.heading}
          </h2>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            {BULK_OFFERINGS.description}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {offerings.map((offering, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden group hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative h-60 overflow-hidden">
                <img
                  src={offering.image}
                  alt={offering.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <offering.icon className="text-5xl text-white opacity-80" />
                </div>
              </div>
              <div className="p-6 sm:p-8 text-center">
                <h3 className="text-xl sm:text-2xl font-serif text-gray-800 dark:text-white mb-2 sm:mb-3">
                  {offering.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                  {offering.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-16"
        >
          <p className="text-base sm:text-xl font-medium text-gray-700 dark:text-gray-300 mb-4 sm:mb-6">
            {BULK_OFFERINGS.cta.text}
          </p>
          <a
            href={BULK_OFFERINGS.cta.link}
            className="inline-block bg-magenta hover:bg-magenta/90 dark:bg-gold dark:hover:bg-gold/90 text-white px-6 py-3 sm:px-10 sm:py-4 rounded-full font-semibold text-base sm:text-lg transition-all transform hover:scale-105 shadow-lg"
          >
            {BULK_OFFERINGS.cta.buttonText}
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default BulkOfferings
