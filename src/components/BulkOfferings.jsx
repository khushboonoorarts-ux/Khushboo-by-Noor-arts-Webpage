import { motion } from 'framer-motion'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { BULK_OFFERINGS } from '../constants'

const BulkOfferings = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    pauseOnHover: false,
    cssEase: "cubic-bezier(0.4, 0, 0.2, 1)",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  }

  const offerings = BULK_OFFERINGS.offerings

  return (
    <section id="bulk-offerings" className="relative py-12 md:py-24 overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-[100px] -z-10" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center mb-10 md:mb-20"
        >
          <h2 className="section-title">
            {BULK_OFFERINGS.heading}
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl mx-auto">
            {BULK_OFFERINGS.description}
          </p>
        </motion.div>

        <div className="offerings-slider-container pb-16">
          <Slider {...sliderSettings}>
            {offerings.map((offering, index) => (
              <div key={`offering-${offering.title}-${index}`} className="px-4">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="flex flex-col items-center text-center"
                >
                  <div className="relative group mb-8">
                    {/* Circle Border/Glow */}
                    <div className="absolute inset-0 bg-gold/20 rounded-full blur-xl group-hover:bg-gold/40 transition-all duration-500 scale-110" />

                    {/* Main Circle Image */}
                    <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full border-2 border-gold/30 p-2 glass overflow-hidden transition-transform duration-700 group-hover:scale-105">
                      <div className="w-full h-full rounded-full overflow-hidden border-2 border-gold/50">
                        <img
                          src={offering.image}
                          alt={offering.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                      </div>
                    </div>

                    {/* Decorative Ring */}
                    <div className="absolute -inset-2 border border-gold/10 rounded-full scale-110 animate-[spin_10s_linear_infinite]" />
                  </div>

                  <h3 className="text-2xl font-serif text-slate-800 dark:text-white mb-3 tracking-wide">
                    {offering.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 max-w-xs mx-auto leading-relaxed">
                    {offering.description}
                  </p>
                </motion.div>
              </div>
            ))}
          </Slider>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12 md:mt-20"
        >
          <div className="glass inline-block px-10 py-8 rounded-3xl border-gold/20 dark:border-gold/10 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gold/5 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
            <p className="relative z-10 text-xl text-slate-700 dark:text-slate-200 mb-8 max-w-xl mx-auto italic font-serif">
              "{BULK_OFFERINGS.cta.text}"
            </p>
            <a
              href={BULK_OFFERINGS.cta.link}
              className="btn-premium relative z-10"
            >
              {BULK_OFFERINGS.cta.buttonText}
            </a>
          </div>
        </motion.div>
      </div>


    </section>
  )
}

export default BulkOfferings
