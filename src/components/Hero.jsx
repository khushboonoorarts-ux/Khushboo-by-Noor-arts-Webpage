import { Link } from 'react-scroll'
import { motion } from 'framer-motion'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { HERO, BUSINESS_NAME } from '../constants'

const Hero = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000, // Slower transition for a more cinematic feel
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000, // Display each slide for 5 seconds
    fade: true,
    cssEase: 'ease-in-out', // Smooth fading
    arrows: false,
    pauseOnHover: false, // Keep playing on hover
  }

  const { tagline, description, buttonText, buttonLink, images } = HERO

  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden">
      {/* Image Slider Background */}
      <Slider {...settings} className="h-full w-full">
        {images.map((img, index) => (
          <div key={index} className="h-screen w-full">
            <img
              src={img}
              alt={`${BUSINESS_NAME} Hero Image ${index + 1}`}
              className="w-full h-full object-cover object-center absolute inset-0"
              loading="eager"
            />
            <div className="absolute inset-0 bg-black/30" /> {/* Dark overlay for text readability */}
          </div>
        ))}
      </Slider>

      {/* Overlay Content */}
      <div className="absolute inset-0 flex flex-col justify-end md:justify-center items-center text-white z-20 pb-16 md:pb-0">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-sm md:max-w-2xl lg:max-w-4xl mx-auto bg-black/40 p-6 md:p-8 rounded-lg shadow-xl"
          >
            <motion.h1
              className="text-3xl md:text-5xl lg:text-6xl font-serif mb-2 md:mb-4 leading-tight drop-shadow-lg"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {tagline}
            </motion.h1>
            <motion.p
              className="text-base md:text-xl lg:text-2xl font-sans mb-6 md:mb-8 font-light drop-shadow-md max-w-full mx-auto"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {description}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <Link
                to={buttonLink}
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                className="inline-block bg-magenta hover:bg-magenta/90 text-white px-6 py-3 md:px-10 md:py-5 rounded-full font-semibold text-base md:text-xl transition-all transform hover:scale-105 shadow-lg cursor-pointer"
              >
                {buttonText}
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <Link
        to="bulk-offerings"
        spy={true}
        smooth={true}
        offset={-80}
        duration={500}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 cursor-pointer"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <div className="w-8 h-12 border-2 border-white rounded-full flex justify-center p-1">
            <motion.div
              className="w-2 h-2 bg-white rounded-full"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            />
          </div>
        </motion.div>
      </Link>
    </section>
  )
}

export default Hero
