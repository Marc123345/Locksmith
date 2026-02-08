import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { MapPin, ArrowRight } from 'lucide-react';
import { getAllLocations } from '@/data/locations';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0
  }
};

export default function LocationsPage() {
  const locations = getAllLocations();

  return (
    <>
      <Helmet>
        <title>Service Areas | A Secure Annapolis Locksmith</title>
        <meta name="description" content="Find professional locksmith services in your area. We serve Annapolis, Severna Park, Arnold, Edgewater, and surrounding Anne Arundel County communities." />
        <meta name="keywords" content="locksmith service areas, Annapolis locksmith, Anne Arundel County locksmith, local locksmith near me" />
        <link rel="canonical" href="https://www.asecureannapolislocksmith.com/locations" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.asecureannapolislocksmith.com/locations" />
        <meta property="og:title" content="Service Areas | A Secure Annapolis Locksmith" />
        <meta property="og:description" content="Find professional locksmith services in your area across Anne Arundel County." />
        <meta property="og:image" content="https://www.asecureannapolislocksmith.com/image.png" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.asecureannapolislocksmith.com/locations" />
        <meta property="twitter:title" content="Service Areas | A Secure Annapolis Locksmith" />
        <meta property="twitter:description" content="Find professional locksmith services in your area across Anne Arundel County." />
        <meta property="twitter:image" content="https://www.asecureannapolislocksmith.com/image.png" />
      </Helmet>

      <div className="min-h-screen bg-white pt-20">
        <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Our Service Areas
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
                Professional locksmith services throughout Anne Arundel County
              </p>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {locations.map((location) => (
                <motion.div
                  key={location.id}
                  variants={itemVariants}
                >
                  <Link
                    to={`/locations/${location.slug}`}
                    className="block group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all p-6 border border-gray-100 hover:-translate-y-1"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center">
                        <div className="bg-blue-100 rounded-full p-3 mr-4">
                          <MapPin className="h-6 w-6 text-blue-600" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                            {location.name}
                          </h3>
                          <p className="text-sm text-gray-500">
                            {location.responseTime} response
                          </p>
                        </div>
                      </div>
                      <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
                    </div>
                    <p className="text-gray-600 mb-4 line-clamp-2">
                      {location.description}
                    </p>
                    {location.neighborhoods && location.neighborhoods.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {location.neighborhoods.slice(0, 3).map((neighborhood, idx) => (
                          <span
                            key={idx}
                            className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded"
                          >
                            {neighborhood}
                          </span>
                        ))}
                        {location.neighborhoods.length > 3 && (
                          <span className="text-xs text-gray-500 px-2 py-1">
                            +{location.neighborhoods.length - 3} more
                          </span>
                        )}
                      </div>
                    )}
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}
