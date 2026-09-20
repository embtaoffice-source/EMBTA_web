import { useEffect, useState, useCallback, useRef } from 'react';
import { EmbtaLogo } from './EmbtaLogo';

export function Hero3D() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [reducedMotion, setReducedMotion] = useState(false);
  const heroRef = useRef<HTMLElement>(null);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (reducedMotion) return;
    const rect = heroRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePosition({ x, y });
  }, [reducedMotion]);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  useEffect(() => {
    if (reducedMotion) return;
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [handleMouseMove, reducedMotion]);

  const parallaxStyle = {
    transform: `perspective(1000px) rotateY(${mousePosition.x * 6}deg) rotateX(${-mousePosition.y * 6}deg)`,
    transition: 'transform 0.3s ease-out',
  };

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden perspective-1000"
      aria-label="Hero section"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-embta-navy via-embta-dark-blue/90 to-embta-navy" />

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-embta-green/5 blur-3xl animate-float"
          style={{ transform: `translate(${mousePosition.x * 30}px, ${mousePosition.y * 30}px)` }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-48 h-48 rounded-full bg-embta-blue/10 blur-3xl animate-float-slow"
          style={{ transform: `translate(${-mousePosition.x * 20}px, ${-mousePosition.y * 20}px)` }}
        />
        <div
          className="absolute top-1/2 left-1/2 w-32 h-32 rounded-full bg-embta-green/10 blur-2xl animate-pulse-glow"
        />
      </div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <svg
          className="absolute inset-0 w-full h-full opacity-20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="currentColor" stroke-width="0.5" className="text-embta-medium-blue" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="relative z-10 section-container text-center py-20">
        <div className="flex justify-center mb-10">
          <div
            className="relative transform-3d"
            style={parallaxStyle}
          >
            <div className="absolute inset-0 bg-embta-green/20 rounded-full blur-2xl opacity-60" />
            <EmbtaLogo size={120} variant="white" className="relative drop-shadow-2xl" />
          </div>
        </div>

        <div className="mb-6">
          <span className="inline-block text-xs sm:text-sm font-medium tracking-[0.3em] text-embta-green uppercase mb-4">
            Eastern Maring Business &amp; Traders Association
          </span>
        </div>

        <h1
          className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold tracking-tight mb-6"
          style={parallaxStyle}
        >
          <span className="block text-gradient-green">EMBTA</span>
        </h1>

        <p
          className="text-xl sm:text-2xl md:text-3xl font-light text-white mb-8 max-w-3xl mx-auto"
          style={parallaxStyle}
        >
          Connecting Businesses. Strengthening Communities.
        </p>

        <p
          className="text-base sm:text-lg text-embta-light-gray mb-12 max-w-2xl mx-auto leading-relaxed"
          style={parallaxStyle}
        >
          Building stronger connections among businesses, traders and the wider community
          through cooperation, representation and shared opportunities.
        </p>

        <div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          style={parallaxStyle}
        >
          <a href="#about" className="btn-3d btn-3d-primary">
            Learn More
          </a>
          <a href="#contact" className="btn-3d btn-3d-secondary">
            Contact EMBTA
          </a>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="text-xs text-embta-medium-gray tracking-widest">SCROLL</span>
          <div className="w-px h-12 bg-gradient-to-b from-embta-green/50 to-transparent" />
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-embta-green/30 to-transparent" />
    </section>
  );
}