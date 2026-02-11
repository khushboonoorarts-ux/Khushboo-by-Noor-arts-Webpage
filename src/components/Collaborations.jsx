import { motion } from 'framer-motion'
import { COLLABORATIONS } from '../constants'

const Collaborations = () => {
  const brands = COLLABORATIONS.brands
  const midPoint = Math.ceil(brands.length / 2)
  const row1 = brands.slice(0, midPoint)
  const row2 = brands.slice(midPoint)

  // Triple the rows for a seamless infinite marquee
  const marqueeRow1 = [...row1, ...row1, ...row1]
  const marqueeRow2 = [...row2, ...row2, ...row2]

  const containerVariants = {
    animate: {
      transition: {
        staggerChildren: 0.05
      }
    }
  }

  const logoVariants = {
    initial: {
      scale: 0.9,
      opacity: 0.6,
      borderColor: 'rgba(201,169,110,0.1)',
      filter: 'grayscale(100%)'
    },
    animate: {
      scale: 1,
      opacity: 0.9,
      borderColor: 'rgba(201,169,110,0.3)',
      filter: 'grayscale(0%)',
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  }

  return (
    <section id="collaborations" className="relative py-12 md:py-24 overflow-hidden">
      {/* Background Decorative Accents */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-magenta/5 rounded-full blur-[80px] -z-10" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-gold/5 rounded-full blur-[80px] -z-10" />

      <div className="container mx-auto px-6 relative z-10 text-center mb-8 md:mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="section-title">{COLLABORATIONS.heading}</h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
            {COLLABORATIONS.description}
          </p>
        </motion.div>
      </div>

      {/* Row 1: Left to Right */}
      <motion.div
        variants={containerVariants}
        whileInView="animate"
        initial="initial"
        viewport={{ once: false, amount: 0.3 }}
        className="marquee-wrapper pt-14 pb-4 md:py-10 [mask-image:linear-gradient(to_right,transparent_0%,white_20%,white_80%,transparent_100%)]"
      >
        <div className="animate-marquee items-center gap-8 md:gap-12 px-12">
          {marqueeRow1.map((brand, index) => (
            <motion.div
              key={`row1-${brand.name}-${index}`}
              variants={logoVariants}
              className="flex flex-col items-center flex-shrink-0 group relative"
            >
              {/* Name Label - Positioned TOP for Row 1 */}
              <div className="absolute -top-12 md:-top-10 left-1/2 -translate-x-1/2 opacity-100 md:opacity-0 group-hover:md:opacity-100 transition-all duration-300 transform -translate-y-2 group-hover:translate-y-0 whitespace-nowrap z-20">
                <span className="text-[9px] md:text-[10px] uppercase tracking-[0.2em] text-gold font-bold bg-white/90 dark:bg-slate-900/90 px-3 py-1 rounded-full border border-gold/30 shadow-lg backdrop-blur-sm">
                  {brand.name}
                </span>
              </div>

              <div className="relative w-24 h-24 md:w-28 md:h-28 rounded-full glass border-2 p-2 transition-all duration-500 bg-white/30 dark:bg-gold/5 group-hover:scale-110 group-hover:border-gold/60 group-hover:shadow-[0_0_20px_rgba(201,169,110,0.4)]">
                <div className="w-full h-full rounded-full overflow-hidden bg-white/80 dark:bg-white/5 flex items-center justify-center p-3">
                  <img
                    src={brand.logo}
                    alt={`${brand.name} logo`}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Row 2: Right to Left */}
      <motion.div
        variants={containerVariants}
        whileInView="animate"
        initial="initial"
        viewport={{ once: false, amount: 0.3 }}
        className="marquee-wrapper pt-4 pb-14 md:py-10 [mask-image:linear-gradient(to_right,transparent_0%,white_20%,white_80%,transparent_100%)]"
      >
        <div className="animate-marquee-reverse items-center gap-8 md:gap-12 px-12">
          {marqueeRow2.map((brand, index) => (
            <motion.div
              key={`row2-${brand.name}-${index}`}
              variants={logoVariants}
              className="flex flex-col items-center flex-shrink-0 group relative"
            >
              <div className="relative w-24 h-24 md:w-28 md:h-28 rounded-full glass border-2 p-2 transition-all duration-500 bg-white/30 dark:bg-gold/5 group-hover:scale-110 group-hover:border-gold/60 group-hover:shadow-[0_0_20px_rgba(201,169,110,0.4)]">
                <div className="w-full h-full rounded-full overflow-hidden bg-white/80 dark:bg-white/5 flex items-center justify-center p-3">
                  <img
                    src={brand.logo}
                    alt={`${brand.name} logo`}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>

              {/* Name Label - Positioned BOTTOM for Row 2 */}
              <div className="absolute -bottom-12 md:-bottom-10 left-1/2 -translate-x-1/2 opacity-100 md:opacity-0 group-hover:md:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 whitespace-nowrap z-20">
                <span className="text-[9px] md:text-[10px] uppercase tracking-[0.2em] text-gold font-bold bg-white/90 dark:bg-slate-900/90 px-3 py-1 rounded-full border border-gold/30 shadow-lg backdrop-blur-sm">
                  {brand.name}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Collaborations
