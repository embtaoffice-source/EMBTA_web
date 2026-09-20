import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useSearchParams, useNavigate } from 'react-router-dom';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Executive } from './pages/Executive';
import { Gallery } from './pages/Gallery';
import { News } from './pages/News';
import { Contact } from './pages/Contact';

function RedirectHandler() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const redirect = searchParams.get('redirect');

  useEffect(() => {
    if (redirect) {
      navigate(redirect, { replace: true });
    }
  }, [redirect, navigate]);

  return null;
}

export function App() {
  return (
    <BrowserRouter basename="/EMBTA_web">
      <RedirectHandler />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/executive" element={<Executive />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/news" element={<News />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;