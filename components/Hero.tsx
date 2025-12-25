
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Hero: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section 
      id="home"
      className="relative h-screen overflow-hidden flex items-center justify-start text-white" 
    >
      <div 
        className="absolute inset-0 bg-cover bg-center ken-burns"
        style={{ backgroundImage: "url('https://firebasestorage.googleapis.com/v0/b/aedificia-nobile.firebasestorage.app/o/recursos%20web%2Fportada.jpg?alt=media')" }}
      ></div>
      <div className="bg-black/40 absolute inset-0"></div>
      
      <div className="relative z-10 text-left max-w-4xl px-8 sm:px-16 lg:px-24">
        <span className="block text-brand-gold uppercase tracking-[0.3em] font-medium mb-4 animate-fade-in opacity-0" style={{ animationDelay: '0.2s' }}>
          Excellence in Construction
        </span>
        <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight mb-10 drop-shadow-2xl animate-fade-in opacity-0" style={{ animationDelay: '0.4s' }}>
          {t('heroTitle')}
        </h2>
        <div className="animate-fade-in opacity-0" style={{ animationDelay: '0.6s' }}>
          <a 
            href="#contact" 
            className="group relative inline-flex items-center overflow-hidden bg-white text-brand-dark text-sm font-bold tracking-widest py-4 px-10 transition-all hover:bg-brand-gold hover:text-white"
          >
            <span className="relative z-10">{t('heroButton').toUpperCase()}</span>
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
