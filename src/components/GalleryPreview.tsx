interface GalleryItemProps {
  gradient: string;
  title: string;
  index: number;
}

function GalleryItem({ gradient, title, index }: GalleryItemProps) {
  return (
    <div
      className={`
        glass-card glass-card-hover relative rounded-2xl overflow-hidden
        transform-3d opacity-0 translate-y-10
        transition-all duration-700 ease-out
      `}
      style={{
        animation: `fadeUp 0.8s ease-out ${index * 0.15}s forwards`,
      }}
    >
      <div className="relative h-64 overflow-hidden group">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
          style={{ backgroundImage: gradient }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-embta-navy/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="w-12 h-12 rounded-full bg-embta-green/20 backdrop-blur-sm flex items-center justify-center border border-embta-green/30">
            <svg className="w-5 h-5 text-embta-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
          </div>
        </div>
      </div>
      <div className="p-5">
        <h3 className="font-semibold text-white line-clamp-1">{title}</h3>
      </div>
    </div>
  );
}

const galleryItems = [
  {
    gradient: 'linear-gradient(135deg, #00C853 0%, #0A1628 100%)',
    title: 'Annual Summit 2025',
  },
  {
    gradient: 'linear-gradient(135deg, #1A2F5C 0%, #00C853 100%)',
    title: 'Community Outreach',
  },
  {
    gradient: 'linear-gradient(135deg, #00C853 0%, #1A2F5C 100%)',
    title: 'Business Fair',
  },
  {
    gradient: 'linear-gradient(135deg, #1A2F5C 0%, #0A1628 100%)',
    title: 'Member Networking',
  },
];

export function GalleryPreview() {
  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-embta-dark-blue/20 to-transparent" />

      <div className="section-container relative z-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16">
          <div>
            <span className="inline-block text-xs sm:text-sm font-medium tracking-[0.3em] text-embta-green uppercase mb-4">
              Gallery
            </span>
            <h2 className="section-heading">
              Our <span className="text-gradient-green">Moments</span>
            </h2>
            <p className="section-subheading mt-4">
              A glimpse into our events and community activities
            </p>
          </div>
          <a
            href="/gallery"
            className="btn-3d btn-3d-secondary mt-8 md:mt-0 inline-flex items-center gap-2"
          >
            View Gallery
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {galleryItems.map((item, index) => (
            <GalleryItem key={item.title} {...item} index={index} />
          ))}
        </div>

        <div className="mt-8 text-center">
          <p className="text-xs text-embta-medium-gray italic">
            * Demo content shown for preview purposes. Actual images will be available soon.
          </p>
        </div>
      </div>
    </section>
  );
}