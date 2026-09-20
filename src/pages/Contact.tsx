import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

export function Contact() {
  return (
    <div className="min-h-screen bg-embta-navy">
      <Header />
      <main className="pt-20">
        <section className="py-20 md:py-32">
          <div className="section-container">
            <div className="text-center mb-16">
              <h1 className="section-heading">Contact EMBTA</h1>
              <p className="section-subheading">Get in touch with our team</p>
            </div>
            <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
              <div className="glass-card p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Send us a Message</h3>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-embta-light-gray mb-2">First Name</label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-embta-medium-gray focus:outline-none focus:ring-2 focus:ring-embta-green focus:border-transparent transition-all"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-embta-light-gray mb-2">Last Name</label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-embta-medium-gray focus:outline-none focus:ring-2 focus:ring-embta-green focus:border-transparent transition-all"
                        placeholder="Doe"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-embta-light-gray mb-2">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-embta-medium-gray focus:outline-none focus:ring-2 focus:ring-embta-green focus:border-transparent transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-embta-light-gray mb-2">Subject</label>
                    <select
                      id="subject"
                      name="subject"
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-embta-green focus:border-transparent transition-all"
                    >
                      <option value="">Select a topic</option>
                      <option value="membership">Membership Inquiry</option>
                      <option value="events">Events & Programs</option>
                      <option value="partnership">Partnership Opportunities</option>
                      <option value="media">Media & Press</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-embta-light-gray mb-2">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-embta-medium-gray focus:outline-none focus:ring-2 focus:ring-embta-green focus:border-transparent transition-all resize-none"
                      placeholder="How can we help you?"
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn-3d btn-3d-primary w-full"
                  >
                    Send Message
                  </button>
                </form>
              </div>
              <div className="space-y-8">
                <div className="glass-card p-8">
                  <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-embta-green/20 flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6 text-embta-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-white">Office Address</h4>
                        <p className="text-embta-light-gray">[Association Address]</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-embta-green/20 flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6 text-embta-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h2.28a2 2 0 011.89 1.21l.57 1.42a2 2 0 01-.45 2.15l-1.13 1.13a16 16 0 006.02 6.02l1.13-1.13a2 2 0 012.15-.45l1.42.57A2 2 0 0121 18.72V21a2 2 0 01-2 2 16 16 0 01-16 0 2 2 0 01-2-2v-2.28z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-white">Phone</h4>
                        <p className="text-embta-light-gray">[Official Phone Number]</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-embta-green/20 flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6 text-embta-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-white">Email</h4>
                        <p className="text-embta-light-gray">[Official Email Address]</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="glass-card p-8">
                  <h3 className="text-2xl font-bold text-white mb-6">Business Hours</h3>
                  <div className="space-y-3 text-embta-light-gray">
                    <div className="flex justify-between">
                      <span>Monday - Friday</span>
                      <span className="text-embta-green">9:00 AM - 5:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday</span>
                      <span className="text-embta-green">10:00 AM - 2:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday</span>
                      <span className="text-embta-green">Closed</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center mt-12">
              <p className="text-embta-medium-gray italic">* Contact details are placeholders - update with official information</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}