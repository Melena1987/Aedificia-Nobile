import React, { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const CookieBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const consent = localStorage.getItem('cookie_consent');
    if (!consent) {
      // Use a timeout to ensure the banner doesn't appear too abruptly
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie_consent', 'true');
    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div 
      className="fixed bottom-4 left-4 right-4 sm:bottom-6 sm:left-auto sm:right-6 max-w-md bg-brand-dark text-white p-5 rounded-lg shadow-2xl z-50 transition-transform duration-500 ease-out"
      style={{ transform: isVisible ? 'translateY(0)' : 'translateY(200%)' }}
    >
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <p className="text-sm text-gray-300 flex-grow">
          {t('cookieBannerText')}
        </p>
        <button
          onClick={handleAccept}
          className="bg-brand-gold text-white font-semibold py-2 px-5 hover:opacity-90 transition-opacity duration-300 rounded whitespace-nowrap self-end sm:self-center"
        >
          {t('cookieAccept')}
        </button>
      </div>
    </div>
  );
};

export default CookieBanner;
