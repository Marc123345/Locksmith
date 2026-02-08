import React from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import ErrorBoundary from '@/components/ErrorBoundary';

// Import pages
import HomePage from '@/views/HomePage';
import AboutPage from '@/views/AboutPage';
import ServicesPage from '@/views/ServicesPage';
import TestimonialsPage from '@/views/TestimonialsPage';
import ContactPage from '@/views/ContactPage';
import PrivacyPage from '@/views/PrivacyPage';
import TermsPage from '@/views/TermsPage';
import SitemapPage from '@/views/SitemapPage';
import BlogPage from '@/views/BlogPage';
import BlogPostPage from '@/views/BlogPostPage';
import LocationsPage from '@/views/LocationsPage';
import NotFoundPage from '@/views/NotFoundPage';

// Import location pages
import ArnoldPage from '@/views/locations/ArnoldPage';
import EdgewaterPage from '@/views/locations/EdgewaterPage';
import SevernaParkPage from '@/views/locations/SevernaParkPage';
import CrownsvillePage from '@/views/locations/CrownsvillePage';
import AnnapolisPage from '@/views/locations/AnnapolisPage';
import ParolePage from '@/views/locations/ParolePage';
import BayRidgePage from '@/views/locations/BayRidgePage';
import HillsmereShoresPage from '@/views/locations/HillsmereShoresPage';
import EastportPage from '@/views/locations/EastportPage';
import RivaPage from '@/views/locations/RivaPage';
import CapeStClairePage from '@/views/locations/CapeStClairePage';
import BroadneckPage from '@/views/locations/BroadneckPage';
import EdgewaterBeachPage from '@/views/locations/EdgewaterBeachPage';
import MayoPage from '@/views/locations/MayoPage';

// Import service pages
import LockChangePage from '@/views/services/LockChangePage';
import LockRekeyPage from '@/views/services/LockRekeyPage';
import CarKeyProgrammingPage from '@/views/services/CarKeyProgrammingPage';
import EmergencyLockoutPage from '@/views/services/EmergencyLockoutPage';
import LockRepairPage from '@/views/services/LockRepairPage';
import LostCarKeysPage from '@/views/services/LostCarKeysPage';

function ScrollToTop() {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <ErrorBoundary>
      <div className="min-h-screen flex flex-col">
        <ScrollToTop />
        <Header />
        <Breadcrumbs />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/testimonials" element={<TestimonialsPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:slug" element={<BlogPostPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="/sitemap" element={<SitemapPage />} />
            <Route path="/locations" element={<LocationsPage />} />

            {/* Location pages */}
            <Route path="/locations/arnold" element={<ArnoldPage />} />
            <Route path="/locations/edgewater" element={<EdgewaterPage />} />
            <Route path="/locations/severna-park" element={<SevernaParkPage />} />
            <Route path="/locations/crownsville" element={<CrownsvillePage />} />
            <Route path="/locations/annapolis" element={<AnnapolisPage />} />
            <Route path="/locations/parole" element={<ParolePage />} />
            <Route path="/locations/bay-ridge" element={<BayRidgePage />} />
            <Route path="/locations/hillsmere-shores" element={<HillsmereShoresPage />} />
            <Route path="/locations/eastport" element={<EastportPage />} />
            <Route path="/locations/riva" element={<RivaPage />} />
            <Route path="/locations/cape-st-claire" element={<CapeStClairePage />} />
            <Route path="/locations/broadneck" element={<BroadneckPage />} />
            <Route path="/locations/edgewater-beach" element={<EdgewaterBeachPage />} />
            <Route path="/locations/mayo" element={<MayoPage />} />

            {/* Specific service pages */}
            <Route path="/services/lock-change" element={<LockChangePage />} />
            <Route path="/services/lock-rekey" element={<LockRekeyPage />} />
            <Route path="/services/car-key-programming" element={<CarKeyProgrammingPage />} />
            <Route path="/services/emergency-lockout" element={<EmergencyLockoutPage />} />
            <Route path="/services/lock-repair" element={<LockRepairPage />} />
            <Route path="/services/lost-car-keys" element={<LostCarKeysPage />} />

            {/* Service-specific routes with hash navigation */}
            <Route
              path="/services/residential"
              element={<Navigate to="/services#residential" replace />}
            />
            <Route
              path="/services/commercial"
              element={<Navigate to="/services#commercial" replace />}
            />
            <Route
              path="/services/automotive"
              element={<Navigate to="/services#automotive" replace />}
            />
            <Route
              path="/services/emergency"
              element={<Navigate to="/services#emergency" replace />}
            />

            {/* Catch all route - 404 page */}
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </ErrorBoundary>
  );
}

export default App;