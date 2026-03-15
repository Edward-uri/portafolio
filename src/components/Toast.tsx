import { motion, AnimatePresence } from 'framer-motion';
import { FiCheckCircle, FiAlertCircle, FiInfo, FiX } from 'react-icons/fi';
import { useEffect } from 'react';

export type ToastType = 'success' | 'error' | 'info';

interface ToastProps {
  message: string;
  type?: ToastType;
  isVisible: boolean;
  onClose: () => void;
  duration?: number;
}

const toastVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: { opacity: 1, y: 0, scale: 1 },
  exit: { opacity: 0, y: 20, scale: 0.9 },
};

const icons = {
  success: <FiCheckCircle className="w-5 h-5 text-green-400" />,
  error: <FiAlertCircle className="w-5 h-5 text-red-400" />,
  info: <FiInfo className="w-5 h-5 text-blue-400" />,
};

const bgColors = {
  success: 'bg-neutral-900 border-green-500/20',
  error: 'bg-neutral-900 border-red-500/20',
  info: 'bg-neutral-900 border-blue-500/20',
};

export const Toast = ({ message, type = 'info', isVisible, onClose, duration = 3000 }: ToastProps) => {
  useEffect(() => {
    if (isVisible && duration > 0) {
      const timer = setTimeout(onClose, duration);
      return () => clearTimeout(timer);
    }
  }, [isVisible, duration, onClose]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          variants={toastVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className={`fixed bottom-6 right-6 z-50 flex items-center gap-3 px-4 py-3 
            rounded-xl border shadow-lg backdrop-blur-md ${bgColors[type]}
            max-w-md w-full md:w-auto min-w-[300px]`}
        >
          {icons[type]}
          
          <p className="text-sm font-medium text-neutral-200 flex-1">
            {message}
          </p>

          <button 
            onClick={onClose}
            className="p-1 rounded-full hover:bg-neutral-800 text-neutral-500 hover:text-white transition-colors"
          >
            <FiX size={16} />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
