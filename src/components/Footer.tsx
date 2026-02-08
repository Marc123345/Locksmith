import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Phone, MapPin, Clock } from "lucide-react";
import { CONTACT } from "@/utils/contact";

const Footer = () => {
  return (
    <footer className="bg-muted pt-16 pb-6 mt-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="space-y-4 lg:col-span-2">
            <Link to="/" className="inline-block hover:opacity-80 transition-opacity" aria-label="Return to homepage">
              <img
                src="https://i.imgur.com/VfpMzbE.png"
                alt="A Secure Annapolis Locksmith Logo"
                width="200"
                height="64"
                className="h-16 w-auto"
                loading="lazy"
              />
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Professional locksmith services offering residential, commercial, and automotive solutions. Licensed, bonded, and insured for your peace of mind.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/asecureannapolis"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Follow us on Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://www.instagram.com/asecureannapolis"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Follow us on Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://www.twitter.com/asecureannapolis"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Follow us on Twitter"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-muted-foreground hover:text-primary transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/testimonials" className="text-muted-foreground hover:text-primary transition-colors">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-muted-foreground hover:text-primary transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/sitemap" className="text-muted-foreground hover:text-primary transition-colors">
                  Sitemap
                </Link>
              </li>
            </ul>
          </div>

          {/* Service Areas */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg mb-4">Service Areas</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Annapolis, MD
                </Link>
              </li>
              <li>
                <Link to="/locations/arnold" className="text-muted-foreground hover:text-primary transition-colors">
                  Arnold, MD
                </Link>
              </li>
              <li>
                <Link to="/locations/bay-ridge" className="text-muted-foreground hover:text-primary transition-colors">
                  Bay Ridge, MD
                </Link>
              </li>
              <li>
                <Link to="/locations/broadneck" className="text-muted-foreground hover:text-primary transition-colors">
                  Broadneck, MD
                </Link>
              </li>
              <li>
                <Link to="/locations/cape-st-claire" className="text-muted-foreground hover:text-primary transition-colors">
                  Cape St. Claire, MD
                </Link>
              </li>
              <li>
                <Link to="/locations/crownsville" className="text-muted-foreground hover:text-primary transition-colors">
                  Crownsville, MD
                </Link>
              </li>
              <li>
                <Link to="/locations/eastport" className="text-muted-foreground hover:text-primary transition-colors">
                  Eastport, MD
                </Link>
              </li>
              <li>
                <Link to="/locations/edgewater" className="text-muted-foreground hover:text-primary transition-colors">
                  Edgewater, MD
                </Link>
              </li>
              <li>
                <Link to="/locations/edgewater-beach" className="text-muted-foreground hover:text-primary transition-colors">
                  Edgewater Beach, MD
                </Link>
              </li>
              <li>
                <Link to="/locations/hillsmere-shores" className="text-muted-foreground hover:text-primary transition-colors">
                  Hillsmere Shores, MD
                </Link>
              </li>
              <li>
                <Link to="/locations/mayo" className="text-muted-foreground hover:text-primary transition-colors">
                  Mayo, MD
                </Link>
              </li>
              <li>
                <Link to="/locations/parole" className="text-muted-foreground hover:text-primary transition-colors">
                  Parole, MD
                </Link>
              </li>
              <li>
                <Link to="/locations/riva" className="text-muted-foreground hover:text-primary transition-colors">
                  Riva, MD
                </Link>
              </li>
              <li>
                <Link to="/locations/severna-park" className="text-muted-foreground hover:text-primary transition-colors">
                  Severna Park, MD
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services/lock-change" className="text-muted-foreground hover:text-primary transition-colors">
                  Lock Change
                </Link>
              </li>
              <li>
                <Link to="/services/lock-rekey" className="text-muted-foreground hover:text-primary transition-colors">
                  Lock Rekey
                </Link>
              </li>
              <li>
                <Link to="/services/car-key-programming" className="text-muted-foreground hover:text-primary transition-colors">
                  Car Key Programming
                </Link>
              </li>
              <li>
                <Link to="/services/emergency-lockout" className="text-muted-foreground hover:text-primary transition-colors">
                  Emergency Lockout
                </Link>
              </li>
              <li>
                <Link to="/services/lock-repair" className="text-muted-foreground hover:text-primary transition-colors">
                  Lock Repair
                </Link>
              </li>
              <li>
                <Link to="/services/lost-car-keys" className="text-muted-foreground hover:text-primary transition-colors">
                  Lost Car Keys
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <div className="space-y-4">
              <div>
                <p className="text-xs text-muted-foreground mb-2 uppercase tracking-wide">24/7 Emergency</p>
                <a
                  href={`tel:${CONTACT.PHONE}`}
                  className="inline-flex items-center text-primary hover:underline font-bold text-xl"
                >
                  <Phone className="h-5 w-5 mr-2" />
                  {CONTACT.PHONE_DISPLAY}
                </a>
              </div>
              <div className="flex items-start">
                <MapPin className="h-4 w-4 mr-2 text-primary shrink-0 mt-1" />
                <a
                  href={CONTACT.MAPS_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  {CONTACT.ADDRESS}
                </a>
              </div>
              <div className="flex items-start">
                <Clock className="h-4 w-4 mr-2 text-primary shrink-0 mt-1" />
                <div className="text-sm">
                  <p className="font-semibold text-foreground">24/7 Emergency Service</p>
                  <p className="text-muted-foreground text-xs">Mon-Sat: 8AM-8PM | Sun: Emergency Only</p>
                </div>
              </div>
            </div>
            <div className="pt-4 border-t border-border">
              <p className="text-xs text-muted-foreground mb-2">Resources</p>
              <div className="flex flex-col space-y-2">
                <Link to="/privacy" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Privacy Policy
                </Link>
                <Link to="/terms" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Terms of Service
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-6 text-center text-sm text-muted-foreground">
          <p>© 2026 A Secure Annapolis Locksmith. All rights reserved.</p>
          <div className="mt-2 flex flex-wrap justify-center gap-x-4">
            <Link to="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
            <Link to="/sitemap" className="hover:text-primary transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

export { Footer };