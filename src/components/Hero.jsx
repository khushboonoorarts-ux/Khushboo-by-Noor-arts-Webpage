import { Link } from 'react-scroll'
import { motion } from 'framer-motion'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { HERO, BUSINESS_NAME } from '../constants'

const Hero = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    fade: true,
    cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)',
    arrows: false,
    pauseOnHover: false,
  }

  const { tagline, description, buttonText, buttonLink, images } = HERO

  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden p-0">
      {/* Background Slider */}
      <Slider {...settings} className="h-full w-full">
        {images.map((img, index) => (
          <div key={`hero-slide-${index}`} className="relative h-screen w-full">
            <img
              src={img}
              alt={`${BUSINESS_NAME} Hero ${index + 1}`}
              className="w-full h-full object-cover"
              loading={index === 0 ? "eager" : "lazy"}
              {...(index === 0 ? { fetchpriority: "high" } : {})}
            />
            {/* Visual Sophistication Mask */}
            <div className="absolute inset-0 bg-gradient-to-t from-ivory/80 via-transparent to-transparent md:bg-gradient-to-r md:from-ivory/40 md:to-transparent" />
          </div>
        ))}
      </Slider>

      {/* Hero Content */}
      <div className="absolute inset-x-0 bottom-0 md:inset-0 flex items-end md:items-center z-20 pb-12 md:pb-0 px-6">
        <div className="container mx-auto">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            >
              <h1 className="text-4xl md:text-7xl lg:text-8xl font-serif text-slate-900 leading-[1.1] mb-6">
                <span className="block text-magenta/80 text-xl md:text-2xl font-sans uppercase tracking-[0.3em] font-semibold mb-4">
                  Welcome to
                </span>
                {tagline.split(' ').map((word, i) => (
                  <span key={i} className="inline-block mr-4 last:mr-0">
                    {word}
                  </span>
                ))}
              </h1>

              <p className="text-lg md:text-xl text-slate-700 max-w-xl mb-10 font-sans leading-relaxed">
                {description}
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  to={buttonLink}
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={500}
                  className="btn-premium cursor-pointer"
                >
                  {buttonText}
                </Link>
                <Link
                  to="bulk-offerings"
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={500}
                  className="px-8 py-4 rounded-full font-semibold border-2 border-magenta text-magenta hover:bg-magenta hover:text-white transition-all duration-300 cursor-pointer"
                >
                  Explore Bulk
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="hidden lg:block absolute right-12 bottom-12 rotate-90 origin-right max-w-xs text-slate-400 text-xs uppercase tracking-[0.5em] font-medium">
        Premium Ladies Wear • Azam Market • Lahore
      </div>

      {/* Animated Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:block"
      >
        <div className="w-px h-16 bg-gradient-to-b from-magenta to-transparent animate-bounce" />
      </motion.div>

      {/* Section Transition Fade */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-ivory dark:from-[#05080f] to-transparent z-[25] pointer-events-none" />
    </section>
  )
}

export default Hero
