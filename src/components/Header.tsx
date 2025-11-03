import React, { useState, useCallback, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useScroll } from "@/hooks/useScroll";
import { CONTACT } from "@/utils/contact";

const locationLinks = [
  { name: "Annapolis, MD", href: "/locations/annapolis" },
  { name: "Arnold, MD", href: "/locations/arnold" },
  { name: "Bay Ridge, MD", href: "/locations/bay-ridge" },
  { name: "Broadneck, MD", href: "/locations/broadneck" },
  { name: "Cape St. Claire, MD", href: "/locations/cape-st-claire" },
  { name: "Crownsville, MD", href: "/locations/crownsville" },
  { name: "Eastport, MD", href: "/locations/eastport" },
  { name: "Edgewater, MD", href: "/locations/edgewater" },
  { name: "Edgewater Beach, MD", href: "/locations/edgewater-beach" },
  { name: "Hillsmere Shores, MD", href: "/locations/hillsmere-shores" },
  { name: "Mayo, MD", href: "/locations/mayo" },
  { name: "Parole, MD", href: "/locations/parole" },
  { name: "Riva, MD", href: "/locations/riva" },
  { name: "Severna Park, MD", href: "/locations/severna-park" },
];

const serviceLinks = [
  { name: "Lock Change", href: "/services/lock-change" },
  { name: "Lock Rekey", href: "/services/lock-rekey" },
  { name: "Car Key Programming", href: "/services/car-key-programming" },
  { name: "Emergency Lockout", href: "/services/emergency-lockout" },
  { name: "Lock Repair", href: "/services/lock-repair" },
  { name: "Lost Car Keys", href: "/services/lost-car-keys" },
];

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [locationsOpen, setLocationsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileLocationsOpen, setMobileLocationsOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const isScrolled = useScroll(10);
  const location = useLocation();
  const navigate = useNavigate();

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
    setLocationsOpen(false);
    setServicesOpen(false);
    setMobileLocationsOpen(false);
    setMobileServicesOpen(false);
  }, [location.pathname]);

  const toggleMenu = useCallback(() => setIsOpen(prev => !prev), []);
  const closeMenu = useCallback(() => setIsOpen(false), []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Testimonials", href: "/testimonials" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = useCallback((href: string) => {
    if (href === '/') {
      return location.pathname === href;
    }
    return location.pathname.startsWith(href);
  }, [location.pathname]);

  // Handle navigation with hash
  const handleNavigation = (href: string) => {
    navigate(href);
    closeMenu();
    setLocationsOpen(false);
    setServicesOpen(false);
    if (href.includes('#')) {
      setTimeout(() => {
        const element = document.getElementById(href.split('#')[1]);
        element?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled
            ? "bg-background shadow-md"
            : "bg-background/90 backdrop-blur-md"
        )}
        role="banner"
      >
        <div className="container mx-auto px-4">
          <nav className="flex items-center justify-between h-16 md:h-20" role="navigation">
            <Link
              to="/"
              className="flex items-center hover:opacity-80 transition-opacity"
              onClick={closeMenu}
              aria-label="A Secure Annapolis Locksmith Home"
            >
              <img
                src="https://i.imgur.com/VfpMzbE.png"
                alt="A Secure Annapolis Locksmith Logo"
                className="h-12 w-auto md:h-16"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1 lg:space-x-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className={cn(
                    "text-sm lg:text-base transition-colors relative py-2 px-3 font-medium",
                    isActive(link.href)
                      ? "text-primary"
                      : "text-foreground hover:text-primary"
                  )}
                  onClick={() => handleNavigation(link.href)}
                  aria-current={isActive(link.href) ? "page" : undefined}
                >
                  {link.name}
                </Link>
              ))}

              {/* Locations Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setLocationsOpen(true)}
                onMouseLeave={() => setLocationsOpen(false)}
              >
                <button
                  className={cn(
                    "text-sm lg:text-base transition-colors relative py-2 px-3 font-medium flex items-center",
                    isActive('/locations')
                      ? "text-primary"
                      : "text-foreground hover:text-primary"
                  )}
                >
                  Locations
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                {locationsOpen && (
                  <div className="absolute top-full left-0 mt-1 w-56 bg-background border border-border rounded-lg shadow-lg py-2 z-50">
                    {locationLinks.map((link) => (
                      <Link
                        key={link.href}
                        to={link.href}
                        className="block px-4 py-2 text-sm hover:bg-muted transition-colors"
                        onClick={() => handleNavigation(link.href)}
                      >
                        {link.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Services Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <button
                  className={cn(
                    "text-sm lg:text-base transition-colors relative py-2 px-3 font-medium flex items-center",
                    isActive('/services')
                      ? "text-primary"
                      : "text-foreground hover:text-primary"
                  )}
                >
                  Services
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                {servicesOpen && (
                  <div className="absolute top-full left-0 mt-1 w-56 bg-background border border-border rounded-lg shadow-lg py-2 z-50">
                    {serviceLinks.map((link) => (
                      <Link
                        key={link.href}
                        to={link.href}
                        className="block px-4 py-2 text-sm hover:bg-muted transition-colors"
                        onClick={() => handleNavigation(link.href)}
                      >
                        {link.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Button
                size="sm"
                variant="white"
                className="shadow-lg hover:shadow-xl whitespace-nowrap ml-4"
                asChild
              >
                <a href={`tel:${CONTACT.PHONE}`} className="flex items-center">
                  <Phone className="mr-2 h-4 w-4" aria-hidden="true" />
                  Call Now
                </a>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 hover:bg-muted rounded-lg transition-colors relative z-50"
              onClick={toggleMenu}
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
            >
              {isOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          "fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 md:hidden",
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={closeMenu}
        aria-hidden="true"
      />

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={cn(
          "fixed inset-x-0 top-0 z-40 h-screen bg-background pt-20 transition-transform duration-300 ease-in-out md:hidden overflow-y-auto",
          isOpen ? "translate-y-0" : "-translate-y-full"
        )}
        role="dialog"
        aria-modal="true"
        aria-label="Main navigation"
      >
        <div className="container mx-auto px-4 pb-24">
          <div className="space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={cn(
                  "block py-2 px-4 rounded-lg transition-colors font-medium",
                  isActive(link.href)
                    ? "bg-primary/10 text-primary"
                    : "hover:bg-muted text-foreground hover:text-primary"
                )}
                onClick={() => handleNavigation(link.href)}
                aria-current={isActive(link.href) ? "page" : undefined}
              >
                {link.name}
              </Link>
            ))}

            {/* Mobile Locations Dropdown */}
            <div>
              <button
                onClick={() => setMobileLocationsOpen(!mobileLocationsOpen)}
                className="w-full flex items-center justify-between py-2 px-4 rounded-lg transition-colors font-medium hover:bg-muted text-foreground hover:text-primary"
              >
                Locations
                <ChevronDown className={cn("h-4 w-4 transition-transform", mobileLocationsOpen && "rotate-180")} />
              </button>
              {mobileLocationsOpen && (
                <div className="ml-4 mt-1 space-y-1">
                  {locationLinks.map((link) => (
                    <Link
                      key={link.href}
                      to={link.href}
                      className="block py-2 px-4 rounded-lg text-sm hover:bg-muted transition-colors"
                      onClick={() => handleNavigation(link.href)}
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Services Dropdown */}
            <div>
              <button
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className="w-full flex items-center justify-between py-2 px-4 rounded-lg transition-colors font-medium hover:bg-muted text-foreground hover:text-primary"
              >
                Services
                <ChevronDown className={cn("h-4 w-4 transition-transform", mobileServicesOpen && "rotate-180")} />
              </button>
              {mobileServicesOpen && (
                <div className="ml-4 mt-1 space-y-1">
                  {serviceLinks.map((link) => (
                    <Link
                      key={link.href}
                      to={link.href}
                      className="block py-2 px-4 rounded-lg text-sm hover:bg-muted transition-colors"
                      onClick={() => handleNavigation(link.href)}
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <div className="pt-2 pb-4">
              <Button
                size="lg"
                variant="white"
                className="w-full shadow-lg hover:shadow-xl"
                asChild
              >
                <a href={`tel:${CONTACT.PHONE}`} className="flex items-center justify-center">
                  <Phone className="mr-2 h-5 w-5" aria-hidden="true" />
                  Call: {CONTACT.PHONE_DISPLAY}
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Bottom CTA */}
      <div
        className="md:hidden fixed bottom-0 left-0 right-0 bg-primary p-3 shadow-lg z-50"
        role="complementary"
        aria-label="Quick contact"
      >
        <Button
          variant="white"
          size="lg"
          className="w-full shadow-lg hover:shadow-xl font-bold text-sm"
          asChild
        >
          <a href={`tel:${CONTACT.PHONE}`} className="flex items-center justify-center">
            <Phone className="mr-2 h-5 w-5" aria-hidden="true" />
            <span className="whitespace-nowrap">Same-Day Service: {CONTACT.PHONE_DISPLAY}</span>
          </a>
        </Button>
      </div>
    </>
  );
};
