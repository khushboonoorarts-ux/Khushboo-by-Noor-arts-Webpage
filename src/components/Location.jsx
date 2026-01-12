import { motion } from 'framer-motion'
import { FaMapMarkerAlt, FaClock, FaCar, FaDirections } from 'react-icons/fa'
import { LOCATION, CONTACT } from '../constants'

const Location = () => {
  return (
    <section id="location" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-magenta dark:text-gold mb-3 sm:mb-4">
            {LOCATION.heading}
          </h2>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
            {LOCATION.description}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="rounded-2xl overflow-hidden shadow-2xl h-[300px] sm:h-[400px] md:h-[500px]"
          >
            <iframe
              src={LOCATION.mapEmbedUrl}
              width="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={`${CONTACT.address.full} Location`}
              className="w-full h-full"
            />
          </motion.div>

          {/* Location Details */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="bg-blush-pink dark:bg-gray-800 rounded-2xl p-5 sm:p-6 shadow-lg">
              <div className="flex items-start gap-3 sm:gap-4 mb-3 sm:mb-4">
                <FaMapMarkerAlt className="text-xl sm:text-2xl text-magenta dark:text-gold mt-1" />
                <div>
                  <h3 className="text-lg sm:text-xl font-serif text-gray-800 dark:text-white mb-1 sm:mb-2">
                    Address
                  </h3>
                  <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300">
                    {CONTACT.address.full}<br />
                    {CONTACT.address.directions}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-blush-pink dark:bg-gray-800 rounded-2xl p-5 sm:p-6 shadow-lg">
              <div className="flex items-start gap-3 sm:gap-4 mb-3 sm:mb-4">
                <FaClock className="text-xl sm:text-2xl text-magenta dark:text-gold mt-1" />
                <div>
                  <h3 className="text-lg sm:text-xl font-serif text-gray-800 dark:text-white mb-1 sm:mb-2">
                    Operating Hours
                  </h3>
                  <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300">
                    Daily: {CONTACT.hours.daily}<br />
                    {CONTACT.hours.description}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-blush-pink dark:bg-gray-800 rounded-2xl p-5 sm:p-6 shadow-lg">
              <div className="flex items-start gap-3 sm:gap-4 mb-3 sm:mb-4">
                <FaCar className="text-xl sm:text-2xl text-magenta dark:text-gold mt-1" />
                <div>
                  <h3 className="text-lg sm:text-xl font-serif text-gray-800 dark:text-white mb-1 sm:mb-2">
                    Parking & Directions
                  </h3>
                  <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 whitespace-pre-line">
                    {LOCATION.parkingInfo}
                  </p>
                </div>
              </div>
            </div>

            <a
              href={LOCATION.directionsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 sm:gap-3 bg-magenta hover:bg-magenta/90 dark:bg-gold dark:hover:bg-gold/90 text-white px-5 py-3 sm:px-6 sm:py-4 rounded-full font-semibold text-base sm:text-lg transition-all transform hover:scale-105 shadow-lg"
            >
              <FaDirections />
              Get Directions
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Location
