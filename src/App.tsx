import React, { useState } from 'react';
import { TopBar } from './components/layout/TopBar';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { QuickStrip } from './components/sections/QuickStrip';
import { About } from './components/sections/About';
import { Services } from './components/sections/Services';
import { WhyChooseUs } from './components/sections/WhyChooseUs';
import { Process } from './components/sections/Process';
import { Audience } from './components/sections/Audience';
import { CTABanner } from './components/sections/CTABanner';
import { FAQ } from './components/sections/FAQ';
import { Contact } from './components/sections/Contact';
import { ServiceModal } from './components/interactive/ServiceModal';
import { ConsultationModal } from './components/interactive/ConsultationModal';
import { FloatingContact } from './components/interactive/FloatingContact';
import { servicesData } from './data/services';
import { ServiceItem } from './types';

export const App: React.FC = () => {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [consultationServiceTitle, setConsultationServiceTitle] = useState<string>('');

  const handleOpenConsultation = (serviceTitle?: string) => {
    setConsultationServiceTitle(serviceTitle || '');
    setIsConsultationOpen(true);
  };

  const handleSelectQuickService = (serviceId: string) => {
    const service = servicesData.find((s) => s.id === serviceId);
    if (service) {
      setSelectedService(service);
    } else {
      const servicesElement = document.getElementById('services');
      if (servicesElement) {
        servicesElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleLearnMore = (service: ServiceItem) => {
    setSelectedService(service);
  };

  const handleBookFromService = (serviceTitle: string) => {
    handleOpenConsultation(serviceTitle);
  };

  return (
    <div className="min-h-screen flex flex-col bg-skybg-light text-slate-800 antialiased relative">
      {/* Top Contact Bar */}
      <TopBar onOpenConsultation={() => handleOpenConsultation()} />

      {/* Main Sticky Glassmorphism Navbar */}
      <Navbar onOpenConsultation={() => handleOpenConsultation()} />

      {/* Main Content Sections in Strict Specified Sequence */}
      <main className="flex-grow">
        {/* Section C: Hero */}
        <Hero onOpenConsultation={() => handleOpenConsultation()} />

        {/* Section D: Trust / Quick Service CTA Strip */}
        <QuickStrip onSelectService={handleSelectQuickService} />

        {/* Section E: About Section */}
        <About onOpenConsultation={() => handleOpenConsultation()} />

        {/* Section F: Services Section */}
        <Services
          onLearnMore={handleLearnMore}
          onBookService={handleBookFromService}
        />

        {/* Section G: Why Choose Us */}
        <WhyChooseUs />

        {/* Section H: Process Section */}
        <Process onOpenConsultation={() => handleOpenConsultation()} />

        {/* Section I: Who We Help (Audience) */}
        <Audience onOpenConsultation={() => handleOpenConsultation()} />

        {/* Section J: CTA Banner */}
        <CTABanner onOpenConsultation={() => handleOpenConsultation()} />

        {/* Section K: FAQ Section */}
        <FAQ onOpenConsultation={() => handleOpenConsultation()} />

        {/* Section L: Contact Section */}
        <Contact />
      </main>

      {/* Section M: Dark Professional Footer */}
      <Footer />

      {/* Floating Circular Contact Button (Section 5) */}
      <FloatingContact onOpenConsultation={() => handleOpenConsultation()} />

      {/* Interactive Modals */}
      <ServiceModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onSelectConsultation={(title) => {
          setSelectedService(null);
          handleOpenConsultation(title);
        }}
      />

      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
        preselectedService={consultationServiceTitle}
      />
    </div>
  );
};

export default App;
