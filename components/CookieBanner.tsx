
import React, { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const CookieBanner: React.FC = () => {
  const [shouldRender, setShouldRender] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const consent = localStorage.getItem('cookie_consent');
    if (!consent) {
      setShouldRender(true);
      // Small delay before starting the slide-up animation to let the site load first
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    setIsVisible(false);
    // Wait for the slide-down animation to finish before removing from DOM
    setTimeout(() => {
      localStorage.setItem('cookie_consent', 'true');
      setShouldRender(false);
    }, 700);
  };

  if (!shouldRender) {
    return null;
  }

  return (
    <div 
      className={`fixed bottom-0 left-0 w-full bg-brand-dark/95 backdrop-blur-md text-white py-4 px-6 z-50 transition-transform duration-700 ease-in-out border-t border-brand-gold/30 shadow-[0_-10px_30px_rgba(0,0,0,0.4)] ${
        isVisible ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex-1">
          <p className="text-xs sm:text-sm text-gray-300 text-center md:text-left leading-relaxed">
            {t('cookieBannerText')}
          </p>
        </div>
        
        <div className="flex items-center gap-6 shrink-0">
          <a 
            href="/privacy" 
            className="text-xs text-gray-400 hover:text-brand-gold underline transition-colors duration-300"
          >
            {t('privacyPolicy')}
          </a>
          <button
            onClick={handleAccept}
            className="bg-brand-gold text-white text-xs sm:text-sm font-bold py-2 px-8 hover:bg-opacity-90 transition-all duration-300 rounded shadow-md transform hover:scale-105 active:scale-95"
          >
            {t('cookieAccept')}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
