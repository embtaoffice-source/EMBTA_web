import { useEffect, useState } from 'react';
import { EmbtaLogo } from './EmbtaLogo';

export function Network3D() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.2 }
    );
    const el = document.getElementById('network-3d');
    if (el) observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const nodes = [
    { label: 'Business', angle: 0, distance: 180 },
    { label: 'Traders', angle: 72, distance: 180 },
    { label: 'Community', angle: 144, distance: 180 },
    { label: 'Collaboration', angle: 216, distance: 180 },
    { label: 'Growth', angle: 288, distance: 180 },
  ];

  return (
    <section id="network-3d" className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-embta-dark-blue/30 to-transparent" />

      <div className="section-container relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block text-xs sm:text-sm font-medium tracking-[0.3em] text-embta-green uppercase mb-4">
            The Network
          </span>
          <h2 className="section-heading mb-6">
            Connected <span className="text-gradient-green">Together</span>
          </h2>
          <p className="section-subheading">
            A web of opportunity linking businesses, traders, and community
          </p>
        </div>

        <div className="flex justify-center">
          <div
            className={`
              relative w-[320px] h-[320px] md:w-[420px] md:h-[420px] lg:w-[500px] lg:h-[500px]
              perspective-2000
              ${visible ? 'animate-fade-in' : 'opacity-0'}
            `}
          >
            <div className="absolute inset-0 transform-3d">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-embta-green/40 to-embta-green/10 flex items-center justify-center backdrop-blur-sm border border-embta-green/30 glow-green">
                  <EmbtaLogo size={56} variant="white" />
                </div>
              </div>

              {nodes.map((node, i) => {
                const rad = (node.angle * Math.PI) / 180;
                const x = Math.cos(rad) * node.distance;
                const y = Math.sin(rad) * node.distance;
                return (
                  <div
                    key={node.label}
                    className="absolute top-1/2 left-1/2"
                    style={{
                      transform: `translate(${x}px, ${y}px) translateZ(40px)`,
                    }}
                  >
                    <div
                      className={`
                        glass-card-hover w-28 h-28 rounded-xl flex items-center justify-center
                        transform-3d transition-all duration-500
                        animate-float
                      `}
                      style={{ animationDelay: `${i * 0.3}s` }}
                    >
                      <span className="text-sm font-semibold text-white text-center">
                        {node.label}
                      </span>
                    </div>
                  </div>
                );
              })}

              <svg
                className="absolute inset-0 w-full h-full pointer-events-none"
                viewBox="0 0 500 500"
              >
                {nodes.map((node, i) => {
                  const rad = (node.angle * Math.PI) / 180;
                  const x1 = 250 + Math.cos(rad) * node.distance;
                  const y1 = 250 + Math.sin(rad) * node.distance;
                  return (
                    <line
                      key={i}
                      x1="250"
                      y1="250"
                      x2={x1}
                      y2={y1}
                      stroke="url(#lineGrad)"
                      strokeWidth="1.5"
                      strokeDasharray="4 4"
                      className="animate-pulse-glow"
                    />
                  );
                })}
                <defs>
                  <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#00C853" stopOpacity="0.6" />
                    <stop offset="100%" stopColor="#00C853" stopOpacity="0.1" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}