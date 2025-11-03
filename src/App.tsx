import React from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import ErrorBoundary from '@/components/ErrorBoundary';

// Import pages
import HomePage from '@/pages/HomePage';
import AboutPage from '@/pages/AboutPage';
import ServicesPage from '@/pages/ServicesPage';
import TestimonialsPage from '@/pages/TestimonialsPage';
import ContactPage from '@/pages/ContactPage';
import PrivacyPage from '@/pages/PrivacyPage';
import TermsPage from '@/pages/TermsPage';
import SitemapPage from '@/pages/SitemapPage';

// Import location pages
import ArnoldPage from '@/pages/locations/ArnoldPage';
import EdgewaterPage from '@/pages/locations/EdgewaterPage';
import SevernaParkPage from '@/pages/locations/SevernaParkPage';
import CrownsvillePage from '@/pages/locations/CrownsvillePage';

// Import service pages
import LockChangePage from '@/pages/services/LockChangePage';
import LockRekeyPage from '@/pages/services/LockRekeyPage';
import CarKeyProgrammingPage from '@/pages/services/CarKeyProgrammingPage';
import EmergencyLockoutPage from '@/pages/services/EmergencyLockoutPage';
import LockRepairPage from '@/pages/services/LockRepairPage';
import LostCarKeysPage from '@/pages/services/LostCarKeysPage';

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
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="/sitemap" element={<SitemapPage />} />

            {/* Location pages */}
            <Route path="/locations/arnold" element={<ArnoldPage />} />
            <Route path="/locations/edgewater" element={<EdgewaterPage />} />
            <Route path="/locations/severna-park" element={<SevernaParkPage />} />
            <Route path="/locations/crownsville" element={<CrownsvillePage />} />

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

            {/* Catch all route - redirect to home */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </ErrorBoundary>
  );
}

export default App;