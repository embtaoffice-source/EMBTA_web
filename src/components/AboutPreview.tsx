import { useState, useEffect } from 'react';
import { EmbtaLogo } from './EmbtaLogo';

interface FloatingCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

function FloatingCard({ children, className = '', delay = 0 }: FloatingCardProps) {
  return (
    <div
      className={`
        glass-card glass-card-hover relative transform-3d
        p-6 rounded-2xl animate-float
        ${className}
      `}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

export function AboutPreview() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.2 }
    );
    const el = document.getElementById('about-preview');
    if (el) observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about-preview" className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-embta-dark-blue/30 to-transparent" />

      <div className="section-container relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block text-xs sm:text-sm font-medium tracking-[0.3em] text-embta-green uppercase mb-4">
            About the Association
          </span>
          <h2 className="section-heading mb-6">
            Welcome to <span className="text-gradient-green">EMBTA</span>
          </h2>
          <p className="section-subheading">
            A premier business association dedicated to fostering growth and collaboration
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className={visible ? 'animate-fade-in' : 'opacity-0 transition-opacity duration-1000'}>
            <p className="text-embta-light-gray text-lg leading-relaxed mb-6">
              The Eastern Maring Business &amp; Traders Association stands as a cornerstone
              of our community, uniting businesses and traders under a shared vision of
              prosperity and mutual support.
            </p>
            <p className="text-embta-light-gray text-lg leading-relaxed mb-8">
              Through strategic collaboration, representation, and shared opportunities,
              we create pathways for growth that benefit not just individual businesses,
              but the entire community.
            </p>
            <a
              href="/about"
              className="btn-3d btn-3d-primary inline-flex items-center gap-2"
            >
              Read More
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>

          <div className="relative perspective-2000">
            <div className="relative transform-3d">
              <FloatingCard delay={0} className="absolute -top-6 -left-6 w-40 h-40">
                <div className="flex flex-col items-center justify-center h-full">
                  <EmbtaLogo size={56} variant="white" />
                  <span className="text-xs text-embta-light-gray mt-2 text-center">EMBTA</span>
                </div>
              </FloatingCard>

              <FloatingCard delay={200} className="relative ml-20">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-embta-green/20 flex items-center justify-center">
                    <svg className="w-6 h-6 text-embta-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87m6-2a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Business</h3>
                    <p className="text-sm text-embta-light-gray">Connections</p>
                  </div>
                </div>
              </FloatingCard>

              <FloatingCard delay={400} className="absolute -bottom-6 -right-4 w-44">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-embta-green/20 flex items-center justify-center">
                    <svg className="w-5 h-5 text-embta-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white text-sm">Community</h3>
                    <p className="text-xs text-embta-light-gray">Together we grow</p>
                  </div>
                </div>
              </FloatingCard>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}