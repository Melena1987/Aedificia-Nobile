
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Footer: React.FC = () => {
  const { t } = useLanguage();
  return (
    <footer className="bg-brand-taupe py-12">
      <div className="container mx-auto px-4 sm:px-8 lg:px-16 flex flex-col md:flex-row justify-between items-center text-center gap-8">
        
        {/* Left Item: Button */}
        <div>
          <a href="#contact" className="bg-brand-gold text-white font-semibold py-3 px-8 hover:opacity-90 transition-opacity duration-300">
            {t('contactUsButton')}
          </a>
        </div>

        {/* Middle Item: Info. Reordered to be first on mobile stack. */}
        <div className="text-sm text-gray-700 order-first md:order-none">
          <a href="#" className="hover:text-brand-gold">{t('privacyPolicy')}</a>
          <p className="mt-2">&copy; 2025 Aedificia Nobile</p>
        </div>

        {/* Right Item: Logo */}
        <div>
          <img 
            src="https://firebasestorage.googleapis.com/v0/b/aedificia-nobile.firebasestorage.app/o/recursos%20web%2FAedificia%20Nobile%20logo.png?alt=media" 
            alt="Aedificia Nobile Logo"
            className="h-28"
          />
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;