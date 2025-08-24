// CustomAlert.jsx
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

export default function CustomAlert({ show, onClose, type = "success", title, message }) {
  const colors = {
    success: "bg-green-100 text-green-600",
    error: "bg-red-100 text-red-600",
    warning: "bg-yellow-100 text-yellow-600",
    info: "bg-blue-100 text-blue-600",
  };

  const icons = {
    success: "✅",
    error: "❌",
    warning: "⚠️",
    info: "ℹ️",
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 flex items-center justify-center bg-black/50 z-50"
        >
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 50, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-white text-gray-900 rounded-2xl shadow-2xl p-6 w-[350px] relative"
          >
            <button
              onClick={onClose}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
            >
              <X size={20} />
            </button>

            <div className="flex flex-col items-center text-center gap-4">
              {/* Animated Icon */}
              <motion.div
                initial={{ scale: 0, rotate: -90 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ type: "spring", stiffness: 200, damping: 10 }}
                className={`w-16 h-16 ${colors[type]} flex items-center justify-center rounded-full shadow-md`}
              >
                {icons[type]}
              </motion.div>

              <h2 className="text-xl font-semibold">{title}</h2>
              <p className="text-gray-600 text-sm">{message}</p>

              <motion.button
                whileTap={{ scale: 0.9 }}
                whileHover={{ scale: 1.05 }}
                onClick={onClose}
                className="mt-3 px-5 py-2 bg-[#f8bc15] text-white rounded-xl shadow  transition-all"
              >
                Got it
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
