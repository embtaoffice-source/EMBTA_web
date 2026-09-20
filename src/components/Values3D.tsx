interface ValueCardProps {
  title: string;
  index: number;
}

function ValueCard({ title, index }: ValueCardProps) {
  return (
    <div
      className={`
        glass-card glass-card-hover relative p-6 rounded-xl text-center
        transform-3d opacity-0 translate-y-10
        transition-all duration-700 ease-out
      `}
      style={{
        animation: `fadeUp 0.8s ease-out ${index * 0.15}s forwards`,
      }}
    >
      <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-embta-green/20 to-embta-green/5 flex items-center justify-center border border-embta-green/20">
        <div className="w-3 h-3 rounded-full bg-embta-green glow-green" />
      </div>
      <h3 className="font-display font-semibold text-white text-lg">{title}</h3>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-0.5 bg-gradient-to-r from-transparent via-embta-green to-transparent rounded-full" />
    </div>
  );
}

const values = [
  'Integrity',
  'Unity',
  'Cooperation',
  'Responsibility',
];

export function Values3D() {
  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-embta-dark-blue/20 to-transparent" />

      <div className="section-container relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block text-xs sm:text-sm font-medium tracking-[0.3em] text-embta-green uppercase mb-4">
            Our Values
          </span>
          <h2 className="section-heading mb-6">
            Built on Strong <span className="text-gradient-green">Values</span>
          </h2>
          <p className="section-subheading">
            The principles that guide our association
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {values.map((value, index) => (
            <ValueCard key={value} title={value} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}