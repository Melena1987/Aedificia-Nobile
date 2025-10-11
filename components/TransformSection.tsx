import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import ScrollRevealSection from './ScrollRevealSection';

const TransformSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="bg-brand-light py-16 lg:py-24 relative z-10 overflow-x-hidden">
      <div className="container mx-auto px-4 sm:px-8 lg:px-16 flex flex-col md:flex-row items-center gap-12 md:gap-16 max-w-6xl">
        {/* Image Column */}
        <ScrollRevealSection animation="fade-in-left" className="w-full md:w-1/2">
          <img 
            src="https://picsum.photos/seed/kitchen/1200/800" 
            alt="Bright, modern kitchen with white cabinets and a dark island" 
            className="w-full h-auto object-cover rounded-lg shadow-2xl"
            loading="lazy"
          />
        </ScrollRevealSection>
        {/* Text Column */}
        <ScrollRevealSection animation="fade-in-right" delay="delay-300" className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t('transformTitle')}
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            {t('transformText')}
          </p>
          <a 
            href="#services" 
            className="inline-block bg-brand-dark text-white font-semibold py-3 px-8 hover:bg-gray-800 transition-colors duration-300 rounded"
            aria-label="View our services"
          >
            {t('ourServicesButton')}
          </a>
        </ScrollRevealSection>
      </div>
    </section>
  );
};

export default TransformSection;