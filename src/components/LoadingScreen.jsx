import { motion } from 'framer-motion'

const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 bg-ivory dark:bg-slate-900 flex items-center justify-center z-[100]">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="text-center"
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative"
        >
          <h1 className="text-6xl md:text-8xl font-serif text-slate-800 dark:text-white mb-2 tracking-tighter">
            Khushboo
          </h1>
          <p className="text-sm uppercase tracking-[0.5em] text-magenta dark:text-gold font-medium ml-2">
            By Noor Arts
          </p>

          {/* Animated Line */}
          <motion.div
            className="absolute -bottom-4 left-0 h-[1px] bg-gradient-to-r from-transparent via-magenta dark:via-gold to-transparent"
            initial={{ width: 0, left: "50%" }}
            animate={{ width: "100%", left: "0%" }}
            transition={{ duration: 1.5, delay: 0.5 }}
          />
        </motion.div>

        <div className="mt-16 flex justify-center gap-3">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-1.5 h-1.5 bg-slate-400 dark:bg-slate-600 rounded-full"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.3, 1, 0.3]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: i * 0.2
              }}
            />
          ))}
        </div>
      </motion.div>
    </div>
  )
}

export default LoadingScreen
