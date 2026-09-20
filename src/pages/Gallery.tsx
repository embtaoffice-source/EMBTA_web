import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

const galleryItems = [
  { title: 'Annual Summit 2025', gradient: 'linear-gradient(135deg, #00C853 0%, #0A1628 100%)' },
  { title: 'Community Outreach', gradient: 'linear-gradient(135deg, #1A2F5C 0%, #00C853 100%)' },
  { title: 'Business Fair', gradient: 'linear-gradient(135deg, #00C853 0%, #1A2F5C 100%)' },
  { title: 'Member Networking', gradient: 'linear-gradient(135deg, #1A2F5C 0%, #0A1628 100%)' },
  { title: 'Training Workshop', gradient: 'linear-gradient(135deg, #00C853 0%, #00E676 100%)' },
  { title: 'Awards Ceremony', gradient: 'linear-gradient(135deg, #1A2F5C 0%, #0A1628 100%)' },
  { title: 'Trade Mission', gradient: 'linear-gradient(135deg, #00C853 0%, #0A1628 100%)' },
  { title: 'Youth Program', gradient: 'linear-gradient(135deg, #00E676 0%, #1A2F5C 100%)' },
];

export function Gallery() {
  return (
    <div className="min-h-screen bg-embta-navy">
      <Header />
      <main className="pt-20">
        <section className="py-20 md:py-32">
          <div className="section-container">
            <div className="text-center mb-16">
              <h1 className="section-heading">Gallery</h1>
              <p className="section-subheading">Moments from our events and community activities</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {galleryItems.map((item, index) => (
                <div key={index} className="glass-card overflow-hidden group">
                  <div className="relative h-48 overflow-hidden">
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                      style={{ backgroundImage: item.gradient }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-embta-navy/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <span className="text-embta-green font-semibold">View Image</span>
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="font-semibold text-white line-clamp-1">{item.title}</h3>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-12">
              <p className="text-embta-medium-gray italic">* Demo gallery placeholders - actual photos to be added</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}