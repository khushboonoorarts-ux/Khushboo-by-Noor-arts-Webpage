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
                  This is a placeholder Privacy Policy. You can update this text with your own
                  privacy details, including how you handle customer data, WhatsApp inquiries,
                  and contact form submissions.
                </p>
                <p>
                  Typically, you would describe what information you collect (such as name,
                  email, phone number), how it is used, and how customers can contact you for
                  any privacy-related questions.
                </p>
                <p className="italic text-gray-500 dark:text-gray-400">
                  Tip: Edit the content of <code>LegalModal.jsx</code> to add your actual
                  Privacy Policy wording.
                </p>
              </div>
            ) : (
              <div className="space-y-3 sm:space-y-4 text-sm sm:text-base text-gray-700 dark:text-gray-300">
                <p>
                  This is a placeholder Terms &amp; Conditions section. Use this area to outline
                  the terms for wholesale orders, pricing, returns, and any other conditions
                  relevant to Khushboo By Noor Arts.
                </p>
                <p>
                  You may want to include details about minimum order quantities, payment
                  methods, delivery or pickup policies, and how disputes are handled.
                </p>
                <p className="italic text-gray-500 dark:text-gray-400">
                  Tip: Edit the content of <code>LegalModal.jsx</code> to add your actual
                  Terms &amp; Conditions wording.
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

