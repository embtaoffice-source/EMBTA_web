export function CTA3D() {
  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-embta-navy via-embta-dark-blue to-embta-navy" />

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/3 w-48 h-48 rounded-full bg-embta-green/5 blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/3 w-40 h-40 rounded-full bg-embta-blue/10 blur-3xl animate-float-slow" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-embta-green/10 blur-2xl animate-pulse-glow" />
      </div>

      <div className="section-container relative z-10 text-center">
        <div className="max-w-3xl mx-auto">
          <span className="inline-block text-xs sm:text-sm font-medium tracking-[0.3em] text-embta-green uppercase mb-6">
            Join Us
          </span>
          <h2 className="section-heading mb-6">
            Let's Build Stronger
            <span className="block text-gradient-green">Connections Together</span>
          </h2>
          <p className="text-embta-light-gray text-lg mb-10 max-w-2xl mx-auto">
            Connect with EMBTA and stay informed about association activities,
            events and opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contact" className="btn-3d btn-3d-primary">
              Contact EMBTA
            </a>
            <a href="#about" className="btn-3d btn-3d-secondary">
              Learn More
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-embta-green/30 to-transparent" />
    </section>
  );
}