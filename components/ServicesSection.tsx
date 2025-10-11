import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import ScrollRevealSection from './ScrollRevealSection';
import { services } from '../servicesData';

interface ServicesSectionProps {
  onServiceSelect: (serviceId: string) => void;
}

const ServicesSection: React.FC<ServicesSectionProps> = ({ onServiceSelect }) => {
  const { t } = useLanguage();

  return (
    <section id="services" className="bg-brand-light py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-8 lg:px-16 text-center">
        <h2 className="text-4xl font-bold mb-16">{t('servicesTitle')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {services.map((service, index) => (
             <ScrollRevealSection 
              key={service.id}
              animation="fade-in-up" 
              delay={`delay-${index * 100}`} 
              className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row h-full"
            >
              <div className="md:w-1/2">
                <img src={service.image} alt={t(service.titleKey)} className="w-full h-48 md:h-full object-cover" loading="lazy" />
              </div>
              <div className="md:w-1/2 p-6 flex flex-col justify-center items-start">
                <h3 className="text-xl font-semibold mb-4 text-left text-brand-dark">{t(service.titleKey)}</h3>
                <button 
                  onClick={() => onServiceSelect(service.id)}
                  className="bg-[#8c6d52] text-white font-medium py-2 px-6 hover:bg-[#7a5f48] transition-colors duration-300 rounded"
                >
                  + info
                </button>
              </div>
            </ScrollRevealSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;