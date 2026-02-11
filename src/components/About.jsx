import { motion } from 'framer-motion'
import { ABOUT, BUSINESS_NAME } from '../constants'

const About = () => {
  const { heading, content, metrics, image } = ABOUT

  return (
    <section id="about" className="relative py-12 md:py-32 overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Image Composition */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative z-10 rounded-3xl overflow-hidden shadow-2xl h-[400px] md:h-[600px]"
            >
              <img
                src={image}
                alt={`${BUSINESS_NAME} Atelier`}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </motion.div>

            {/* Floating Decorative Card */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5 }}
              className="absolute -bottom-10 -right-4 md:-right-10 glass p-8 rounded-3xl z-20 max-w-[280px] hidden sm:block"
            >
              <div className="text-magenta font-serif text-3xl mb-1">Authentic</div>
              <div className="text-slate-600 text-sm uppercase tracking-widest leading-tight">
                Craftsmanship from the heart of Lahore
              </div>
            </motion.div>

            {/* Background Shape */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-magenta/5 rounded-full blur-3xl" />
          </div>

          {/* Text Content */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="section-title !text-left !ml-0 after:!left-0 after:!translate-x-0"
                dangerouslySetInnerHTML={{ __html: heading }}
              />

              <div className="space-y-6 text-lg text-slate-700 dark:text-slate-300 leading-relaxed font-sans">
                {content.map((item, index) => (
                  <p key={`about-p-${index}`} dangerouslySetInnerHTML={{ __html: item.paragraph || item }} className="reveal-text" />
                ))}
              </div>

              {/* Stats Grid */}
              <div className="mt-12 grid grid-cols-2 gap-6">
                {metrics.map((metric, index) => (
                  <motion.div
                    key={`metric-${metric.label}-${index}`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="glass p-6 rounded-2xl relative overflow-hidden group"
                  >
                    <div className="relative z-10">
                      <div className="text-4xl font-serif text-magenta mb-1">
                        {metric.value}{metric.suffix}
                      </div>
                      <div className="text-slate-500 text-sm font-medium uppercase tracking-widest">
                        {metric.label}
                      </div>
                    </div>
                    {/* Hover Glow */}
                    <div className="absolute inset-0 bg-gold/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
