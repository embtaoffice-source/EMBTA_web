import { useState, useEffect, useCallback } from 'react';
import { EmbtaLogo } from './EmbtaLogo';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleScroll = useCallback(() => {
    const scrolled = window.scrollY > 50;
    setIsScrolled(scrolled);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const navLinks = [
    { label: 'Home', href: '#home', active: true },
    { label: 'About', href: '/about' },
    { label: 'Executive', href: '/executive' },
    { label: 'Gallery', href: '/gallery' },
    { label: 'News', href: '/news' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <header
      className={`
        fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out
        ${isScrolled
          ? 'backdrop-blur-xl bg-embta-navy/80 border-b border-white/10 shadow-2xl'
          : 'backdrop-blur-sm bg-embta-navy/40 border-b border-white/5'
        }
      `}
    >
      <nav className="section-container py-4 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-3 group">
          <div className="relative">
            <EmbtaLogo size={44} variant="white" className="transform-3d transition-transform duration-500 group-hover:rotateY(10deg)" />
            <div className="absolute inset-0 bg-embta-green/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
          <span className="font-display font-bold text-xl tracking-wide text-white group-hover:text-embta-green transition-colors duration-300">
            EMBTA
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`
                relative text-sm font-medium tracking-wide transition-colors duration-300
                ${link.active
                  ? 'text-embta-green'
                  : 'text-embta-light-gray hover:text-white'
                }
              `}
            >
              {link.label}
              {link.active && (
                <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-embta-green rounded-full" />
              )}
            </a>
          ))}
        </div>

        <div className="hidden md:block">
          <a href="#contact" className="btn-3d btn-3d-primary">
            Contact Us
          </a>
        </div>

        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
          aria-expanded={isMobileMenuOpen}
        >
          <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`} />
          <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </nav>

      <div
        className={`
          md:hidden overflow-hidden transition-all duration-500 ease-out
          ${isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}
        `}
      >
        <div className="backdrop-blur-xl bg-embta-navy/90 border-t border-white/10 px-4 py-6 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="block text-base font-medium text-embta-light-gray hover:text-embta-green transition-colors duration-300"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a href="#contact" className="btn-3d btn-3d-primary w-full text-center block">
            Contact Us
          </a>
        </div>
      </div>
    </header>
  );
}