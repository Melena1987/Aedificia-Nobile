
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
import AdminPanel from './components/AdminPanel';

export type View = 'home' | 'projects' | 'privacy' | 'admin';

const App: React.FC = () => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);
  const [selectedServiceId, setSelectedServiceId] = useState<string | null>(null);

  useEffect(() => {
    const handleLocationChange = () => {
      setCurrentPath(window.location.pathname);
      setSelectedServiceId(null);
    };

    window.addEventListener('popstate', handleLocationChange);
    
    // Set initial state
    handleLocationChange();

    return () => window.removeEventListener('popstate', handleLocationChange);
  }, []);

  const handleNavigate = (path: string, sectionId?: string) => {
    const isOnSamePage = window.location.pathname === path || (path === '/' && window.location.pathname === '');

    if (!isOnSamePage) {
      window.history.pushState({}, '', path);
      setCurrentPath(path);
      setSelectedServiceId(null);
      window.scrollTo(0, 0);
    }
    
    if (sectionId) {
      setTimeout(() => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
      }, isOnSamePage ? 0 : 150);
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

  let currentView: View = 'home';
  if (currentPath === '/works') currentView = 'projects';
  else if (currentPath === '/privacy') currentView = 'privacy';
  else if (currentPath === '/admin') currentView = 'admin';

  const renderContent = () => {
    if (currentView === 'admin') {
      return <AdminPanel />;
    }
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
          <Testimonials onNavigateToProjects={() => handleNavigate('/works')} />
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
          {currentView !== 'admin' && (
            <ScrollRevealSection>
              <ContactSection />
            </ScrollRevealSection>
          )}
        </main>
        <Footer onNavigate={handleNavigate} />
        <CookieBanner />
      </div>
    </LanguageProvider>
  );
};

export default App;
