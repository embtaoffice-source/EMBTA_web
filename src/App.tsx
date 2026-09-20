import { Header } from './components/Header';
import { Hero3D } from './components/Hero3D';
import { AboutPreview } from './components/AboutPreview';
import { Focus3D } from './components/Focus3D';
import { Network3D } from './components/Network3D';
import { WhyEMBTA } from './components/WhyEMBTA';
import { Values3D } from './components/Values3D';
import { NewsPreview } from './components/NewsPreview';
import { GalleryPreview } from './components/GalleryPreview';
import { CTA3D } from './components/CTA3D';
import { Footer } from './components/Footer';

export function App() {
  return (
    <div className="min-h-screen bg-embta-navy">
      <Header />
      <main>
        <Hero3D />
        <AboutPreview />
        <Focus3D />
        <Network3D />
        <WhyEMBTA />
        <Values3D />
        <NewsPreview />
        <GalleryPreview />
        <CTA3D />
      </main>
      <Footer />
    </div>
  );
}

export default App;