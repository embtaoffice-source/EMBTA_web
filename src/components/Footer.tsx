import { EmbtaLogo } from './EmbtaLogo';

export function Footer() {
  return (
    <footer className="relative bg-embta-navy border-t border-white/10">
      <div className="section-container py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-1">
            <a href="#home" className="flex items-center gap-3 mb-6">
              <EmbtaLogo size={40} variant="white" />
              <span className="font-display font-bold text-xl text-white">EMBTA</span>
            </a>
            <p className="text-embta-light-gray text-sm mb-6">
              Eastern Maring Business &amp; Traders Association.
              Connecting businesses and strengthening our community.
            </p>
            <div className="flex gap-4">
              {['facebook', 'twitter', 'linkedin', 'instagram'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-10 h-10 rounded-lg bg-white/5 hover:bg-embta-green/20 flex items-center justify-center transition-all duration-300 group"
                  aria-label={social}
                >
                  <span className="w-5 h-5 text-embta-light-gray group-hover:text-embta-green transition-colors">
                    {social === 'facebook' && 'f'}
                    {social === 'twitter' && 'x'}
                    {social === 'linkedin' && 'in'}
                    {social === 'instagram' && '@'}
                  </span>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display font-semibold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'About', 'Executive', 'Gallery', 'News', 'Contact'].map((link) => (
                <li key={link}>
                  <a
                    href={link === 'Home' ? '#home' : `/${link.toLowerCase()}`}
                    className="text-embta-light-gray hover:text-embta-green transition-colors duration-300 text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-white mb-6">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-embta-green mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-embta-light-gray text-sm">[Association Address]</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-embta-green mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h2.28a2 2 0 011.89 1.21l.57 1.42a2 2 0 01-.45 2.15l-1.13 1.13a16 16 0 006.02 6.02l1.13-1.13a2 2 0 012.15-.45l1.42.57A2 2 0 0121 18.72V21a2 2 0 01-2 2 16 16 0 01-16 0 2 2 0 01-2-2v-2.28z" />
                </svg>
                <span className="text-embta-light-gray text-sm">[Official Phone Number]</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-embta-green mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-embta-light-gray text-sm">[Official Email Address]</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-white mb-6">About</h4>
            <p className="text-embta-light-gray text-sm mb-6">
              EMBTA is a premier business association dedicated to fostering
              growth, collaboration, and community development.
            </p>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-center">
          <p className="text-embta-medium-gray text-sm">
            &copy; 2026 Eastern Maring Business &amp; Traders Association.
            All rights reserved.
          </p>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-embta-green/20 to-transparent" />
    </footer>
  );
}