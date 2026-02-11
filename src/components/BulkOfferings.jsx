import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { BULK_OFFERINGS } from '../constants'

const BulkOfferings = () => {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const offerings = BULK_OFFERINGS.offerings

  // Elegant Botanical Decor Component
  const LeafDecoration = ({ className }) => (
    <svg
      viewBox="0 0 100 100"
      className={`absolute pointer-events-none fill-gold/10 dark:fill-gold/5 ${className}`}
    >
      <path d="M50 0 C70 30 90 40 100 50 C90 60 70 70 50 100 C30 70 10 60 0 50 C10 40 30 30 50 0" />
    </svg>
  )

  const GridItem = ({ offering, index, className }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      className={`relative group overflow-hidden rounded-[2.5rem] border border-gold/20 dark:border-white/10 bg-white/40 dark:bg-white/5 backdrop-blur-md shadow-sm hover:shadow-2xl hover:shadow-gold/10 transition-all duration-700 ${className}`}
    >
      <div className="absolute inset-0 scale-100 group-hover:scale-105 transition-transform duration-1000 ease-out">
        <img
          src={offering.image}
          alt={offering.title}
          className="w-full h-full object-cover opacity-70 md:opacity-80 group-hover:opacity-100 transition-opacity duration-700 md:grayscale-[30%] group-hover:grayscale-0"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-[#05080f] via-white/90 dark:via-[#05080f]/90 to-transparent opacity-100 md:opacity-60" />
      </div>

      <div className="absolute inset-0 p-8 flex flex-col justify-end">
        <span className="text-magenta dark:text-gold font-serif italic text-base mb-2 block opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          Selection {index + 1}
        </span>
        <h3 className="text-2xl md:text-3xl font-serif text-slate-900 dark:text-white mb-4 leading-tight">
          {offering.title}
        </h3>
        <p className="text-slate-800 dark:text-slate-200 text-sm font-medium md:font-normal leading-relaxed max-w-xs opacity-100 md:opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-0 md:translate-y-4 group-hover:translate-y-0">
          {offering.description}
        </p>
        <div className="mt-6 w-0 group-hover:w-full h-px bg-gradient-to-r from-magenta dark:from-gold to-transparent transition-all duration-700" />
      </div>

      {/* Decorative Corner */}
      <div className="absolute top-6 right-6 w-10 h-10 border-t border-r border-gold/40 rounded-tr-xl group-hover:scale-110 transition-transform duration-500" />
    </motion.div>
  )

  return (
    <section
      id="bulk-offerings"
      ref={containerRef}
      className="relative py-24 md:py-32 overflow-hidden bg-ivory dark:bg-[#05080f]"
    >
      {/* Botanical Background Accents */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <LeafDecoration className="w-[30vw] h-[30vw] -top-10 -left-10 rotate-45 opacity-60" />
        <LeafDecoration className="w-[40vw] h-[40vw] top-1/2 -right-20 -translate-y-1/2 -rotate-12 opacity-40" />
        <LeafDecoration className="w-[20vw] h-[20vw] -bottom-10 left-1/4 rotate-[120deg] opacity-30" />
      </div>

      {/* Soft Embroidery Thread SVGs */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20" preserveAspectRatio="none">
        <motion.path
          d="M-50,200 Q500,600 1050,200"
          fill="none"
          stroke="url(#threadGradient)"
          strokeWidth="1"
          style={{ pathLength: scrollYProgress }}
        />
        <motion.path
          d="M1050,800 Q500,400 -50,800"
          fill="none"
          stroke="url(#threadGradient)"
          strokeWidth="1"
          style={{ pathLength: scrollYProgress }}
        />
        <defs>
          <linearGradient id="threadGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#C9A96E" stopOpacity="0" />
            <stop offset="50%" stopColor="#C9A96E" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#C9A96E" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>

      <div className="container mx-auto px-6 relative z-10">
        <header className="max-w-4xl mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-magenta dark:text-gold tracking-[0.4em] uppercase text-sm mb-6 block font-semibold">
              Wholesale Distinction
            </span>
            <h2 className="text-4xl md:text-7xl font-serif leading-[1.1] mb-8 text-slate-900 dark:text-white">
              {BULK_OFFERINGS.heading}
            </h2>
            <div className="flex flex-col md:flex-row md:items-end gap-8">
              <p className="text-xl text-slate-600 dark:text-slate-400 max-w-xl font-light leading-relaxed">
                {BULK_OFFERINGS.description}
              </p>
              <div className="hidden md:block h-px flex-grow bg-gold/30 mb-4" />
            </div>
          </motion.div>
        </header>

        {/* Luxe Mosaic Bento Grid - Thematic Version */}
        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-8 h-auto md:h-[800px]">
          <GridItem
            offering={offerings[0]}
            index={0}
            className="md:col-span-2 md:row-span-2 min-h-[450px]"
          />
          <GridItem
            offering={offerings[1]}
            index={1}
            className="md:col-span-2 md:row-span-1 min-h-[300px]"
          />
          <GridItem
            offering={offerings[2]}
            index={2}
            className="md:col-span-2 md:row-span-1 min-h-[300px]"
          />
        </div>

        {/* Thematic Footer - Refined Surprise */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-20 md:mt-32 flex flex-col md:flex-row items-center justify-between border-t border-gold/20 pt-16"
        >
          <div className="mb-12 md:mb-0 text-center md:text-left">
            <h4 className="text-magenta dark:text-gold font-serif italic text-3xl mb-3">Authentic Craftsmanship</h4>
            <p className="text-slate-500 font-sans tracking-[0.2em] uppercase text-xs">Exclusively from Azam Market, Lahore</p>
          </div>

          <div className="flex flex-col items-center gap-6">
            <p className="text-slate-600 dark:text-slate-400 italic text-lg max-w-xs text-center">
              "Tailored for bulk buyers who seek the fragrance of elegance."
            </p>
            <a
              href={BULK_OFFERINGS.cta.link}
              className="group relative flex items-center gap-4 text-white bg-magenta px-12 py-5 rounded-full hover:shadow-2xl hover:shadow-magenta/30 transition-all duration-500"
            >
              <span className="font-serif text-lg">{BULK_OFFERINGS.cta.buttonText}</span>
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
              >
                →
              </motion.span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default BulkOfferings
