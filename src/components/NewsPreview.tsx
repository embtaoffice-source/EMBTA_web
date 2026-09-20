interface NewsCardProps {
  gradient: string;
  category: string;
  date: string;
  title: string;
  description: string;
  index: number;
}

function NewsCard({ gradient, category, date, title, description, index }: NewsCardProps) {
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
      <div className="relative h-48 overflow-hidden group">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
          style={{ backgroundImage: gradient }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-embta-navy/90 to-transparent" />
        <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-embta-green/20 backdrop-blur-sm text-xs font-medium text-embta-green border border-embta-green/30">
          {category}
        </span>
        <span className="absolute top-4 right-4 text-xs text-embta-light-gray">
          {date}
        </span>
      </div>
      <div className="p-6">
        <h3 className="font-display font-bold text-white mb-2 line-clamp-2">{title}</h3>
        <p className="text-embta-light-gray text-sm mb-4 line-clamp-2">{description}</p>
        <a href="/news" className="inline-flex items-center gap-2 text-sm font-medium text-embta-green hover:text-embta-green-glow transition-colors">
          Read More
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      </div>
    </div>
  );
}

const newsItems = [
  {
    gradient: 'linear-gradient(135deg, #00C853 0%, #0A1628 100%)',
    category: 'Event',
    date: 'Oct 15, 2026',
    title: 'Annual Business Summit 2026',
    description: 'Join us for our flagship annual event bringing together industry leaders and community members.',
  },
  {
    gradient: 'linear-gradient(135deg, #1A2F5C 0%, #00C853 100%)',
    category: 'Initiative',
    date: 'Oct 5, 2026',
    title: 'New Youth Entrepreneurship Program',
    description: 'A new initiative supporting young entrepreneurs with mentorship, resources, and networking opportunities.',
  },
  {
    gradient: 'linear-gradient(135deg, #00C853 0%, #1A2F5C 100%)',
    category: 'Community',
    date: 'Sep 28, 2026',
    title: 'Community Outreach Day',
    description: 'Our members come together for a day of service and community building in the local area.',
  },
];

export function NewsPreview() {
  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-embta-dark-blue/20 to-transparent" />

      <div className="section-container relative z-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16">
          <div>
            <span className="inline-block text-xs sm:text-sm font-medium tracking-[0.3em] text-embta-green uppercase mb-4">
              Latest News
            </span>
            <h2 className="section-heading">
              News &amp; <span className="text-gradient-green">Updates</span>
            </h2>
            <p className="section-subheading mt-4">
              Stay informed about our latest activities and initiatives
            </p>
          </div>
          <a
            href="/news"
            className="btn-3d btn-3d-secondary mt-8 md:mt-0 inline-flex items-center gap-2"
          >
            View All News
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((item, index) => (
            <NewsCard key={item.title} {...item} index={index} />
          ))}
        </div>

        <div className="mt-8 text-center">
          <p className="text-xs text-embta-medium-gray italic">
            * Demo content shown for preview purposes. Actual content will be available soon.
          </p>
        </div>
      </div>
    </section>
  );
}