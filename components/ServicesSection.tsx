
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
    <section id="services" className="bg-brand-light py-24 lg:py-36">
      <div className="container mx-auto px-6 sm:px-12 lg:px-24">
        <div className="text-center mb-20">
          <span className="text-brand-gold uppercase tracking-[0.4em] text-sm font-semibold mb-4 block">Our Expertise</span>
          <h2 className="text-4xl md:text-5xl font-bold text-brand-dark">{t('servicesTitle')}</h2>
          <div className="w-24 h-1 bg-brand-gold mx-auto mt-8 opacity-30"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-12 max-w-6xl mx-auto">
          {services.map((service, index) => (
             <ScrollRevealSection 
              key={service.id}
              animation="fade-in-up" 
              delay={`delay-${(index % 2) * 200}`} 
              className="group bg-white rounded-sm shadow-xl overflow-hidden flex flex-col sm:flex-row h-full border border-gray-100 transition-all hover:shadow-2xl hover:-translate-y-1"
            >
              <div className="sm:w-2/5 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={t(service.titleKey)} 
                  className="w-full h-56 sm:h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  loading="lazy" 
                />
              </div>
              <div className="sm:w-3/5 p-8 lg:p-10 flex flex-col justify-center items-start bg-white">
                <h3 className="text-xl lg:text-2xl font-bold mb-4 text-left text-brand-dark group-hover:text-brand-gold transition-colors">{t(service.titleKey)}</h3>
                <p className="text-gray-500 text-sm mb-8 line-clamp-2 leading-relaxed">
                  {t(service.descriptionKey)}
                </p>
                <button 
                  onClick={() => onServiceSelect(service.id)}
                  className="group/btn relative inline-flex items-center gap-2 text-brand-gold font-bold text-xs uppercase tracking-widest transition-all hover:gap-4"
                >
                  <span>Discover More</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                </button>
              </div>
            </ScrollRevealSection>
          ))}
        </div>
        
        <div className="mt-20 text-center">
          <p className="text-gray-400 italic text-sm mb-0">Customized solutions for unique architectural needs.</p>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
