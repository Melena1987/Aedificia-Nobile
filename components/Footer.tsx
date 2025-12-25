
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

interface FooterProps {
  onNavigate: (path: string, sectionId?: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const { t } = useLanguage();
  const logoUrl = "https://firebasestorage.googleapis.com/v0/b/aedificia-nobile.firebasestorage.app/o/recursos%20web%2FAedificia%20Nobile%20logo.png?alt=media&token=7ecc00e6-28ed-4897-86b0-d29a96c0b141";

  const handleNavClick = (e: React.MouseEvent, path: string, sectionId?: string) => {
    e.preventDefault();
    onNavigate(path, sectionId);
  };

  return (
    <footer className="bg-brand-taupe py-16 lg:py-20 border-t border-gray-200/50">
      <div className="container mx-auto px-6 sm:px-12 lg:px-24 flex flex-col md:flex-row justify-between items-center gap-12">
        
        {/* Left Item: Action */}
        <div className="flex flex-col items-center md:items-start gap-4">
          <a 
            href="/#contact" 
            onClick={(e) => handleNavClick(e, '/', 'contact')} 
            className="group relative inline-flex items-center overflow-hidden bg-brand-dark text-white text-sm font-bold tracking-widest py-4 px-10 transition-all hover:bg-brand-gold"
          >
            <span className="relative z-10 uppercase">{t('contactUsButton')}</span>
          </a>
        </div>

        {/* Middle Item: Info & Admin Link */}
        <div className="text-center order-last md:order-none">
          <div className="flex flex-wrap justify-center gap-6 mb-4">
            <a href="/privacy" onClick={(e) => handleNavClick(e, '/privacy')} className="text-xs tracking-widest uppercase text-gray-500 hover:text-brand-gold transition-colors font-semibold">
              {t('privacyPolicy')}
            </a>
            <span className="hidden md:inline text-gray-300">|</span>
            <a 
              href="/admin" 
              onClick={(e) => handleNavClick(e, '/admin')} 
              className="text-[10px] tracking-widest text-gray-300 hover:text-brand-dark transition-colors uppercase font-bold"
            >
              Admin Access
            </a>
          </div>
          <p className="text-[10px] uppercase tracking-[0.3em] text-gray-400">&copy; {new Date().getFullYear()} Aedificia Nobile. All Rights Reserved.</p>
        </div>

        {/* Right Item: Logo */}
        <div className="transition-transform hover:scale-105 duration-500">
          <img 
            src={logoUrl} 
            alt="Aedificia Nobile Logo"
            className="h-28 lg:h-36 object-contain grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all"
          />
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;
