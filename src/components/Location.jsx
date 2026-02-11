import { motion } from 'framer-motion'
import { FaMapMarkerAlt, FaClock, FaCar, FaDirections } from 'react-icons/fa'
import { LOCATION, CONTACT } from '../constants'

const Location = () => {
  return (
    <section id="location" className="relative py-12 md:py-24 overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center mb-10 md:mb-16"
        >
          <h2 className="section-title">
            {LOCATION.heading}
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl mx-auto">
            {LOCATION.description}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Map Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="rounded-[2.5rem] overflow-hidden shadow-2xl h-[400px] md:h-[600px] border-8 border-white dark:border-white/5"
          >
            <iframe
              src={LOCATION.mapEmbedUrl}
              width="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={`${CONTACT.address.full} Location`}
              className="w-full h-full grayscale-0 md:grayscale md:hover:grayscale-0 transition-all duration-700"
            />
          </motion.div>

          {/* Location Info Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="grid gap-6"
          >
            {/* Address Card */}
            <div className="glass p-8 rounded-3xl relative overflow-hidden group hover:-translate-y-1 transition-transform">
              <div className="flex gap-6 items-start">
                <div className="p-4 rounded-2xl bg-magenta/10 text-magenta group-hover:bg-magenta group-hover:text-white transition-colors">
                  <FaMapMarkerAlt size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-serif text-slate-800 dark:text-white mb-2">Location</h3>
                  <p className="text-slate-600 dark:text-slate-400">
                    {CONTACT.address.full}
                  </p>
                  <p className="text-sm text-slate-400 mt-2 italic">
                    {CONTACT.address.directions}
                  </p>
                </div>
              </div>
            </div>

            {/* Hours Card */}
            <div className="glass p-8 rounded-3xl relative overflow-hidden group hover:-translate-y-1 transition-transform">
              <div className="flex gap-6 items-start">
                <div className="p-4 rounded-2xl bg-gold/10 text-gold group-hover:bg-gold group-hover:text-white transition-colors">
                  <FaClock size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-serif text-slate-800 dark:text-white mb-2">Operating Hours</h3>
                  <p className="text-slate-600 dark:text-slate-400">
                    Daily: {CONTACT.hours.daily}
                  </p>
                  <p className="text-sm text-slate-400 mt-2">
                    {CONTACT.hours.description}
                  </p>
                </div>
              </div>
            </div>

            {/* Travel Card */}
            <div className="glass p-8 rounded-3xl relative overflow-hidden group hover:-translate-y-1 transition-transform">
              <div className="flex gap-6 items-start">
                <div className="p-4 rounded-2xl bg-emerald/10 text-emerald group-hover:bg-emerald group-hover:text-white transition-colors">
                  <FaCar size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-serif text-slate-800 dark:text-white mb-2">Accessibility</h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                    {LOCATION.parkingInfo}
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <a
                href={LOCATION.directionsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-premium inline-flex items-center gap-3 no-underline shadow-xl"
              >
                <FaDirections size={20} />
                Navigate to Store
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Location
