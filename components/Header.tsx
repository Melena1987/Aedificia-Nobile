
import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { View } from '../App';

const UKFlag: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 60 30">
    <clipPath id="a"><path d="M0 0v30h60V0z"/></clipPath>
    <path d="M0 0v30h60V0z" fill="#012169"/>
    <path d="M0 0l60 30m0-30L0 30" stroke="#fff" strokeWidth="6" clipPath="url(#a)"/>
    <path d="M0 0l60 30m0-30L0 30" stroke="#C8102E" strokeWidth="4" clipPath="url(#a)"/>
    <path d="M30 0v30M0 15h60" stroke="#fff" strokeWidth="10" clipPath="url(#a)"/>
    <path d="M30 0v30M0 15h60" stroke="#C8102E" strokeWidth="6" clipPath="url(#a)"/>
  </svg>
);

const SpainFlag: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 600 400">
    <path fill="#c60b1e" d="M0 0h600v400H0z"/>
    <path fill="#ffc400" d="M0 100h600v200H0z"/>
  </svg>
);

const MenuIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
  </svg>
);

const CloseIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
);

interface HeaderProps {
  onNavigate: (path: string, sectionId?: string) => void;
  currentView: View;
  isServicePage: boolean;
}

interface NavLink {
  label: string;
  path: string;
  sectionId?: string;
}

const Header: React.FC<HeaderProps> = ({ onNavigate, currentView, isServicePage }) => {
  const { t, language, setLanguage } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const lastScrollY = useRef(0);
  
  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    setIsScrolled(currentScrollY > 50);

    if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
      setIsHeaderVisible(false);
    } else {
      setIsHeaderVisible(true);
    }
    
    lastScrollY.current = currentScrollY <= 0 ? 0 : currentScrollY;
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const handleNavClick = (e: React.MouseEvent, path: string, sectionId?: string) => {
    e.preventDefault();
    onNavigate(path, sectionId);
    setIsMobileMenuOpen(false);
  };

  const navLinks: NavLink[] = [
    { label: t('navHome'), path: '/', sectionId: 'home' },
    { label: t('navAbout'), path: '/', sectionId: 'about' },
    { label: t('navServices'), path: '/', sectionId: 'services' },
    { label: t('navProjects'), path: '/works' },
    { label: t('navContact'), path: '/', sectionId: 'contact' },
  ];

  const isTransparentInitially = currentView === 'home' && !isServicePage;
  const isOpaque = isScrolled || !isTransparentInitially;

  return (
    <>
      <header className={`fixed top-0 left-0 w-full z-40 transition-all duration-500 ${isOpaque ? 'bg-white/90 glass-header shadow-sm text-brand-dark py-2' : 'bg-transparent text-white py-4'} ${isHeaderVisible ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className="w-full max-w-screen-2xl mx-auto flex justify-between items-center px-6 sm:px-12 lg:px-16">
          <a href="/" onClick={(e) => handleNavClick(e, '/', 'home')} className="flex-shrink-0 transition-transform hover:scale-105 duration-300">
            <img 
              src="https://firebasestorage.googleapis.com/v0/b/aedificia-nobile.firebasestorage.app/o%2Frecursos%20web%2FAedificia%20Nobile%20logo.png?alt=media" 
              alt="Aedificia Nobile Logo" 
              className={`h-16 lg:h-20 transition-all duration-500 ${!isOpaque ? 'brightness-0 invert' : ''}`}
            />
          </a>
          
          <div className="hidden md:flex items-center space-x-10">
            <nav className="flex items-center space-x-8">
              {navLinks.map(link => (
                <a 
                  key={link.label} 
                  href={link.path} 
                  onClick={(e) => handleNavClick(e, link.path, link.sectionId)} 
                  className="font-medium text-sm tracking-widest uppercase hover:text-brand-gold transition-colors relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-gold transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </nav>

            <div className="flex items-center space-x-3 border-l border-gray-300 pl-6 ml-6">
              <button onClick={() => setLanguage('en')} className={`transition-transform hover:scale-110 ${language === 'en' ? 'opacity-100 ring-1 ring-brand-gold ring-offset-2 rounded-sm' : 'opacity-40 hover:opacity-100'}`}>
                <UKFlag />
              </button>
              <button onClick={() => setLanguage('es')} className={`transition-transform hover:scale-110 ${language === 'es' ? 'opacity-100 ring-1 ring-brand-gold ring-offset-2 rounded-sm' : 'opacity-40 hover:opacity-100'}`}>
                <SpainFlag />
              </button>
            </div>
          </div>
          
          <div className="md:hidden">
            <button onClick={() => setIsMobileMenuOpen(true)} aria-label="Open menu" className="p-2 transition-transform active:scale-90">
              <MenuIcon />
            </button>
          </div>
        </div>
      </header>
      
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-brand-dark/98 z-50 flex flex-col items-center justify-center animate-fade-in text-white">
          <button onClick={() => setIsMobileMenuOpen(false)} className="absolute top-8 right-8 p-2 hover:rotate-90 transition-transform">
            <CloseIcon />
          </button>
          <nav className="flex flex-col items-center space-y-10 mb-12">
            {navLinks.map((link, idx) => (
              <a 
                key={link.label} 
                href={link.path} 
                onClick={(e) => handleNavClick(e, link.path, link.sectionId)} 
                className="font-bold text-3xl tracking-widest uppercase hover:text-brand-gold transition-all transform hover:scale-110"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center space-x-8">
            <button onClick={() => { setLanguage('en'); setIsMobileMenuOpen(false); }} className="flex flex-col items-center gap-2">
              <UKFlag /> <span className="text-xs tracking-widest uppercase opacity-60">English</span>
            </button>
            <button onClick={() => { setLanguage('es'); setIsMobileMenuOpen(false); }} className="flex flex-col items-center gap-2">
              <SpainFlag /> <span className="text-xs tracking-widest uppercase opacity-60">Español</span>
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
