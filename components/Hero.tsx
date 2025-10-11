
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Hero: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section 
      id="home"
      className="h-screen bg-cover bg-center bg-fixed flex items-center justify-start text-white" 
      style={{ backgroundImage: "url('https://firebasestorage.googleapis.com/v0/b/aedificia-nobile.firebasestorage.app/o/recursos%20web%2Fportada.jpg?alt=media')" }}
    >
      <div className="bg-black bg-opacity-40 absolute inset-0"></div>
      <div className="relative z-1 text-left max-w-2xl px-8 sm:px-16 lg:px-24">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8" style={{textShadow: '2px 2px 4px rgba(0,0,0,0.7)'}}>
          {t('heroTitle')}
        </h2>
        <a href="#contact" className="bg-white text-brand-dark text-sm font-medium py-3 px-6 hover:bg-gray-200 transition-colors duration-300">
          {t('heroButton')}
        </a>
      </div>
    </section>
  );
};

export default Hero;