import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Phone, MapPin, Clock } from "lucide-react";
import { CONTACT } from "@/utils/contact";

const Footer = () => {
  return (
    <footer className="bg-muted pt-12 pb-6 mt-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link to="/" className="inline-block hover:opacity-80 transition-opacity">
              <img 
                src="https://i.imgur.com/VfpMzbE.png" 
                alt="A Secure Annapolis Locksmith Logo" 
                className="h-16 w-auto"
              />
            </Link>
            <p className="text-muted-foreground">
              Professional locksmith services offering residential, commercial, and automotive solutions, including lockouts. Licensed, bonded, and insured for your peace of mind.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://facebook.com/asecureannapolis" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Follow us on Facebook"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="https://instagram.com/asecureannapolis" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Follow us on Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://twitter.com/asecureannapolis" 
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
                <Link to="/locations/annapolis" className="text-muted-foreground hover:text-primary transition-colors">
                  Annapolis
                </Link>
              </li>
              <li>
                <Link to="/locations/arnold" className="text-muted-foreground hover:text-primary transition-colors">
                  Arnold
                </Link>
              </li>
              <li>
                <Link to="/locations/edgewater" className="text-muted-foreground hover:text-primary transition-colors">
                  Edgewater
                </Link>
              </li>
              <li>
                <Link to="/locations/severna-park" className="text-muted-foreground hover:text-primary transition-colors">
                  Severna Park
                </Link>
              </li>
              <li>
                <Link to="/locations/parole" className="text-muted-foreground hover:text-primary transition-colors">
                  Parole
                </Link>
              </li>
              <li>
                <Link to="/locations/eastport" className="text-muted-foreground hover:text-primary transition-colors">
                  Eastport
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

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Phone className="h-5 w-5 mr-2 text-primary shrink-0 mt-0.5" />
                <a href={`tel:${CONTACT.PHONE}`} className="hover:text-primary transition-colors">
                  {CONTACT.PHONE_DISPLAY}
                </a>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 text-primary shrink-0 mt-0.5" />
                <a 
                  href={CONTACT.MAPS_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  {CONTACT.ADDRESS}
                </a>
              </li>
              <li className="flex items-start">
                <Clock className="h-5 w-5 mr-2 text-primary shrink-0 mt-0.5" />
                <div>
                  <p>Hours of Operation:</p>
                  <ul className="text-sm text-muted-foreground space-y-1 mt-1">
                    {CONTACT.HOURS.map(({ day, hours }) => (
                      <li key={day}>{day}: {hours}</li>
                    ))}
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-6 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} A Secure Annapolis Locksmith. All rights reserved.</p>
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