
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
import { projects } from './projectsData';
import ProjectsPage from './components/ProjectsPage';
import ProjectDetailPage from './components/ProjectDetailPage';
import PrivacyPolicyPage from './components/PrivacyPolicyPage';
import CookieBanner from './components/CookieBanner';
import AdminPanel from './components/AdminPanel';

export type View = 'home' | 'projects' | 'privacy' | 'admin' | 'project-detail' | 'service-detail';

const App: React.FC = () => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handleLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener('popstate', handleLocationChange);
    return () => window.removeEventListener('popstate', handleLocationChange);
  }, []);

  const handleNavigate = (path: string, sectionId?: string) => {
    window.history.pushState({}, '', path);
    setCurrentPath(path);
    
    if (sectionId) {
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  };

  // Parsing routes
  const projectMatch = currentPath.match(/^\/work\/([^/]+)$/);
  const serviceMatch = currentPath.match(/^\/service\/([^/]+)$/);
  
  const selectedProjectId = projectMatch ? projectMatch[1] : null;
  const selectedServiceId = serviceMatch ? serviceMatch[1] : null;

  const selectedProject = projects.find(p => p.id === selectedProjectId);
  const selectedService = services.find(s => s.id === selectedServiceId);

  let currentView: View = 'home';
  if (currentPath === '/works') currentView = 'projects';
  else if (currentPath === '/privacy') currentView = 'privacy';
  else if (currentPath === '/admin') currentView = 'admin';
  else if (selectedProject) currentView = 'project-detail';
  else if (selectedService) currentView = 'service-detail';

  const renderContent = () => {
    if (currentView === 'admin') {
      return <AdminPanel />;
    }
    if (currentView === 'project-detail' && selectedProject) {
      return <ProjectDetailPage project={selectedProject} onBack={() => handleNavigate('/works')} />;
    }
    if (currentView === 'service-detail' && selectedService) {
      return <ServicePage service={selectedService} onBack={() => handleNavigate('/')} />;
    }
    if (currentView === 'projects') {
      return <ProjectsPage onProjectSelect={(id) => handleNavigate(`/work/${id}`)} />;
    }
    if (currentView === 'privacy') {
      return <PrivacyPolicyPage />;
    }
    
    // Home view (Default)
    return (
      <>
        <Hero />
        <TransformSection onNavigate={handleNavigate} />
        <ScrollRevealSection>
          <WhyChooseUs />
        </ScrollRevealSection>
        <ScrollRevealSection>
          <ServicesSection onServiceSelect={(id) => handleNavigate(`/service/${id}`)} />
        </ScrollRevealSection>
        <ScrollRevealSection>
          <Testimonials onNavigateToProjects={() => handleNavigate('/works')} />
        </ScrollRevealSection>
      </>
    );
  };

  const isDetailPage = currentView === 'project-detail' || currentView === 'service-detail';

  return (
    <LanguageProvider>
      <div className="bg-brand-light text-brand-dark font-sans antialiased">
        <Header 
          onNavigate={handleNavigate} 
          currentView={currentView} 
          isServicePage={isDetailPage} 
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
