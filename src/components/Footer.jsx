import { Link } from 'react-scroll'
import { FaInstagram, FaFacebook, FaTwitter, FaTiktok, FaPhone, FaWhatsapp, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'
import { NAV_ITEMS, SOCIAL_LINKS, CONTACT, FOOTER, BUSINESS_NAME } from '../constants'

const Footer = ({ onOpenPrivacy, onOpenTerms }) => {
  const currentYear = new Date().getFullYear()

  const getSocialIcon = (key) => {
    switch (key.toLowerCase()) {
      case 'instagram': return FaInstagram
      case 'facebook': return FaFacebook
      case 'twitter': return FaTwitter
      case 'tiktok': return FaTiktok
      default: return FaInstagram
    }
  }

  const getSocialClasses = (key) => {
    switch (key.toLowerCase()) {
      case 'instagram':
        return 'bg-[#E4405F] text-white shadow-lg shadow-[#E4405F]/30 md:bg-white/30 md:dark:bg-gold/5 md:text-slate-300 md:shadow-none md:hover:bg-[#E4405F] md:hover:text-white md:hover:shadow-[#E4405F]/40'
      case 'facebook':
        return 'bg-[#1877F2] text-white shadow-lg shadow-[#1877F2]/30 md:bg-white/30 md:dark:bg-gold/5 md:text-slate-300 md:shadow-none md:hover:bg-[#1877F2] md:hover:text-white md:hover:shadow-[#1877F2]/40'
      case 'twitter':
        return 'bg-[#1DA1F2] text-white shadow-lg shadow-[#1DA1F2]/30 md:bg-white/30 md:dark:bg-gold/5 md:text-slate-300 md:shadow-none md:hover:bg-[#1DA1F2] md:hover:text-white md:hover:shadow-[#1DA1F2]/40'
      case 'tiktok':
        return 'bg-black text-white dark:bg-white dark:text-black shadow-lg shadow-black/20 md:bg-white/30 md:dark:bg-gold/5 md:text-slate-300 md:dark:text-slate-300 md:shadow-none md:hover:bg-black md:dark:hover:bg-white md:hover:text-white md:dark:hover:text-black md:hover:shadow-white/20'
      default:
        return 'bg-gold text-slate-900 md:bg-white/30 md:dark:bg-gold/5 md:text-slate-300 md:hover:bg-gold md:hover:text-slate-900'
    }
  }

  return (
    <footer className="relative bg-slate-900 text-slate-300 py-20 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-gold/5 rounded-full blur-[100px]" />
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-magenta/5 rounded-full blur-[100px]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-24 mb-16">
          {/* Brand Identity */}
          <div className="md:col-span-12 lg:col-span-4">
            <h3 className="text-3xl font-serif text-white mb-6 tracking-wide">
              {BUSINESS_NAME}
            </h3>
            <p className="text-lg text-slate-400 mb-8 leading-relaxed max-w-sm">
              {FOOTER.tagline}
            </p>
            <div className="flex gap-4">
              {Object.entries(SOCIAL_LINKS).map(([key, url]) => {
                const Icon = getSocialIcon(key)
                const classes = getSocialClasses(key)
                return (
                  <a
                    key={key}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 md:hover:-translate-y-1 md:glass ${classes}`}
                    aria-label={key}
                  >
                    <Icon size={20} />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="md:col-span-4 lg:col-span-2">
            <h4 className="text-white font-serif text-xl mb-8">Navigation</h4>
            <ul className="space-y-4">
              {NAV_ITEMS.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.to}
                    spy={true}
                    smooth={true}
                    offset={-80}
                    duration={500}
                    className="text-slate-400 hover:text-gold transition-colors cursor-pointer text-sm uppercase tracking-widest no-underline"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="md:col-span-4 lg:col-span-3">
            <h4 className="text-white font-serif text-xl mb-8">Connect</h4>
            <ul className="space-y-6">
              <li className="flex gap-4 group">
                <FaMapMarkerAlt className="text-gold shrink-0 mt-1" />
                <span className="text-sm leading-relaxed group-hover:text-white transition-colors">
                  {CONTACT.address.full}
                </span>
              </li>
              <li className="flex gap-4 group">
                <FaPhone className="text-gold shrink-0" />
                <a href={`tel:${CONTACT.phone.replace(/\s/g, '')}`} className="text-sm hover:text-white transition-colors no-underline">
                  {CONTACT.phone}
                </a>
              </li>
              <li className="flex gap-4 group">
                <FaEnvelope className="text-gold shrink-0" />
                <a href={`mailto:${CONTACT.email}`} className="text-sm hover:text-white transition-colors no-underline break-all">
                  {CONTACT.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Business Hours */}
          <div className="md:col-span-4 lg:col-span-3">
            <h4 className="text-white font-serif text-xl mb-8">Hours</h4>
            <div className="glass p-6 rounded-2xl border-white/5">
              <p className="text-sm text-slate-400 mb-2 uppercase tracking-tighter">Availability</p>
              <p className="text-white font-medium mb-4">{CONTACT.hours.daily}</p>
              <p className="text-xs text-slate-500 italic leading-relaxed">
                Visit our flagship store in Azam Market for exclusive bulk collections.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/5">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-slate-500 text-sm">
              {FOOTER.copyright(currentYear)}
            </p>
            <div className="flex gap-8">
              <button
                type="button"
                onClick={onOpenPrivacy}
                className="text-xs uppercase tracking-widest text-slate-500 hover:text-gold transition-colors"
              >
                Privacy
              </button>
              <button
                type="button"
                onClick={onOpenTerms}
                className="text-xs uppercase tracking-widest text-slate-500 hover:text-gold transition-colors"
              >
                Terms
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
