import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaPhone, FaWhatsapp, FaEnvelope, FaInstagram, FaFacebook, FaTwitter, FaTiktok } from 'react-icons/fa'
import emailjs from '@emailjs/browser'
import { CONTACT_SECTION, CONTACT, SOCIAL_LINKS } from '../constants'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      const serviceId = (import.meta.env.VITE_EMAILJS_SERVICE_ID || '').trim()
      const templateId = (import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '').trim()
      const publicKey = (import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '').trim()

      console.log('--- EmailJS Debug Info ---')
      console.log('Service ID Length:', serviceId.length)
      console.log('Template ID Length:', templateId.length)
      console.log('Public Key Length:', publicKey.length)
      console.log('Public Key Starts With:', publicKey.substring(0, 3) + '...')
      console.log('---------------------------')

      if (!serviceId || !templateId || !publicKey || serviceId === 'YOUR_SERVICE_ID') {
        throw new Error('EmailJS configuration is missing or invalid. Please check your .env file.')
      }

      // Initialize with public key to ensure authentication
      emailjs.init(publicKey)

      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          user_name: formData.name,
          from_email: formData.email,
          user_email: formData.email,
          reply_to: formData.email,
          message: formData.message,
        },
        publicKey
      )

      setSubmitStatus('success')
      setFormData({ name: '', email: '', message: '' })
    } catch (error) {
      console.error('EmailJS Error:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

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
      hoverClass: brandColors[label] || 'hover:bg-emerald dark:hover:bg-emerald',
    }
  })

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-ivory to-blush-pink dark:from-dark-bg dark:to-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-magenta dark:text-gold mb-3 sm:mb-4">
            {CONTACT_SECTION.heading}
          </h2>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
            {CONTACT_SECTION.description}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 sm:p-8 shadow-lg">
              <h3 className="text-xl sm:text-2xl font-serif text-gray-800 dark:text-white mb-4 sm:mb-6">
                Contact Information
              </h3>

              <div className="space-y-4">
                <a
                  href={`tel:${CONTACT.phone.replace(/\s/g, '')}`}
                  className="flex items-center gap-4 p-4 bg-blush-pink dark:bg-gray-700 rounded-xl hover:bg-magenta hover:text-white dark:hover:bg-gold transition-all group"
                >
                  <FaPhone className="text-2xl text-magenta dark:text-gold group-hover:text-white dark:group-hover:text-dark-bg" />
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Phone</p>
                    <p className="font-semibold text-gray-800 dark:text-white group-hover:text-white dark:group-hover:text-dark-bg">
                      {CONTACT.phone}
                    </p>
                  </div>
                </a>

                <a
                  href={`https://wa.me/${CONTACT.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-blush-pink dark:bg-gray-700 rounded-xl hover:bg-emerald hover:text-white transition-all group"
                >
                  <FaWhatsapp className="text-2xl text-emerald group-hover:text-white" />
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">WhatsApp</p>
                    <p className="font-semibold text-gray-800 dark:text-white group-hover:text-white">
                      {CONTACT.phone}
                    </p>
                  </div>
                </a>

                <a
                  href={`mailto:${CONTACT.email}`}
                  className="flex items-center gap-4 p-4 bg-blush-pink dark:bg-gray-700 rounded-xl hover:bg-magenta hover:text-white dark:hover:bg-gold transition-all group"
                  title="Send us an email"
                >
                  <FaEnvelope className="text-2xl text-magenta dark:text-gold group-hover:text-white dark:group-hover:text-dark-bg" />
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Email</p>
                    <p className="font-semibold text-gray-800 dark:text-white group-hover:text-white dark:group-hover:text-dark-bg break-all">
                      {CONTACT.email}
                    </p>
                  </div>
                </a>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-300 dark:border-gray-600">
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">Follow Us</p>
                <div className="flex gap-4">
                  {socialLinks.map((social) => {
                    const Icon = social.icon
                    return (
                      <a
                        key={social.label}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`w-12 h-12 bg-magenta dark:bg-gold text-white rounded-full flex items-center justify-center ${social.hoverClass} transition-all transform hover:scale-110`}
                        aria-label={social.label}
                      >
                        <Icon />
                      </a>
                    )
                  })}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <form
              onSubmit={handleSubmit}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 sm:p-8 shadow-lg"
            >
              <div className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"
                  >
                    {CONTACT_SECTION.formLabels.name}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 sm:px-4 sm:py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-magenta dark:focus:ring-gold"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"
                  >
                    {CONTACT_SECTION.formLabels.email}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 sm:px-4 sm:py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-magenta dark:focus:ring-gold"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"
                  >
                    {CONTACT_SECTION.formLabels.message}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-3 py-2 sm:px-4 sm:py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-magenta dark:focus:ring-gold resize-none"
                  />
                </div>

                {submitStatus === 'success' && (
                  <div className="p-4 bg-emerald/20 border border-emerald rounded-xl text-emerald">
                    {CONTACT_SECTION.formMessages.success}
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="p-4 bg-red-500/20 border border-red-500 rounded-xl text-red-500">
                    {CONTACT_SECTION.formMessages.error}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-magenta hover:bg-magenta/90 dark:bg-gold dark:hover:bg-gold/90 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full font-semibold text-base sm:text-lg transition-all transform hover:scale-105 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? CONTACT_SECTION.formMessages.sending : CONTACT_SECTION.formMessages.sendButton}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
