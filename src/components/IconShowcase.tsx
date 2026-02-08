import { motion } from 'framer-motion';
import { Lock, Key, Shield, Smartphone, Building2, Zap, ThumbsUp } from 'lucide-react';

interface IconShowcaseItem {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
}

const showcaseItems: IconShowcaseItem[] = [
  {
    icon: <Lock className="h-10 w-10" />,
    title: 'Lock Installation',
    description: 'Expert installation of all lock types for homes and businesses',
    color: 'from-blue-500 to-blue-600'
  },
  {
    icon: <Zap className="h-10 w-10" />,
    title: 'Emergency Service',
    description: 'Fast response to lockouts and emergency situations',
    color: 'from-red-500 to-red-600'
  },
  {
    icon: <Smartphone className="h-10 w-10" />,
    title: 'Smart Lock Upgrades',
    description: 'Modern security solutions with smart lock technology',
    color: 'from-purple-500 to-purple-600'
  },
  {
    icon: <Key className="h-10 w-10" />,
    title: 'Automotive Keys',
    description: 'Car key cutting, programming, and replacement services',
    color: 'from-green-500 to-green-600'
  },
  {
    icon: <Building2 className="h-10 w-10" />,
    title: 'Commercial Security',
    description: 'Advanced security systems for businesses and offices',
    color: 'from-orange-500 to-orange-600'
  },
  {
    icon: <Shield className="h-10 w-10" />,
    title: 'Lock Rekeying',
    description: 'Professional rekeying service for enhanced security',
    color: 'from-teal-500 to-teal-600'
  }
];

export const IconShowcase = () => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {showcaseItems.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          className="group relative bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 border border-gray-100 overflow-hidden"
        >
          {/* Gradient Background on Hover */}
          <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-5 transition-opacity`} />

          <div className="relative">
            {/* Icon Container */}
            <div className={`inline-flex items-center justify-center w-16 h-16 rounded-lg bg-gradient-to-br ${item.color} text-white mb-4 group-hover:scale-110 transition-transform shadow-md`}>
              {item.icon}
            </div>

            {/* Content */}
            <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
              {item.title}
            </h3>
            <p className="text-gray-600 leading-relaxed">
              {item.description}
            </p>

            {/* Checkmark Indicator */}
            <div className="mt-4 flex items-center text-green-600">
              <ThumbsUp className="h-4 w-4 mr-2" />
              <span className="text-sm font-medium">Available Now</span>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default IconShowcase;
