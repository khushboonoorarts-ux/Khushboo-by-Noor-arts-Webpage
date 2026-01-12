import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { CONTACT } from '../constants';

const FloatingWhatsApp = ({ darkMode }) => {
  return (
    <motion.a
      href={`https://wa.me/${CONTACT.whatsapp}`}
      target="_blank"
      rel="noopener noreferrer"
      className={`fixed bottom-6 right-6 z-50 ${darkMode ? 'bg-[#075E54]' : 'bg-[#25D366]'} text-white p-5 rounded-full shadow-xl hover:scale-110 transition-transform duration-300 flex items-center justify-center cursor-pointer transform origin-center animate-pulse-custom`}
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{
        opacity: 1,
        scale: 1,
        y: [0, -5, 0], // Subtle bounce effect
        transition: { opacity: { duration: 0.5, delay: 1 }, scale: { duration: 0.5, delay: 1 }, y: { duration: 1.5, repeat: Infinity, ease: "easeInOut" } }
      }}
      transition={{ duration: 0.5, delay: 1 }}
      aria-label="WhatsApp Us"
    >
      <FaWhatsapp className="text-3xl md:text-4xl" />
    </motion.a>
  );
};

export default FloatingWhatsApp;
