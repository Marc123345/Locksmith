import React, { useState, useCallback, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useScroll } from "@/hooks/useScroll";
import { CONTACT } from "@/utils/contact";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isScrolled = useScroll(10);
  const location = useLocation();
  const navigate = useNavigate();

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const toggleMenu = useCallback(() => setIsOpen(prev => !prev), []);
  const closeMenu = useCallback(() => setIsOpen(false), []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
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
            <div className="hidden md:flex items-center space-x-1 lg:space-x-8">
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
        <div className="container mx-auto px-4">
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