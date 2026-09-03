import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { MobileCTA } from '@/components/MobileCTA';
import { ScrollToTop } from '@/components/ScrollToTop';
import { HomePage } from '@/pages/HomePage';
import { AboutPage } from '@/pages/AboutPage';
import { ServicesPage } from '@/pages/ServicesPage';
import { IrrigationRepairPage } from '@/pages/IrrigationRepairPage';
import { FertilizationPage } from '@/pages/FertilizationPage';
import { LandscapeMaintenancePage } from '@/pages/LandscapeMaintenancePage';
import { SeasonalLandscapingPage } from '@/pages/SeasonalLandscapingPage';
import { LandscapeRenovationsPage } from '@/pages/LandscapeRenovationsPage';
import { YardCleanupPage } from '@/pages/YardCleanupPage';
import { GalleryPage } from '@/pages/GalleryPage';
import { ReviewsPage } from '@/pages/ReviewsPage';
import { ContactPage } from '@/pages/ContactPage';

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="flex min-h-screen flex-col bg-charcoal-950">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/services/irrigation-repair" element={<IrrigationRepairPage />} />
            <Route path="/services/fertilization" element={<FertilizationPage />} />
            <Route path="/services/landscape-maintenance" element={<LandscapeMaintenancePage />} />
            <Route path="/services/seasonal-landscaping" element={<SeasonalLandscapingPage />} />
            <Route path="/services/landscape-renovations" element={<LandscapeRenovationsPage />} />
            <Route path="/services/yard-cleanup" element={<YardCleanupPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/reviews" element={<ReviewsPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
        <MobileCTA />
      </div>
    </BrowserRouter>
  );
}
