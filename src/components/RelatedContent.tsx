import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, Wrench } from 'lucide-react';
import { motion } from 'framer-motion';

interface RelatedLink {
  title: string;
  description: string;
  href: string;
  type: 'service' | 'location';
}

interface RelatedContentProps {
  links: RelatedLink[];
  title?: string;
}

export const RelatedContent = ({ links, title = 'Related Services & Areas' }: RelatedContentProps) => {
  if (links.length === 0) return null;

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">{title}</h2>
          <p className="text-lg text-gray-600">
            Explore more locksmith services and locations we serve
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {links.map((link, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link
                to={link.href}
                className="group block bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all hover:-translate-y-1 border-2 border-transparent hover:border-blue-500"
              >
                <div className="flex items-start gap-4">
                  <div className={`flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center ${
                    link.type === 'service'
                      ? 'bg-blue-100 text-blue-600'
                      : 'bg-green-100 text-green-600'
                  }`}>
                    {link.type === 'service' ? (
                      <Wrench className="h-6 w-6" />
                    ) : (
                      <MapPin className="h-6 w-6" />
                    )}
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {link.title}
                    </h3>
                    <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                      {link.description}
                    </p>
                    <div className="flex items-center text-blue-600 text-sm font-medium group-hover:translate-x-1 transition-transform">
                      Learn more
                      <ArrowRight className="h-4 w-4 ml-1" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelatedContent;
