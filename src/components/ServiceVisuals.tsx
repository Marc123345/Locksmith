import { motion } from 'framer-motion';
import { Shield, Clock, Award, CheckCircle, TrendingUp, Users } from 'lucide-react';

interface ServiceVisualsProps {
  serviceName: string;
}

export const ServiceVisuals = ({ serviceName }: ServiceVisualsProps) => {
  const stats = [
    {
      icon: <Users className="h-8 w-8" />,
      value: '500+',
      label: 'Happy Customers',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: <Clock className="h-8 w-8" />,
      value: '<30min',
      label: 'Average Response',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: <Award className="h-8 w-8" />,
      value: '15+',
      label: 'Years Experience',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      value: '98%',
      label: 'Success Rate',
      color: 'from-orange-500 to-orange-600'
    }
  ];

  return (
    <div className="space-y-8">
      {/* Stats Grid */}
      <div className="grid grid-cols-2 gap-4">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className={`bg-gradient-to-br ${stat.color} rounded-xl p-6 text-white shadow-lg hover:shadow-xl transition-all hover:-translate-y-1`}
          >
            <div className="flex flex-col items-center text-center">
              <div className="mb-3 opacity-90">{stat.icon}</div>
              <div className="text-3xl font-bold mb-1">{stat.value}</div>
              <div className="text-sm opacity-90">{stat.label}</div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Process Flow Infographic */}
      <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-8 shadow-lg border border-gray-200">
        <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
          Our Simple 4-Step Process
        </h3>
        <div className="space-y-4">
          {[
            { step: 1, title: 'Contact Us', desc: 'Call or message us anytime' },
            { step: 2, title: 'Assessment', desc: 'We evaluate your needs' },
            { step: 3, title: 'Service', desc: 'Expert work performed' },
            { step: 4, title: 'Satisfaction', desc: 'Guaranteed quality results' }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center gap-4 p-4 rounded-lg bg-white shadow-md hover:shadow-lg transition-all"
            >
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center text-white font-bold text-lg">
                {item.step}
              </div>
              <div className="flex-1">
                <div className="font-bold text-gray-900">{item.title}</div>
                <div className="text-sm text-gray-600">{item.desc}</div>
              </div>
              <CheckCircle className="h-6 w-6 text-green-600" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Trust Indicators */}
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-green-50 rounded-lg p-4 border-2 border-green-200">
          <Shield className="h-8 w-8 text-green-600 mb-2" />
          <div className="font-bold text-gray-900">Licensed & Insured</div>
          <div className="text-sm text-gray-600">Full liability coverage</div>
        </div>
        <div className="bg-blue-50 rounded-lg p-4 border-2 border-blue-200">
          <Award className="h-8 w-8 text-blue-600 mb-2" />
          <div className="font-bold text-gray-900">Certified Experts</div>
          <div className="text-sm text-gray-600">Trained professionals</div>
        </div>
      </div>
    </div>
  );
};

export default ServiceVisuals;
