import { Link } from 'react-scroll'
import { FaInstagram, FaFacebook, FaTwitter, FaTiktok, FaPhone, FaWhatsapp, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'
import { NAV_ITEMS, SOCIAL_LINKS, CONTACT, FOOTER, BUSINESS_NAME } from '../constants'

const Footer = ({ onOpenPrivacy, onOpenTerms }) => {
  const currentYear = new Date().getFullYear()

  const quickLinks = NAV_ITEMS

  const socialIcons = {
    Instagram: FaInstagram,
    Facebook: FaFacebook,
    Twitter: FaTwitter,
    Tiktok: FaTiktok,
  }

  const brandColors = {
    Instagram: 'hover:bg-[#E1306C] dark:hover:bg-[#E1306C]',
    Facebook: 'hover:bg-[#1877F2] dark:hover:bg-[#1877F2]',
    Twitter: 'hover:bg-[#1DA1F2] dark:hover:bg-[#1DA1F2]',
    Tiktok: 'hover:bg-[#000000] dark:hover:bg-[#000000]',
  }

  const socialLinks = Object.entries(SOCIAL_LINKS).map(([key, url]) => {
    const label = key.charAt(0).toUpperCase() + key.slice(1)
    return {
      icon: socialIcons[label] || FaInstagram,
      url,
      label,
      hoverClass: brandColors[label] || 'hover:bg-magenta dark:hover:bg-magenta',
    }
  })

  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl sm:text-2xl font-serif text-gold mb-3 sm:mb-4">
              {BUSINESS_NAME}
            </h3>
            <p className="text-sm sm:text-base text-gray-400 mb-3 sm:mb-4">
              {FOOTER.tagline}
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-10 h-10 bg-gray-800 ${social.hoverClass} rounded-full flex items-center justify-center transition-all transform hover:scale-110`}
                    aria-label={social.label}
                  >
                    <Icon />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg sm:text-xl font-serif text-gold mb-3 sm:mb-4">Quick Links</h4>
            <ul className="space-y-1 sm:space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.to}
                    spy={true}
                    smooth={true}
                    offset={-80}
                    duration={500}
                    className="text-gray-400 hover:text-gold transition-colors cursor-pointer"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg sm:text-xl font-serif text-gold mb-3 sm:mb-4">Contact</h4>
            <ul className="space-y-2 sm:space-y-3 text-gray-400">
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-gold mt-1" />
                <span>
                  {CONTACT.address.full}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <FaPhone className="text-gold" />
                <a href={`tel:${CONTACT.phone.replace(/\s/g, '')}`} className="hover:text-gold transition-colors">
                  {CONTACT.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <FaWhatsapp className="text-gold" />
                <a
                  href={`https://wa.me/${CONTACT.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gold transition-colors"
                >
                  WhatsApp Us
                </a>
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope className="text-gold" />
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="hover:text-gold transition-colors"
                >
                  {CONTACT.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-lg sm:text-xl font-serif text-gold mb-3 sm:mb-4">Operating Hours</h4>
            <div className="text-gray-400 space-y-1 sm:space-y-2">
              <p>Daily: {CONTACT.hours.daily}</p>
              <p className="text-sm mt-4">
                Visit us in Azam Market for the best selection of bulk ladies' wear in Lahore!
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 sm:pt-8 mt-6 sm:mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4">
            <p className="text-gray-400 text-xs sm:text-sm">
              {FOOTER.copyright(currentYear)}
            </p>
            <div className="flex gap-4 sm:gap-6 text-xs sm:text-sm">
              <button
                type="button"
                onClick={onOpenPrivacy}
                className="text-gray-400 hover:text-gold transition-colors underline-offset-4 hover:underline"
              >
                Privacy Policy
              </button>
              <button
                type="button"
                onClick={onOpenTerms}
                className="text-gray-400 hover:text-gold transition-colors underline-offset-4 hover:underline"
              >
                Terms &amp; Conditions
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
