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

      if (!serviceId || !templateId || !publicKey || serviceId === 'YOUR_SERVICE_ID') {
        throw new Error('EmailJS configuration is missing or invalid.')
      }

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
        return 'bg-[#E4405F] text-white shadow-lg shadow-[#E4405F]/30 md:bg-white/30 md:dark:bg-gold/5 md:text-slate-600 md:dark:text-slate-300 md:shadow-none md:hover:bg-[#E4405F] md:hover:text-white md:hover:shadow-[#E4405F]/40'
      case 'facebook':
        return 'bg-[#1877F2] text-white shadow-lg shadow-[#1877F2]/30 md:bg-white/30 md:dark:bg-gold/5 md:text-slate-600 md:dark:text-slate-300 md:shadow-none md:hover:bg-[#1877F2] md:hover:text-white md:hover:shadow-[#1877F2]/40'
      case 'twitter':
        return 'bg-[#1DA1F2] text-white shadow-lg shadow-[#1DA1F2]/30 md:bg-white/30 md:dark:bg-gold/5 md:text-slate-600 md:dark:text-slate-300 md:shadow-none md:hover:bg-[#1DA1F2] md:hover:text-white md:hover:shadow-[#1DA1F2]/40'
      case 'tiktok':
        return 'bg-black text-white dark:bg-white dark:text-black shadow-lg shadow-black/20 md:bg-white/30 md:dark:bg-gold/5 md:text-slate-600 md:dark:text-slate-300 md:shadow-none md:hover:bg-black md:dark:hover:bg-white md:hover:text-white md:dark:hover:text-black md:hover:shadow-white/20'
      default:
        return 'bg-magenta text-white md:bg-white/30 md:dark:bg-gold/5 md:text-slate-600 md:dark:text-slate-300 md:hover:bg-magenta md:hover:text-white'
    }
  }

  return (
    <section id="contact" className="relative py-12 md:py-24 overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mb-10 md:mb-16"
        >
          <h2 className="section-title !text-left !ml-0 after:!left-0 after:!translate-x-0">
            {CONTACT_SECTION.heading}
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            {CONTACT_SECTION.description}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {/* Contact Details & Socials */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="space-y-8"
          >
            <div className="glass p-10 rounded-3xl relative overflow-hidden">
              <h3 className="text-2xl font-serif text-slate-800 dark:text-white mb-8">Get in Touch</h3>

              <div className="space-y-6">
                <a
                  href={`tel:${CONTACT.phone.replace(/\s/g, '')}`}
                  className="flex items-center gap-6 group no-underline"
                >
                  <div className="w-14 h-14 rounded-2xl bg-magenta/10 text-magenta flex items-center justify-center group-hover:bg-magenta group-hover:text-white transition-all duration-300">
                    <FaPhone size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400 uppercase tracking-widest font-medium">Direct Call</p>
                    <p className="text-xl text-slate-700 dark:text-slate-100 font-medium">{CONTACT.phone}</p>
                  </div>
                </a>

                <a
                  href={`https://wa.me/${CONTACT.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-6 group no-underline"
                >
                  <div className="w-14 h-14 rounded-2xl bg-emerald/10 text-emerald flex items-center justify-center group-hover:bg-emerald group-hover:text-white transition-all duration-300">
                    <FaWhatsapp size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400 uppercase tracking-widest font-medium">WhatsApp</p>
                    <p className="text-xl text-slate-700 dark:text-slate-100 font-medium">Chat with us</p>
                  </div>
                </a>

                <a
                  href={`mailto:${CONTACT.email}`}
                  className="flex items-center gap-6 group no-underline"
                >
                  <div className="w-14 h-14 rounded-2xl bg-gold/10 text-gold flex items-center justify-center group-hover:bg-gold group-hover:text-white transition-all duration-300">
                    <FaEnvelope size={22} />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400 uppercase tracking-widest font-medium">Email Reach</p>
                    <p className="text-lg text-slate-700 dark:text-slate-100 font-medium truncate max-w-[200px] md:max-w-none">
                      {CONTACT.email}
                    </p>
                  </div>
                </a>
              </div>

              <div className="mt-12 pt-10 border-t border-slate-200 dark:border-slate-700">
                <p className="text-sm text-slate-400 uppercase tracking-widest font-medium mb-6">Social Gallery</p>
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
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <form onSubmit={handleSubmit} className="glass p-10 rounded-3xl relative">
              <div className="space-y-6">
                <div className="relative">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder=" "
                    className="peer w-full px-0 py-3 bg-transparent border-b-2 border-slate-200 dark:border-white/10 text-slate-800 dark:text-slate-200 focus:outline-none focus:border-magenta dark:focus:border-gold/60 transition-colors placeholder-transparent"
                  />
                  <label
                    htmlFor="name"
                    className="absolute left-0 -top-3.5 text-slate-400 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-400 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-magenta dark:peer-focus:text-gold peer-focus:text-sm"
                  >
                    {CONTACT_SECTION.formLabels.name}
                  </label>
                </div>

                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder=" "
                    className="peer w-full px-0 py-3 bg-transparent border-b-2 border-slate-200 dark:border-white/10 text-slate-800 dark:text-slate-200 focus:outline-none focus:border-magenta dark:focus:border-gold/60 transition-colors placeholder-transparent"
                  />
                  <label
                    htmlFor="email"
                    className="absolute left-0 -top-3.5 text-slate-400 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-400 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-magenta dark:peer-focus:text-gold peer-focus:text-sm"
                  >
                    {CONTACT_SECTION.formLabels.email}
                  </label>
                </div>

                <div className="relative">
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="4"
                    placeholder=" "
                    className="peer w-full px-0 py-3 bg-transparent border-b-2 border-slate-200 dark:border-white/10 text-slate-800 dark:text-slate-200 focus:outline-none focus:border-magenta dark:focus:border-gold/60 transition-colors placeholder-transparent resize-none"
                  />
                  <label
                    htmlFor="message"
                    className="absolute left-0 -top-3.5 text-slate-400 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-400 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-magenta dark:peer-focus:text-gold peer-focus:text-sm"
                  >
                    {CONTACT_SECTION.formLabels.message}
                  </label>
                </div>

                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="p-4 bg-emerald/10 border border-emerald/20 rounded-2xl text-emerald text-sm"
                  >
                    {CONTACT_SECTION.formMessages.success}
                  </motion.div>
                )}

                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="p-4 bg-red-500/10 border border-red-500/20 rounded-2xl text-red-500 text-sm"
                  >
                    {CONTACT_SECTION.formMessages.error}
                  </motion.div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-premium w-full shadow-xl disabled:opacity-50 disabled:cursor-not-allowed mt-4"
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
