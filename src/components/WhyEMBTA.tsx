interface WhyCardProps {
  title: string;
  description: string;
  index: number;
}

function WhyCard({ title, description, index }: WhyCardProps) {
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
      <div className="absolute top-6 right-6 w-12 h-12 rounded-lg bg-embta-green/10 flex items-center justify-center">
        <span className="text-embta-green font-display font-bold text-lg">
          {String(index + 1).padStart(2, '0')}
        </span>
      </div>
      <h3 className="font-display text-xl font-bold text-white mb-3 pr-16">{title}</h3>
      <p className="text-embta-light-gray text-sm leading-relaxed">{description}</p>
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-embta-green/20 to-transparent rounded-b-2xl" />
    </div>
  );
}

const whyCards = [
  {
    title: 'Strong Business Network',
    description: 'Access a robust network of established businesses and traders working together toward common goals.',
  },
  {
    title: 'Collaborative Opportunities',
    description: 'Discover new partnerships and joint ventures that expand your reach and capabilities.',
  },
  {
    title: 'Community Engagement',
    description: 'Participate in initiatives that strengthen our community and create lasting value for all.',
  },
  {
    title: 'Representation & Support',
    description: 'Benefit from dedicated representation and support that champions the interests of our members.',
  },
];

export function WhyEMBTA() {
  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-embta-dark-blue/20 to-transparent" />

      <div className="section-container relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block text-xs sm:text-sm font-medium tracking-[0.3em] text-embta-green uppercase mb-4">
            Why Join Us
          </span>
          <h2 className="section-heading mb-6">
            Why <span className="text-gradient-green">EMBTA</span>?
          </h2>
          <p className="section-subheading">
            Discover the value of being part of our association
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {whyCards.map((card, index) => (
            <WhyCard key={card.title} {...card} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}