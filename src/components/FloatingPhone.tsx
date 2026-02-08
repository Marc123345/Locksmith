import { Phone } from 'lucide-react';
import { motion } from 'framer-motion';
import { CONTACT } from '@/utils/contact';

export const FloatingPhone = () => {
  return (
    <motion.a
      href={`tel:${CONTACT.PHONE}`}
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-20 right-6 z-50 lg:bottom-6 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-full p-4 shadow-2xl hover:shadow-3xl transition-all group"
      aria-label="Call us now"
    >
      <Phone className="h-6 w-6" />
      <span className="absolute top-0 right-0 flex h-3 w-3">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
      </span>

      <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white px-4 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
        <div className="text-sm font-medium">Call Now</div>
        <div className="text-xs">{CONTACT.PHONE_DISPLAY}</div>
        <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full">
          <div className="border-8 border-transparent border-l-gray-900"></div>
        </div>
      </div>
    </motion.a>
  );
};

export default FloatingPhone;
