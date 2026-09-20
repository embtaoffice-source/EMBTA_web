import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

export function Executive() {
  return (
    <div className="min-h-screen bg-embta-navy">
      <Header />
      <main className="pt-20">
        <section className="py-20 md:py-32">
          <div className="section-container">
            <div className="text-center mb-16">
              <h1 className="section-heading">Executive Leadership</h1>
              <p className="section-subheading">Meet the team guiding EMBTA's vision</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { name: '[President Name]', role: 'President', bio: '[Executive bio placeholder]' },
                { name: '[Vice President Name]', role: 'Vice President', bio: '[Executive bio placeholder]' },
                { name: '[Secretary Name]', role: 'Secretary', bio: '[Executive bio placeholder]' },
                { name: '[Treasurer Name]', role: 'Treasurer', bio: '[Executive bio placeholder]' },
                { name: '[Director Name]', role: 'Director', bio: '[Executive bio placeholder]' },
                { name: '[Director Name]', role: 'Director', bio: '[Executive bio placeholder]' },
              ].map((exec, i) => (
                <div key={i} className="glass-card p-8 text-center">
                  <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-white/5 flex items-center justify-center">
                    <span className="text-3xl font-bold text-embta-green">?</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-1">{exec.name}</h3>
                  <p className="text-embta-green mb-4">{exec.role}</p>
                  <p className="text-embta-light-gray text-sm">{exec.bio}</p>
                </div>
              ))}
            </div>
            <div className="text-center mt-12">
              <p className="text-embta-medium-gray italic">* Executive profiles will be updated with official information</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}