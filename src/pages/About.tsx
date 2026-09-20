import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

export function About() {
  return (
    <div className="min-h-screen bg-embta-navy">
      <Header />
      <main className="pt-20">
        <section className="py-20 md:py-32">
          <div className="section-container">
            <div className="text-center mb-16">
              <h1 className="section-heading">About EMBTA</h1>
              <p className="section-subheading">Learn about our mission, history, and leadership</p>
            </div>
            <div className="glass-card p-8 md:p-12 max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-6">About Eastern Maring Business & Traders Association</h2>
              <p className="text-embta-light-gray leading-relaxed mb-6">
                The Eastern Maring Business & Traders Association (EMBTA) is a premier business organization
                dedicated to fostering economic growth, collaboration, and community development in our region.
                Established to unite businesses and traders under a common vision, we serve as the collective
                voice advocating for policies that benefit our members and the broader community.
              </p>
              <p className="text-embta-light-gray leading-relaxed mb-6">
                Through strategic initiatives, networking events, and advocacy efforts, EMBTA creates pathways
                for businesses to thrive while strengthening the fabric of our community.
              </p>
              <div className="grid md:grid-cols-3 gap-6 mt-12">
                <div className="text-center p-6 bg-white/5 rounded-xl">
                  <h3 className="text-embta-green text-4xl font-bold mb-2">500+</h3>
                  <p className="text-embta-light-gray">Member Businesses</p>
                </div>
                <div className="text-center p-6 bg-white/5 rounded-xl">
                  <h3 className="text-embta-green text-4xl font-bold mb-2">15+</h3>
                  <p className="text-embta-light-gray">Years of Service</p>
                </div>
                <div className="text-center p-6 bg-white/5 rounded-xl">
                  <h3 className="text-embta-green text-4xl font-bold mb-2">50+</h3>
                  <p className="text-embta-light-gray">Annual Events</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}