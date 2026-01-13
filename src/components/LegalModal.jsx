import { motion, AnimatePresence } from 'framer-motion'

const LegalModal = ({ isOpen, type, onClose }) => {
  if (!isOpen) return null

  const isPrivacy = type === 'privacy'
  const title = isPrivacy ? 'Privacy Policy' : 'Terms & Conditions'

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="relative w-full max-w-2xl bg-white dark:bg-gray-900 rounded-2xl shadow-2xl p-6 sm:p-8 text-left overflow-y-auto max-h-[80vh]"
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ duration: 0.25 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4 mb-4 sm:mb-6">
              <h3 className="text-xl sm:text-2xl font-serif text-magenta dark:text-gold">
                {title}
              </h3>
              <button
                type="button"
                onClick={onClose}
                className="text-gray-500 hover:text-magenta dark:hover:text-gold text-xl leading-none"
                aria-label="Close"
              >
                &times;
              </button>
            </div>

            {isPrivacy ? (
              <div className="space-y-3 sm:space-y-4 text-sm sm:text-base text-gray-700 dark:text-gray-300">
                <p>
                  Khushboobynoorarts respects your privacy. Any personal information collected through this website, such as name, contact details, 
                  or business information, is used only to process inquiries, orders, and provide our services.
                </p>
                <p>
                  We do not sell, rent, or share your personal data with third parties, except where required for order fulfillment, shipping, or by law.
                   We take reasonable measures to protect your information.
                </p>
                <p className="italic text-gray-500 dark:text-gray-400">
                  By using this website, you consent to this Privacy Policy.
                </p>
              </div>
            ) : (
              <div className="space-y-3 sm:space-y-4 text-sm sm:text-base text-gray-700 dark:text-gray-300">
                <p>
                  By accessing or using this website, you agree to the following terms. Khushboobynoorarts deals in the wholesale, bulk supply, and export of ladies suits.
                   All product images and descriptions are for reference only and may vary slightly.
                </p>
                <p>
                  Prices, availability, and delivery timelines are subject to change without prior notice. Orders are confirmed only after payment terms and order details are mutually agreed upon. Bulk and customized orders are generally non-returnable and non-refundable.

                    For export orders, buyers are responsible for applicable customs duties, taxes, and clearance charges. Khushboobynoorarts is not liable for delays caused by logistics, customs, or unforeseen circumstances.
                </p>
                <p className="italic text-gray-500 dark:text-gray-400">
                  All website content and designs are the intellectual property of Khushboobynoorarts. Unauthorized use is prohibited. These terms are governed by applicable local laws.
                </p>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default LegalModal

