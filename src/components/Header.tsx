import React, { useState, useCallback, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, Phone, ChevronDown, MapPin, Home, Building2, Car, Key, Lock, Wrench, AlertCircle, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useScroll } from "@/hooks/useScroll";
import { CONTACT } from "@/utils/contact";

const locationLinks = [
  { name: "Annapolis, MD", href: "/" },
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

const serviceCategories = [
  {
    title: "Emergency Services",
    icon: AlertCircle,
    services: [
      { name: "Emergency Lockout", href: "/services/emergency-lockout", description: "24/7 fast response" },
    ]
  },
  {
    title: "Residential",
    icon: Home,
    services: [
      { name: "Lock Change", href: "/services/lock-change", description: "Upgrade your home security" },
      { name: "Lock Rekey", href: "/services/lock-rekey", description: "Cost-effective solution" },
      { name: "Lock Repair", href: "/services/lock-repair", description: "Fix broken locks" },
    ]
  },
  {
    title: "Automotive",
    icon: Car,
    services: [
      { name: "Car Key Programming", href: "/services/car-key-programming", description: "All makes & models" },
      { name: "Lost Car Keys", href: "/services/lost-car-keys", description: "On-site replacement" },
    ]
  }
];

const locationCategories = [
  {
    title: "Central Annapolis",
    locations: [
      { name: "Annapolis", href: "/" },
      { name: "Eastport", href: "/locations/eastport" },
      { name: "Parole", href: "/locations/parole" },
      { name: "Bay Ridge", href: "/locations/bay-ridge" },
    ]
  },
  {
    title: "North County",
    locations: [
      { name: "Severna Park", href: "/locations/severna-park" },
      { name: "Arnold", href: "/locations/arnold" },
      { name: "Cape St. Claire", href: "/locations/cape-st-claire" },
      { name: "Broadneck", href: "/locations/broadneck" },
    ]
  },
  {
    title: "West & South",
    locations: [
      { name: "Crownsville", href: "/locations/crownsville" },
      { name: "Edgewater", href: "/locations/edgewater" },
      { name: "Edgewater Beach", href: "/locations/edgewater-beach" },
      { name: "Mayo", href: "/locations/mayo" },
      { name: "Riva", href: "/locations/riva" },
      { name: "Hillsmere Shores", href: "/locations/hillsmere-shores" },
    ]
  }
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
  ];

  const afterDropdownLinks = [
    { name: "About", href: "/about" },
    { name: "Testimonials", href: "/testimonials" },
    { name: "Blog", href: "/blog" },
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
                width="200"
                height="64"
                className="h-12 w-auto md:h-16"
                loading="eager"
                fetchPriority="high"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className={cn(
                    "text-base transition-colors relative py-2 px-4 font-medium rounded-lg",
                    isActive(link.href)
                      ? "text-primary bg-primary/5"
                      : "text-foreground hover:text-primary hover:bg-muted"
                  )}
                  onClick={() => handleNavigation(link.href)}
                  aria-current={isActive(link.href) ? "page" : undefined}
                >
                  {link.name}
                </Link>
              ))}

              {/* Services Mega Menu */}
              <div
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <button
                  className={cn(
                    "text-base transition-colors relative py-2 px-4 font-medium flex items-center rounded-lg",
                    isActive('/services')
                      ? "text-primary bg-primary/5"
                      : "text-foreground hover:text-primary hover:bg-muted"
                  )}
                >
                  Services
                  <ChevronDown className={cn("ml-1 h-4 w-4 transition-transform", servicesOpen && "rotate-180")} />
                </button>
                {servicesOpen && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 w-[700px] max-w-[95vw] bg-background border border-border rounded-xl shadow-2xl z-[60]">
                    <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-4 text-white">
                      <div className="flex items-center gap-2">
                        <Wrench className="h-5 w-5" />
                        <h3 className="text-lg font-bold">Professional Locksmith Services</h3>
                      </div>
                      <p className="text-xs text-blue-100 mt-1">Expert solutions for all your lock and key needs</p>
                    </div>
                    <div className="grid grid-cols-3 gap-6 p-6">
                      {serviceCategories.map((category) => {
                        const IconComponent = category.icon;
                        return (
                          <div key={category.title} className="space-y-3">
                            <div className="flex items-center gap-2">
                              <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                                <IconComponent className="h-4 w-4 text-primary" />
                              </div>
                              <h4 className="text-sm font-bold text-foreground">
                                {category.title}
                              </h4>
                            </div>
                            <div className="space-y-1">
                              {category.services.map((service) => (
                                <Link
                                  key={service.href}
                                  to={service.href}
                                  className="block px-3 py-2.5 hover:bg-blue-50 rounded-lg transition-colors group"
                                  onClick={() => handleNavigation(service.href)}
                                >
                                  <div className="font-medium text-sm group-hover:text-primary transition-colors">
                                    {service.name}
                                  </div>
                                  <div className="text-xs text-muted-foreground mt-0.5">
                                    {service.description}
                                  </div>
                                </Link>
                              ))}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                    <div className="bg-gradient-to-r from-gray-50 to-gray-100 px-6 py-4 border-t border-border">
                      <div className="flex items-center justify-between">
                        <Link
                          to="/services"
                          className="text-sm text-primary font-semibold hover:underline"
                          onClick={() => handleNavigation('/services')}
                        >
                          View All Services →
                        </Link>
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-semibold text-gray-600">24/7 Emergency Service</span>
                          <a
                            href={`tel:${CONTACT.PHONE}`}
                            className="text-primary font-bold hover:text-primary/80 transition-colors"
                          >
                            {CONTACT.PHONE_DISPLAY}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Locations Mega Menu */}
              <div
                className="relative"
                onMouseEnter={() => setLocationsOpen(true)}
                onMouseLeave={() => setLocationsOpen(false)}
              >
                <button
                  className={cn(
                    "text-base transition-colors relative py-2 px-4 font-medium flex items-center rounded-lg",
                    isActive('/locations')
                      ? "text-primary bg-primary/5"
                      : "text-foreground hover:text-primary hover:bg-muted"
                  )}
                >
                  Locations
                  <ChevronDown className={cn("ml-1 h-4 w-4 transition-transform", locationsOpen && "rotate-180")} />
                </button>
                {locationsOpen && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 w-[600px] max-w-[95vw] bg-background border border-border rounded-xl shadow-2xl z-[60]">
                    <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-4 text-white">
                      <div className="flex items-center gap-2">
                        <MapPin className="h-5 w-5" />
                        <h3 className="text-lg font-bold">Anne Arundel County Service Areas</h3>
                      </div>
                      <p className="text-xs text-blue-100 mt-1">Fast, local locksmith service throughout the region</p>
                    </div>
                    <div className="grid grid-cols-3 gap-6 p-6">
                      {locationCategories.map((category) => (
                        <div key={category.title}>
                          <h4 className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-3">
                            {category.title}
                          </h4>
                          <div className="space-y-1">
                            {category.locations.map((location) => (
                              <Link
                                key={location.href}
                                to={location.href}
                                className="block px-3 py-2 text-sm hover:bg-blue-50 rounded-md transition-colors hover:text-primary font-medium group"
                                onClick={() => handleNavigation(location.href)}
                              >
                                <span className="group-hover:translate-x-1 inline-block transition-transform">
                                  {location.name}
                                </span>
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="bg-gradient-to-r from-gray-50 to-gray-100 px-6 py-4 border-t border-border">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-sm">
                          <Phone className="h-4 w-4 text-primary" />
                          <span className="font-semibold">Need service now?</span>
                        </div>
                        <a
                          href={`tel:${CONTACT.PHONE}`}
                          className="text-primary font-bold text-lg hover:text-primary/80 transition-colors"
                        >
                          {CONTACT.PHONE_DISPLAY}
                        </a>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {afterDropdownLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className={cn(
                    "text-base transition-colors relative py-2 px-4 font-medium rounded-lg",
                    isActive(link.href)
                      ? "text-primary bg-primary/5"
                      : "text-foreground hover:text-primary hover:bg-muted"
                  )}
                  onClick={() => handleNavigation(link.href)}
                  aria-current={isActive(link.href) ? "page" : undefined}
                >
                  {link.name}
                </Link>
              ))}

              <Button
                size="default"
                className="shadow-lg hover:shadow-xl whitespace-nowrap ml-2 bg-primary hover:bg-primary/90 text-white font-bold"
                asChild
              >
                <a href={`tel:${CONTACT.PHONE}`} className="flex items-center">
                  <Phone className="mr-2 h-5 w-5" aria-hidden="true" />
                  {CONTACT.PHONE_DISPLAY}
                </a>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex lg:hidden items-center gap-2">
              <Button
                size="sm"
                className="bg-primary hover:bg-primary/90 text-white font-semibold"
                asChild
              >
                <a href={`tel:${CONTACT.PHONE}`} className="flex items-center">
                  <Phone className="h-4 w-4" aria-hidden="true" />
                </a>
              </Button>
              <button
                className="p-2 hover:bg-muted rounded-lg transition-colors relative z-50"
                onClick={toggleMenu}
                aria-label={isOpen ? "Close menu" : "Open menu"}
                aria-expanded={isOpen}
                aria-controls="mobile-menu"
              >
                {isOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Desktop Dropdown Overlay */}
      {(locationsOpen || servicesOpen) && (
        <div
          className="hidden lg:block fixed inset-0 bg-black/20 z-40 transition-opacity duration-200"
          onClick={() => {
            setLocationsOpen(false);
            setServicesOpen(false);
          }}
          aria-hidden="true"
        />
      )}

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          "fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 lg:hidden",
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={closeMenu}
        aria-hidden="true"
      />

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={cn(
          "fixed inset-x-0 top-0 z-40 h-screen bg-background pt-20 transition-transform duration-300 ease-in-out lg:hidden overflow-y-auto",
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
                <div className="ml-4 mt-1 space-y-3">
                  {serviceCategories.map((category) => {
                    const IconComponent = category.icon;
                    return (
                      <div key={category.title}>
                        <div className="flex items-center gap-2 px-4 py-2">
                          <IconComponent className="h-4 w-4 text-primary" />
                          <span className="text-xs font-bold text-muted-foreground uppercase">{category.title}</span>
                        </div>
                        <div className="space-y-1">
                          {category.services.map((service) => (
                            <Link
                              key={service.href}
                              to={service.href}
                              className="block py-2 px-4 rounded-lg text-sm hover:bg-muted transition-colors"
                              onClick={() => handleNavigation(service.href)}
                            >
                              {service.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>

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
                <div className="ml-4 mt-1 space-y-3">
                  {locationCategories.map((category) => (
                    <div key={category.title}>
                      <div className="flex items-center gap-2 px-4 py-2">
                        <MapPin className="h-4 w-4 text-primary" />
                        <span className="text-xs font-bold text-muted-foreground uppercase">{category.title}</span>
                      </div>
                      <div className="space-y-1">
                        {category.locations.map((location) => (
                          <Link
                            key={location.href}
                            to={location.href}
                            className="block py-2 px-4 rounded-lg text-sm hover:bg-muted transition-colors"
                            onClick={() => handleNavigation(location.href)}
                          >
                            {location.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {afterDropdownLinks.map((link) => (
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
        className="lg:hidden fixed bottom-0 left-0 right-0 bg-primary p-3 shadow-lg z-50"
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
