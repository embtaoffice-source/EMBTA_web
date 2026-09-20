import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

const newsItems = [
  {
    category: 'Event',
    date: 'Oct 15, 2026',
    title: 'Annual Business Summit 2026',
    description: 'Join us for our flagship annual event bringing together industry leaders and community members for a day of networking, keynote speeches, and collaborative workshops.',
    fullContent: 'Full article content will be available soon...'
  },
  {
    category: 'Initiative',
    date: 'Oct 5, 2026',
    title: 'New Youth Entrepreneurship Program Launches',
    description: 'A new initiative supporting young entrepreneurs with mentorship, resources, and networking opportunities to help launch their business ideas.',
    fullContent: 'Full article content will be available soon...'
  },
  {
    category: 'Community',
    date: 'Sep 28, 2026',
    title: 'Community Outreach Day Success',
    description: 'Our members came together for a day of service and community building, supporting local charities and strengthening community bonds.',
    fullContent: 'Full article content will be available soon...'
  },
  {
    category: 'Announcement',
    date: 'Sep 15, 2026',
    title: 'EMBTA Welcomes 50 New Members',
    description: 'We are proud to announce the addition of 50 new member businesses to our growing association this quarter.',
    fullContent: 'Full article content will be available soon...'
  },
  {
    category: 'Policy',
    date: 'Sep 1, 2026',
    title: 'Advocacy Update: New Trade Regulations',
    description: 'EMBTA advocacy team provides an update on recent trade policy changes affecting our member businesses.',
    fullContent: 'Full article content will be available soon...'
  },
  {
    category: 'Event',
    date: 'Aug 20, 2026',
    title: 'Quarterly Networking Mixer',
    description: 'Save the date for our next quarterly networking event connecting business leaders across industries.',
    fullContent: 'Full article content will be available soon...'
  },
];

export function News() {
  return (
    <div className="min-h-screen bg-embta-navy">
      <Header />
      <main className="pt-20">
        <section className="py-20 md:py-32">
          <div className="section-container">
            <div className="text-center mb-16">
              <h1 className="section-heading">News & Updates</h1>
              <p className="section-subheading">Stay informed about our latest activities and initiatives</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {newsItems.map((item, index) => (
                <article key={index} className="glass-card-hover p-6 relative overflow-hidden">
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-embta-green/20 backdrop-blur-sm text-xs font-medium text-embta-green border border-embta-green/30">
                    {item.category}
                  </span>
                  <time className="absolute top-4 right-4 text-xs text-embta-light-gray">{item.date}</time>
                  <h3 className="font-display font-bold text-white mb-3 mt-8">{item.title}</h3>
                  <p className="text-embta-light-gray text-sm mb-4 line-clamp-3">{item.description}</p>
                  <a href="#" className="inline-flex items-center gap-2 text-sm font-medium text-embta-green hover:text-embta-green-glow transition-colors">
                    Read More
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </article>
              ))}
            </div>
            <div className="text-center mt-12">
              <p className="text-embta-medium-gray italic">* Demo news content - actual articles will be managed via CMS</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}