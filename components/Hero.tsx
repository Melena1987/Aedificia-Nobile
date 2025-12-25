
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Hero: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section 
      id="home"
      className="relative h-screen min-h-[700px] overflow-hidden flex items-center justify-start text-white" 
    >
      <div 
        className="absolute inset-0 bg-cover bg-center ken-burns"
        style={{ backgroundImage: "url('https://firebasestorage.googleapis.com/v0/b/aedificia-nobile.firebasestorage.app/o/recursos%20web%2Fportada.jpg?alt=media')" }}
      ></div>
      <div className="bg-black/45 absolute inset-0"></div>
      
      <div className="relative z-10 text-left w-full max-w-screen-2xl mx-auto px-6 sm:px-12 lg:px-24">
        <div className="max-w-4xl">
          <span className="block text-brand-gold uppercase tracking-[0.4em] font-bold text-sm mb-6 animate-fade-in opacity-0" style={{ animationDelay: '0.3s' }}>
            {t('navAbout')}
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.1] mb-12 drop-shadow-lg animate-fade-in opacity-0" style={{ animationDelay: '0.6s' }}>
            {t('heroTitle')}
          </h1>
          <div className="animate-fade-in opacity-0 flex flex-wrap gap-6" style={{ animationDelay: '0.9s' }}>
            <a 
              href="#contact" 
              className="group relative inline-flex items-center overflow-hidden bg-brand-gold text-white text-xs sm:text-sm font-bold tracking-[0.2em] py-5 px-12 transition-all hover:bg-white hover:text-brand-dark shadow-xl"
            >
              <span className="relative z-10 uppercase">{t('heroButton')}</span>
            </a>
            <a 
              href="#services" 
              className="group relative inline-flex items-center overflow-hidden border border-white/30 text-white text-xs sm:text-sm font-bold tracking-[0.2em] py-5 px-12 transition-all hover:bg-white/10"
            >
              <span className="relative z-10 uppercase">{t('ourServicesButton')}</span>
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 opacity-60 hover:opacity-100 transition-opacity">
        <span className="text-[10px] tracking-[0.4em] uppercase font-bold text-white mb-2">Scroll</span>
        <div className="w-[1px] h-16 bg-gradient-to-b from-brand-gold to-transparent"></div>
        <div className="animate-bounce mt-[-10px]">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-brand-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;
