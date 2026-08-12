import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { FAQPage } from './pages/FAQPage';
import { ContactPage } from './pages/ContactPage';
import { GalleryPage } from './pages/GalleryPage';
import { ServiceModal } from './components/ServiceModal';
import { MEPCalculator } from './components/MEPCalculator';
import { QuickContactWidget } from './components/QuickContactWidget';
import { ServiceItem } from './types';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('home');
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [isEstimatorOpen, setIsEstimatorOpen] = useState<boolean>(false);
  const [preselectedContactService, setPreselectedContactService] = useState<string>('');

  const handleNavigate = (page: string) => {
    setActiveTab(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleQuoteWithService = (serviceTitle: string) => {
    setPreselectedContactService(serviceTitle);
    setActiveTab('contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleInquiryFromEstimator = (details: any) => {
    console.log('Estimator inquiry submitted:', details);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 font-sans selection:bg-cyan-500 selection:text-white">
      {/* Top Header Navbar */}
      <Navbar 
        activeTab={activeTab} 
        setActiveTab={handleNavigate}
        onOpenEstimator={() => setIsEstimatorOpen(true)}
      />

      {/* Main View Router */}
      <main className="flex-1">
        {activeTab === 'home' && (
          <HomePage
            onNavigate={handleNavigate}
            onSelectService={(s) => setSelectedService(s)}
            onOpenEstimator={() => setIsEstimatorOpen(true)}
            onQuoteWithService={handleQuoteWithService}
          />
        )}

        {activeTab === 'about' && (
          <AboutPage
            onNavigate={handleNavigate}
            onOpenEstimator={() => setIsEstimatorOpen(true)}
          />
        )}

        {activeTab === 'services' && (
          <ServicesPage
            onSelectService={(s) => setSelectedService(s)}
            onQuoteWithService={handleQuoteWithService}
            onOpenEstimator={() => setIsEstimatorOpen(true)}
          />
        )}

        {activeTab === 'gallery' && (
          <GalleryPage />
        )}

        {activeTab === 'faq' && (
          <FAQPage
            onNavigate={handleNavigate}
          />
        )}

        {activeTab === 'contact' && (
          <ContactPage
            preselectedService={preselectedContactService}
          />
        )}
      </main>

      {/* Global Modals */}
      <ServiceModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onQuoteRequest={handleQuoteWithService}
      />

      {/* <MEPCalculator
        isOpen={isEstimatorOpen}
        onClose={() => setIsEstimatorOpen(false)}
        onSubmitInquiry={handleInquiryFromEstimator}
      /> */}

      {/* Quick Contact & WhatsApp Widget */}
      {/* <QuickContactWidget
        onOpenEstimator={() => setIsEstimatorOpen(true)}
        onNavigateContact={() => handleNavigate('contact')}
      /> */}

      {/* Global Footer */}
      <Footer 
        onNavigate={handleNavigate}
        onOpenEstimator={() => setIsEstimatorOpen(true)}
      />
    </div>
  );
}
