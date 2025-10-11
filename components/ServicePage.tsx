import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Service } from '../servicesData';

interface ServicePageProps {
  service: Service;
  onBack: () => void;
}

const ServicePage: React.FC<ServicePageProps> = ({ service, onBack }) => {
  const { t } = useLanguage();

  const handleContactClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    onBack();
    setTimeout(() => {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    }, 100); 
  };

  return (
    <div className="animate-fade-in">
      <section className="min-h-[60vh] flex flex-col md:flex-row">
        <div 
          className="md:w-1/2 bg-cover bg-center min-h-[300px]"
          style={{ backgroundImage: `url(${service.image})` }}
        ></div>
        <div className="md:w-1/2 bg-brand-taupe flex flex-col justify-center p-8 md:p-12 lg:p-16">
          <button onClick={onBack} className="text-left text-gray-700 hover:text-brand-dark transition-colors mb-6">
            &lt; {t('backButton')}
          </button>
          <h1 className="text-4xl lg:text-5xl font-bold text-brand-dark mb-8">{t(service.titleKey)}</h1>
          <a 
            href="#contact" 
            onClick={handleContactClick}
            className="inline-block self-start bg-brand-gold text-white font-semibold py-3 px-8 hover:opacity-90 transition-opacity duration-300"
          >
            {t('contactUsButton')}
          </a>
        </div>
      </section>
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-8 lg:px-16 max-w-4xl">
          <p className="text-gray-700 leading-relaxed text-lg">{t(service.descriptionKey)}</p>
        </div>
      </section>
    </div>
  );
};

export default ServicePage;