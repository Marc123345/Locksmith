'use client';

import { useSearchParams } from 'next/navigation';
import { Phone, MessageSquare } from 'lucide-react';
import { CONTACT } from '@/utils/contact';
import { useState, Suspense } from 'react';

function detectServiceType(keyword: string): string {
  const lowerKeyword = keyword.toLowerCase();

  if (lowerKeyword.includes('car') ||
      lowerKeyword.includes('auto') ||
      lowerKeyword.includes('key') ||
      lowerKeyword.includes('keys') ||
      lowerKeyword.includes('replacement car keys')) {
    return 'Automotive Locksmith';
  }

  if (lowerKeyword.includes('house') ||
      lowerKeyword.includes('home') ||
      lowerKeyword.includes('apartment') ||
      lowerKeyword.includes('residential')) {
    return 'Residential Locksmith';
  }

  if (lowerKeyword.includes('business') ||
      lowerKeyword.includes('office') ||
      lowerKeyword.includes('commercial')) {
    return 'Commercial Locksmith';
  }

  return 'Emergency Locksmith';
}

function detectLocation(keyword: string): string {
  const lowerKeyword = keyword.toLowerCase();

  if (lowerKeyword.includes('annapolis')) return 'Annapolis';
  if (lowerKeyword.includes('arnold')) return 'Arnold';
  if (lowerKeyword.includes('edgewater')) return 'Edgewater';
  if (lowerKeyword.includes('severna park')) return 'Severna Park';
  if (lowerKeyword.includes('crownsville')) return 'Crownsville';
  if (lowerKeyword.includes('parole')) return 'Parole';
  if (lowerKeyword.includes('eastport')) return 'Eastport';
  if (lowerKeyword.includes('bay ridge')) return 'Bay Ridge';
  if (lowerKeyword.includes('hillsmere')) return 'Hillsmere Shores';
  if (lowerKeyword.includes('cape st claire') || lowerKeyword.includes('cape st. claire')) return 'Cape St. Claire';
  if (lowerKeyword.includes('broadneck')) return 'Broadneck';
  if (lowerKeyword.includes('mayo')) return 'Mayo';
  if (lowerKeyword.includes('riva')) return 'Riva';
  if (lowerKeyword.includes('howard county')) return 'Howard County';
  if (lowerKeyword.includes('catonsville')) return 'Catonsville';
  if (lowerKeyword.includes('baltimore city') || lowerKeyword.includes('baltimore')) return 'Baltimore';

  return 'Your Area';
}

function trackPhoneClick(keyword: string, campaign: string, serviceType: string, location: string) {
  if (typeof window !== 'undefined') {
    if (window.gtag) {
      window.gtag('event', 'phone_click', {
        keyword: keyword,
        campaign: campaign,
        service_type: serviceType,
        location: location,
        event_category: 'engagement',
        event_label: 'Call Button Click'
      });
    }

    if (window.plausible) {
      window.plausible('Phone Click', {
        props: {
          keyword: keyword,
          campaign: campaign,
          service_type: serviceType,
          location: location
        }
      });
    }
  }
}

function LocksmithCampaignContent() {
  const searchParams = useSearchParams();
  const [showForm, setShowForm] = useState(false);

  const rawKeyword = (searchParams.get('keyword') || '').toLowerCase().trim();
  const utmCampaign = searchParams.get('utm_campaign') || '';
  const matchType = searchParams.get('matchtype') || '';

  const serviceType = detectServiceType(rawKeyword);
  const location = detectLocation(rawKeyword);

  const headline = `${serviceType} in ${location}`;

  let subheadline = '';
  if (rawKeyword) {
    subheadline = `Fast, reliable help for "${rawKeyword}"`;
  } else {
    subheadline = `Fast, reliable ${serviceType.toLowerCase()} services when you need them most.`;
  }

  const ctaText = `Call Now for ${serviceType}`;

  const handlePhoneClick = () => {
    trackPhoneClick(rawKeyword, utmCampaign, serviceType, location);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Main Content */}
          <div className="bg-white rounded-lg shadow-xl p-8 md:p-12 mb-8">
            {/* Logo/Brand */}
            <div className="text-center mb-8">
              <h3 className="text-xl font-semibold text-gray-800">A Secure Annapolis Locksmith</h3>
              <p className="text-sm text-gray-600 mt-1">Licensed & Insured | Same-Day Service</p>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-4">
              {headline}
            </h1>

            {/* Subheadline */}
            <p className="text-xl text-gray-700 text-center mb-8">
              {subheadline}
            </p>

            {/* CTA Button */}
            <div className="flex flex-col items-center gap-4 mb-8">
              <a
                href={`tel:${CONTACT.PHONE}`}
                onClick={handlePhoneClick}
                className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xl px-8 py-4 rounded-lg shadow-lg transition-all transform hover:scale-105"
              >
                <Phone className="h-6 w-6" />
                {ctaText}
              </a>
              <p className="text-2xl font-bold text-blue-600">{CONTACT.PHONE_DISPLAY}</p>
              <p className="text-sm text-gray-600">Available Now | 20-30 Minute Response Time</p>
              <button
                onClick={() => setShowForm(!showForm)}
                className="text-blue-600 hover:text-blue-700 font-semibold text-sm underline flex items-center gap-2"
              >
                <MessageSquare className="h-4 w-4" />
                {showForm ? 'Hide Contact Form' : 'Or Send Us a Message'}
              </button>
            </div>

            {/* Key Benefits */}
            <div className="grid md:grid-cols-3 gap-6 mt-12 pt-8 border-t border-gray-200">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">20-30 Min</div>
                <p className="text-gray-700">Fast Response Time</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">Licensed</div>
                <p className="text-gray-700">Fully Insured</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">Same Day</div>
                <p className="text-gray-700">Service Available</p>
              </div>
            </div>

            {/* Contact Form */}
            {showForm && (
              <div className="mt-8 p-6 bg-gray-50 rounded-lg border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Send Us a Quick Message</h3>
                <form className="space-y-4" onSubmit={(e) => {
                  e.preventDefault();
                  const formData = new FormData(e.currentTarget);

                  if (window.gtag) {
                    window.gtag('event', 'form_submit', {
                      keyword: rawKeyword,
                      campaign: utmCampaign,
                      service_type: serviceType,
                      location: location,
                      event_category: 'engagement',
                      event_label: 'Contact Form Submission'
                    });
                  }

                  if (window.plausible) {
                    window.plausible('Form Submit', {
                      props: {
                        keyword: rawKeyword,
                        campaign: utmCampaign,
                        service_type: serviceType,
                        location: location
                      }
                    });
                  }

                  alert('Thank you! We will contact you shortly at ' + formData.get('phone'));
                }}>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
                      Service Needed
                    </label>
                    <select
                      id="service"
                      name="service"
                      defaultValue={serviceType}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    >
                      <option value="Emergency Locksmith">Emergency Locksmith</option>
                      <option value="Automotive Locksmith">Automotive Locksmith</option>
                      <option value="Residential Locksmith">Residential Locksmith</option>
                      <option value="Commercial Locksmith">Commercial Locksmith</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Brief Description
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={3}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                      placeholder="Tell us what you need help with..."
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-all"
                  >
                    Send Message
                  </button>
                  <p className="text-xs text-gray-600 text-center">
                    For immediate assistance, please call {CONTACT.PHONE_DISPLAY}
                  </p>
                </form>
              </div>
            )}

            {/* Services List */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Our Services</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <div className="text-blue-600 text-xl">✓</div>
                  <p className="text-gray-700">Emergency Lockout Service</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="text-blue-600 text-xl">✓</div>
                  <p className="text-gray-700">Lock Rekeying & Installation</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="text-blue-600 text-xl">✓</div>
                  <p className="text-gray-700">Car Key Replacement</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="text-blue-600 text-xl">✓</div>
                  <p className="text-gray-700">Smart Lock Installation</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="text-blue-600 text-xl">✓</div>
                  <p className="text-gray-700">Commercial Lock Systems</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="text-blue-600 text-xl">✓</div>
                  <p className="text-gray-700">Automotive Locksmith Services</p>
                </div>
              </div>
            </div>

            {/* Final CTA */}
            <div className="mt-12 text-center bg-blue-50 rounded-lg p-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Need Help Now?</h3>
              <a
                href={`tel:${CONTACT.PHONE}`}
                onClick={handlePhoneClick}
                className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg px-6 py-3 rounded-lg shadow-lg transition-all"
              >
                <Phone className="h-5 w-5" />
                Call {CONTACT.PHONE_DISPLAY}
              </a>
            </div>
          </div>

          {/* Debug Box */}
          <div className="bg-gray-100 border-2 border-gray-300 rounded-lg p-4 text-sm">
            <h3 className="font-bold text-gray-900 mb-2">Debug Information</h3>
            <div className="space-y-1 text-gray-700">
              <p><strong>Keyword:</strong> {rawKeyword || '(none)'}</p>
              <p><strong>UTM Campaign:</strong> {utmCampaign || '(none)'}</p>
              <p><strong>Match Type:</strong> {matchType || '(none)'}</p>
              <p><strong>Service Type:</strong> {serviceType}</p>
              <p><strong>Location:</strong> {location}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function LocksmithCampaignPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex items-center justify-center">
        <div className="text-center">
          <div className="text-xl font-semibold text-gray-800">Loading...</div>
        </div>
      </div>
    }>
      <LocksmithCampaignContent />
    </Suspense>
  );
}
