interface FocusCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}

function FocusCard({ title, description, icon, index }: FocusCardProps) {
  return (
    <div
      className={`
        glass-card glass-card-hover relative p-8 rounded-2xl
        transform-3d opacity-0 translate-y-10
        transition-all duration-700 ease-out
      `}
      style={{
        animation: `fadeUp 0.8s ease-out ${index * 0.15}s forwards`,
      }}
    >
      <div className="absolute -top-4 left-8">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-embta-green/30 to-embta-green/10 flex items-center justify-center backdrop-blur-sm border border-embta-green/20">
          <span className="text-embta-green text-xl">{icon}</span>
        </div>
      </div>
      <div className="mt-6">
        <h3 className="font-display text-xl font-bold text-white mb-3">{title}</h3>
        <p className="text-embta-light-gray text-sm leading-relaxed">{description}</p>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-embta-green/30 to-transparent rounded-b-2xl" />
    </div>
  );
}

const focusCards = [
  {
    title: 'Business Connections',
    description: 'Building bridges between businesses and traders to create a stronger commercial ecosystem.',
    icon: (
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
      </svg>
    ),
  },
  {
    title: 'Collaboration',
    description: 'Fostering partnerships and joint initiatives that drive collective success.',
    icon: (
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87m6-2a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
  },
  {
    title: 'Community',
    description: 'Strengthening the bonds that connect businesses to the wider community.',
    icon: (
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2C8.13 2 5 5.13 5 9c0 5.25 3.5 8 7 11 3.5-3 7-5.75 7-11 0-3.87-3.13-7-7-7z" />
      </svg>
    ),
  },
  {
    title: 'Growth',
    description: 'Empowering businesses to expand and thrive in an evolving marketplace.',
    icon: (
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0l-8-8m8 8l-8 8M3 17h8m0 0l-8-8m8 8l-8 8" />
      </svg>
    ),
  },
];

export function Focus3D() {
  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-embta-dark-blue/20 to-transparent" />

      <div className="section-container relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block text-xs sm:text-sm font-medium tracking-[0.3em] text-embta-green uppercase mb-4">
            Our Focus
          </span>
          <h2 className="section-heading mb-6">
            What We <span className="text-gradient-green">Deliver</span>
          </h2>
          <p className="section-subheading">
            Four pillars that guide everything we do
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {focusCards.map((card, index) => (
            <FocusCard key={card.title} {...card} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}