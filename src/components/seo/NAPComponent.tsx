import { CONTACT } from '@/utils/contact';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

interface NAPComponentProps {
  variant?: 'full' | 'compact' | 'footer' | 'inline';
  className?: string;
  showHours?: boolean;
  showEmail?: boolean;
}

export default function NAPComponent({
  variant = 'full',
  className = '',
  showHours = true,
  showEmail = true
}: NAPComponentProps) {

  if (variant === 'inline') {
    return (
      <div className={`inline-flex items-center gap-2 ${className}`}>
        <span itemProp="name">A Secure Annapolis Locksmith</span>
        <span className="text-gray-400">|</span>
        <a
          href={`tel:${CONTACT.PHONE}`}
          itemProp="telephone"
          className="hover:text-primary transition-colors"
        >
          {CONTACT.PHONE_DISPLAY}
        </a>
        <span className="text-gray-400">|</span>
        <span itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
          <span itemProp="streetAddress">222 Severn Ave</span>,{' '}
          <span itemProp="addressLocality">Annapolis</span>,{' '}
          <span itemProp="addressRegion">MD</span>{' '}
          <span itemProp="postalCode">21403</span>
        </span>
      </div>
    );
  }

  if (variant === 'compact') {
    return (
      <div className={`space-y-2 ${className}`} itemScope itemType="https://schema.org/LocalBusiness">
        <meta itemProp="name" content="A Secure Annapolis Locksmith" />
        <meta itemProp="priceRange" content="$$" />

        <div className="flex items-center gap-2">
          <Phone className="h-4 w-4 text-primary flex-shrink-0" />
          <a
            href={`tel:${CONTACT.PHONE}`}
            itemProp="telephone"
            className="hover:text-primary transition-colors font-semibold"
          >
            {CONTACT.PHONE_DISPLAY}
          </a>
        </div>

        <div className="flex items-start gap-2">
          <MapPin className="h-4 w-4 text-primary flex-shrink-0 mt-1" />
          <address
            className="not-italic text-sm"
            itemProp="address"
            itemScope
            itemType="https://schema.org/PostalAddress"
          >
            <span itemProp="streetAddress">222 Severn Ave Ste 1 Building 7-6A</span><br />
            <span itemProp="addressLocality">Annapolis</span>, <span itemProp="addressRegion">MD</span> <span itemProp="postalCode">21403</span>
          </address>
        </div>
      </div>
    );
  }

  if (variant === 'footer') {
    return (
      <div className={className} itemScope itemType="https://schema.org/LocalBusiness">
        <meta itemProp="name" content="A Secure Annapolis Locksmith" />
        <meta itemProp="priceRange" content="$$" />
        <meta itemProp="url" content="https://asecureannapolis.com" />

        <h3 className="text-lg font-bold mb-4">Contact Information</h3>

        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <Phone className="h-5 w-5 text-primary flex-shrink-0" />
            <div>
              <div className="text-sm text-gray-400">Phone</div>
              <a
                href={`tel:${CONTACT.PHONE}`}
                itemProp="telephone"
                className="hover:text-primary transition-colors font-semibold"
              >
                {CONTACT.PHONE_DISPLAY}
              </a>
            </div>
          </div>

          {showEmail && (
            <div className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-primary flex-shrink-0" />
              <div>
                <div className="text-sm text-gray-400">Email</div>
                <a
                  href={`mailto:${CONTACT.EMAIL}`}
                  itemProp="email"
                  className="hover:text-primary transition-colors"
                >
                  {CONTACT.EMAIL}
                </a>
              </div>
            </div>
          )}

          <div className="flex items-start gap-3">
            <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
            <div>
              <div className="text-sm text-gray-400">Address</div>
              <address
                className="not-italic"
                itemProp="address"
                itemScope
                itemType="https://schema.org/PostalAddress"
              >
                <span itemProp="streetAddress">222 Severn Ave Ste 1 Building 7-6A</span><br />
                <span itemProp="addressLocality">Annapolis</span>, <span itemProp="addressRegion">MD</span> <span itemProp="postalCode">21403</span>
              </address>
            </div>
          </div>

          {showHours && (
            <div className="flex items-start gap-3">
              <Clock className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
              <div>
                <div className="text-sm text-gray-400">Hours</div>
                <div itemProp="openingHours" content="Mo-Sa 08:00-20:00">
                  Mon-Sat: 8:00 AM - 8:00 PM<br />
                  Sun: Emergency Service Only
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="hidden">
          <span itemProp="geo" itemScope itemType="https://schema.org/GeoCoordinates">
            <meta itemProp="latitude" content="38.978764" />
            <meta itemProp="longitude" content="-76.492786" />
          </span>
        </div>
      </div>
    );
  }

  // Full variant (default)
  return (
    <div
      className={`bg-white rounded-xl shadow-lg p-8 border border-gray-100 ${className}`}
      itemScope
      itemType="https://schema.org/LocalBusiness"
    >
      <meta itemProp="name" content="A Secure Annapolis Locksmith" />
      <meta itemProp="priceRange" content="$$" />
      <meta itemProp="url" content="https://asecureannapolis.com" />
      <meta itemProp="image" content="https://asecureannapolis.com/logo.png" />

      <h3 className="text-2xl font-bold text-gray-900 mb-6">Get In Touch</h3>

      <div className="space-y-6">
        <div className="flex items-center gap-4">
          <div className="bg-blue-100 rounded-full p-3">
            <Phone className="h-6 w-6 text-blue-600" />
          </div>
          <div>
            <div className="text-sm text-gray-500 font-medium">Call Us Now</div>
            <a
              href={`tel:${CONTACT.PHONE}`}
              itemProp="telephone"
              className="text-xl font-bold text-gray-900 hover:text-primary transition-colors"
            >
              {CONTACT.PHONE_DISPLAY}
            </a>
          </div>
        </div>

        {showEmail && (
          <div className="flex items-center gap-4">
            <div className="bg-green-100 rounded-full p-3">
              <Mail className="h-6 w-6 text-green-600" />
            </div>
            <div>
              <div className="text-sm text-gray-500 font-medium">Email Us</div>
              <a
                href={`mailto:${CONTACT.EMAIL}`}
                itemProp="email"
                className="text-lg text-gray-900 hover:text-primary transition-colors break-all"
              >
                {CONTACT.EMAIL}
              </a>
            </div>
          </div>
        )}

        <div className="flex items-start gap-4">
          <div className="bg-blue-100 rounded-full p-3">
            <MapPin className="h-6 w-6 text-blue-600" />
          </div>
          <div>
            <div className="text-sm text-gray-500 font-medium mb-1">Our Location</div>
            <address
              className="not-italic text-gray-900"
              itemProp="address"
              itemScope
              itemType="https://schema.org/PostalAddress"
            >
              <span itemProp="streetAddress">222 Severn Ave Ste 1 Building 7-6A</span><br />
              <span itemProp="addressLocality">Annapolis</span>, <span itemProp="addressRegion">MD</span> <span itemProp="postalCode">21403</span><br />
              <span itemProp="addressCountry">United States</span>
            </address>
            <a
              href="https://www.google.com/maps/place/222+Severn+Ave,+Annapolis,+MD+21403"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline text-sm mt-2 inline-block"
            >
              Get Directions →
            </a>
          </div>
        </div>

        {showHours && (
          <div className="flex items-start gap-4">
            <div className="bg-orange-100 rounded-full p-3">
              <Clock className="h-6 w-6 text-orange-600" />
            </div>
            <div>
              <div className="text-sm text-gray-500 font-medium mb-1">Business Hours</div>
              <div className="text-gray-900" itemProp="openingHours" content="Mo-Sa 08:00-20:00">
                <div>Monday - Saturday</div>
                <div className="font-semibold">8:00 AM - 8:00 PM</div>
                <div className="mt-2">Sunday</div>
                <div className="font-semibold">Emergency Service Only</div>
              </div>
            </div>
          </div>
        )}

        <div className="pt-4 border-t border-gray-200">
          <div className="text-sm text-gray-600">
            Serving <span itemProp="areaServed">Annapolis, Arnold, Severna Park, Edgewater, and surrounding Anne Arundel County areas</span>
          </div>
        </div>
      </div>

      <div className="hidden">
        <span itemProp="geo" itemScope itemType="https://schema.org/GeoCoordinates">
          <meta itemProp="latitude" content="38.978764" />
          <meta itemProp="longitude" content="-76.492786" />
        </span>
      </div>
    </div>
  );
}
