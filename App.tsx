import React, { useState, useEffect } from 'react';
import { LanguageProvider } from './contexts/LanguageContext';
import Header from './components/Header';
import Hero from './components/Hero';
import TransformSection from './components/TransformSection';
import WhyChooseUs from './components/WhyChooseUs';
import ServicesSection from './components/ServicesSection';
import Testimonials from './components/Testimonials';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ScrollRevealSection from './components/ScrollRevealSection';
import ServicePage from './components/ServicePage';
import { services } from './servicesData';
import ProjectsPage from './components/ProjectsPage';
import PrivacyPolicyPage from './components/PrivacyPolicyPage';
import CookieBanner from './components/CookieBanner';

export type View = 'home' | 'projects' | 'privacy';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>('home');
  const [selectedServiceId, setSelectedServiceId] = useState<string | null>(null);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === '#works') {
        setCurrentView('projects');
      } else if (hash === '#privacy') {
        setCurrentView('privacy');
      } else {
        setCurrentView('home');
      }
      setSelectedServiceId(null); // Close service page on view change
      window.scrollTo(0, 0);
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange(); // Set initial view based on hash

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (view: View, callback?: () => void) => {
    let targetHash = '#home';
    if (view === 'projects') targetHash = '#works';
    if (view === 'privacy') targetHash = '#privacy';
    
    const currentHash = window.location.hash || '#home';

    // If we are navigating to a section on the current page, just scroll
    if (currentHash === targetHash) {
      if (callback) {
        callback();
      }
      return;
    }

    // If navigating to a different page, change the hash.
    // The hashchange listener will handle the view update and scroll to top.
    window.location.hash = targetHash;

    // If there's a callback (for scrolling to a section), execute it after a delay
    // to allow the new page component to render.
    if (callback) {
      setTimeout(callback, 150);
    }
  };

  const handleSelectService = (serviceId: string) => {
    setSelectedServiceId(serviceId);
    window.scrollTo(0, 0);
  };
  
  const handleGoBack = () => {
    setSelectedServiceId(null);
    window.scrollTo(0, 0);
  };

  const selectedService = services.find(s => s.id === selectedServiceId);

  const renderContent = () => {
    if (selectedService) {
      return <ServicePage service={selectedService} onBack={handleGoBack} />;
    }
    if (currentView === 'projects') {
      return <ProjectsPage />;
    }
    if (currentView === 'privacy') {
      return <PrivacyPolicyPage />;
    }
    // Home view
    return (
      <>
        <Hero />
        <TransformSection />
        <ScrollRevealSection>
          <WhyChooseUs />
        </ScrollRevealSection>
        <ScrollRevealSection>
          <ServicesSection onServiceSelect={handleSelectService} />
        </ScrollRevealSection>
        <ScrollRevealSection>
          <Testimonials onNavigateToProjects={() => handleNavigate('projects')} />
        </ScrollRevealSection>
      </>
    );
  };

  return (
    <LanguageProvider>
      <div className="bg-brand-light text-brand-dark font-sans antialiased">
        <Header 
          onNavigate={handleNavigate} 
          currentView={currentView} 
          isServicePage={!!selectedServiceId} 
        />
        <main>
          {renderContent()}
          <ScrollRevealSection>
            <ContactSection />
          </ScrollRevealSection>
        </main>
        <Footer />
        <CookieBanner />
      </div>
    </LanguageProvider>
  );
};

export default App;