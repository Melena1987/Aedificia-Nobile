
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

interface FooterProps {
  onNavigate: (path: string, sectionId?: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const { t } = useLanguage();

  const handleNavClick = (e: React.MouseEvent, path: string, sectionId?: string) => {
    e.preventDefault();
    onNavigate(path, sectionId);
  };

  return (
    <footer className="bg-brand-taupe py-12">
      <div className="container mx-auto px-4 sm:px-8 lg:px-16 flex flex-col md:flex-row justify-between items-center text-center gap-8">
        
        {/* Left Item: Button */}
        <div>
          <a href="/#contact" onClick={(e) => handleNavClick(e, '/', 'contact')} className="bg-brand-gold text-white font-semibold py-3 px-8 hover:opacity-90 transition-opacity duration-300">
            {t('contactUsButton')}
          </a>
        </div>

        {/* Middle Item: Info & Admin Link */}
        <div className="text-sm text-gray-700 order-first md:order-none">
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/privacy" onClick={(e) => handleNavClick(e, '/privacy')} className="hover:text-brand-gold transition-colors">{t('privacyPolicy')}</a>
            <span className="hidden md:inline text-gray-400">|</span>
            <a 
              href="/admin" 
              onClick={(e) => handleNavClick(e, '/admin')} 
              className="text-gray-400 hover:text-brand-dark transition-colors text-xs self-center"
            >
              ADMIN
            </a>
          </div>
          <p className="mt-2 text-xs opacity-60">&copy; 2025 Aedificia Nobile</p>
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
