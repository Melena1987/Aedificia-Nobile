import React, { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { View } from '../App';

const UKFlag: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 60 30">
    <clipPath id="a"><path d="M0 0v30h60V0z"/></clipPath>
    <path d="M0 0v30h60V0z" fill="#012169"/>
    <path d="M0 0l60 30m0-30L0 30" stroke="#fff" strokeWidth="6" clipPath="url(#a)"/>
    <path d="M0 0l60 30m0-30L0 30" stroke="#C8102E" strokeWidth="4" clipPath="url(#a)"/>
    <path d="M30 0v30M0 15h60" stroke="#fff" strokeWidth="10" clipPath="url(#a)"/>
    <path d="M30 0v30M0 15h60" stroke="#C8102E" strokeWidth="6" clipPath="url(#a)"/>
  </svg>
);

const SpainFlag: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 600 400">
    <path fill="#c60b1e" d="M0 0h600v400H0z"/>
    <path fill="#ffc400" d="M0 100h600v200H0z"/>
  </svg>
);

interface HeaderProps {
  onNavigate: (view: View, callback?: () => void) => void;
  currentView: View;
  isServicePage: boolean;
}

// FIX: Defined an interface for NavLink and applied it to the navLinks array to ensure
// that `link.view` is correctly typed as `View` ('home' | 'projects') instead of
// the wider `string` type, resolving the TypeScript error.
interface NavLink {
  label: string;
  view: View;
  sectionId?: string;
}

const Header: React.FC<HeaderProps> = ({ onNavigate, currentView, isServicePage }) => {
  const { t, language, setLanguage } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  
  const handleScroll = () => {
    setIsScrolled(window.scrollY > 50);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleNavClick = (e: React.MouseEvent, view: View, sectionId?: string) => {
    e.preventDefault();
    if (sectionId) {
      onNavigate(view, () => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
      });
    } else {
      onNavigate(view);
    }
  };

  const navLinks: NavLink[] = [
    { label: t('navHome'), view: 'home', sectionId: 'home' },
    { label: t('navAbout'), view: 'home', sectionId: 'about' },
    { label: t('navServices'), view: 'home', sectionId: 'services' },
    { label: t('navProjects'), view: 'projects' },
    { label: t('navContact'), view: 'home', sectionId: 'contact' },
  ];

  const isTransparentInitially = currentView === 'home' && !isServicePage;
  const isOpaque = isScrolled || !isTransparentInitially;

  return (
    <header className={`fixed top-0 left-0 w-full z-30 transition-all duration-300 ${isOpaque ? 'bg-white shadow-md text-brand-dark' : 'bg-transparent text-white'}`}>
      <div className="w-full max-w-screen-2xl mx-auto flex justify-between items-center py-2 px-8 sm:px-12 lg:px-24">
        <a href="#home" onClick={(e) => handleNavClick(e, 'home', 'home')} className="flex-shrink-0">
          <img 
            src="https://firebasestorage.googleapis.com/v0/b/aedificia-nobile.firebasestorage.app/o/recursos%20web%2FAedificia%20Nobile%20logo.png?alt=media" 
            alt="Aedificia Nobile Logo" 
            className={`h-20 lg:h-24 transition-all duration-300 ${!isOpaque ? 'brightness-0 invert' : ''}`}
          />
        </a>
        
        <div className="hidden md:flex items-center space-x-6 lg:space-x-10">
          <nav className="flex items-center space-x-4">
            {navLinks.map(link => (
              <a 
                key={link.label} 
                href={link.view === 'projects' ? '#works' : `#${link.sectionId || 'home'}`} 
                onClick={(e) => handleNavClick(e, link.view, link.sectionId)} 
                className="font-semibold text-sm lg:text-base hover:text-brand-gold transition-colors whitespace-nowrap"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center space-x-2">
            <button onClick={() => setLanguage('en')} className={`p-1 rounded-md transition-all duration-200 ${language === 'en' ? 'bg-black/10' : 'bg-transparent'}`}>
              <UKFlag />
            </button>
            <button onClick={() => setLanguage('es')} className={`p-1 rounded-md transition-all duration-200 ${language === 'es' ? 'bg-black/10' : 'bg-transparent'}`}>
              <SpainFlag />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;