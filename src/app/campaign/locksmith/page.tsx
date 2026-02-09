'use client';

import { useSearchParams } from 'next/navigation';
import { Phone } from 'lucide-react';
import { CONTACT } from '@/lib/constants';

export default function LocksmithCampaignPage() {
  const searchParams = useSearchParams();

  const rawKeyword = (searchParams.get('keyword') || '').toLowerCase().trim();
  const utmCampaign = searchParams.get('utm_campaign') || '';
  const matchType = searchParams.get('matchtype') || '';

  let serviceType = 'Emergency Locksmith';
  if (
    rawKeyword.includes('auto locksmith') ||
    rawKeyword.includes('car') ||
    rawKeyword.includes('replacement car keys')
  ) {
    serviceType = 'Automotive Locksmith';
  }

  let location = 'Your Area';
  if (rawKeyword.includes('howard county')) {
    location = 'Howard County';
  } else if (rawKeyword.includes('catonsville')) {
    location = 'Catonsville';
  } else if (rawKeyword.includes('baltimore city') || rawKeyword.includes('baltimore')) {
    location = 'Baltimore';
  }

  const headline = `${serviceType} in ${location}`;

  let subheadline = '';
  if (rawKeyword) {
    subheadline = `Fast, reliable help for "${rawKeyword}"`;
  } else {
    subheadline = `Fast, reliable ${serviceType.toLowerCase()} services when you need them most.`;
  }

  const ctaText = `Call Now for ${serviceType}`;

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
                className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xl px-8 py-4 rounded-lg shadow-lg transition-all transform hover:scale-105"
              >
                <Phone className="h-6 w-6" />
                {ctaText}
              </a>
              <p className="text-2xl font-bold text-blue-600">{CONTACT.PHONE}</p>
              <p className="text-sm text-gray-600">Available Now | 20-30 Minute Response Time</p>
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
                className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg px-6 py-3 rounded-lg shadow-lg transition-all"
              >
                <Phone className="h-5 w-5" />
                Call {CONTACT.PHONE}
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
