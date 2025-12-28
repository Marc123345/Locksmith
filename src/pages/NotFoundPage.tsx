import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Home, Wrench, MapPin, Phone, Search } from 'lucide-react';

export default function NotFoundPage() {
  return (
    <>
      <Helmet>
        <title>404 - Page Not Found | Annapolis Locksmith</title>
        <meta name="robots" content="noindex,nofollow" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white flex items-center justify-center px-4">
        <div className="max-w-2xl w-full text-center">
          <div className="mb-8">
            <h1 className="text-9xl font-bold text-gray-200">404</h1>
            <h2 className="text-3xl font-bold text-gray-900 mt-4">Page Not Found</h2>
            <p className="text-lg text-gray-600 mt-4">
              Sorry, we couldn't find the page you're looking for. The page may have been moved or deleted.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-12">
            <Link
              to="/"
              className="flex items-center justify-center gap-3 bg-blue-600 text-white px-6 py-4 rounded-lg hover:bg-blue-700 transition-colors"
            >
              <Home className="w-5 h-5" />
              <span className="font-semibold">Go Home</span>
            </Link>

            <Link
              to="/services"
              className="flex items-center justify-center gap-3 bg-gray-800 text-white px-6 py-4 rounded-lg hover:bg-gray-900 transition-colors"
            >
              <Wrench className="w-5 h-5" />
              <span className="font-semibold">View Services</span>
            </Link>

            <Link
              to="/locations"
              className="flex items-center justify-center gap-3 bg-gray-100 text-gray-900 px-6 py-4 rounded-lg hover:bg-gray-200 transition-colors"
            >
              <MapPin className="w-5 h-5" />
              <span className="font-semibold">Service Areas</span>
            </Link>

            <Link
              to="/contact"
              className="flex items-center justify-center gap-3 bg-gray-100 text-gray-900 px-6 py-4 rounded-lg hover:bg-gray-200 transition-colors"
            >
              <Phone className="w-5 h-5" />
              <span className="font-semibold">Contact Us</span>
            </Link>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center justify-center gap-2">
              <Search className="w-5 h-5" />
              Looking for something specific?
            </h3>
            <div className="flex flex-col gap-2 text-sm text-gray-600">
              <p>Need emergency locksmith services? <a href="tel:4105551234" className="text-blue-600 hover:underline">Call (410) 555-1234</a></p>
              <p>View our <Link to="/sitemap" className="text-blue-600 hover:underline">sitemap</Link> for a complete list of pages</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
