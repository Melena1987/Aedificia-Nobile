
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const HomeIcon = () => (
  <svg className="w-12 h-12 mb-6 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
  </svg>
);

const QualityIcon = () => (
  <svg className="w-12 h-12 mb-6 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-7.714 2.143L11 21l-2.286-6.857L1 12l7.714-2.143L11 3z" />
  </svg>
);

const ExpertIcon = () => (
  <svg className="w-12 h-12 mb-6 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>
);

const WhyChooseUs: React.FC = () => {
  const { t } = useLanguage();
  
  const reasons = [
    {
      title: t('reason1Title'),
      description: t('reason1Desc'),
      icon: <HomeIcon />,
    },
    {
      title: t('reason2Title'),
      description: t('reason2Desc'),
      icon: <QualityIcon />,
    },
    {
      title: t('reason3Title'),
      description: t('reason3Desc'),
      icon: <ExpertIcon />,
    },
  ];

  return (
    <section id="about" className="relative bg-brand-taupe py-24 lg:py-36 text-center overflow-hidden">
      {/* Curved Divider */}
       <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0px]" style={{ transform: 'translateY(-99%)' }}>
        <svg className="relative block w-[calc(100%+1.3px)] h-[80px] sm:h-[120px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M600,112.77C268.63,112.77,0,65.52,0,7.23V0h1200v7.23C1200,65.52,931.37,112.77,600,112.77Z" className="fill-current text-brand-light"></path>
        </svg>
      </div>

      <div className="container mx-auto px-6 sm:px-12 lg:px-24 relative z-1">
        <div className="mb-20">
          <span className="text-brand-gold uppercase tracking-[0.4em] text-sm font-semibold mb-4 block">About Aedificia</span>
          <h2 className="text-4xl md:text-5xl font-bold text-brand-dark">{t('whyChooseUsTitle')}</h2>
          <div className="w-24 h-1 bg-brand-gold mx-auto mt-8 opacity-30"></div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-16 lg:gap-24">
          {reasons.map((reason, idx) => (
            <div key={idx} className="flex flex-col items-center group">
              <div className="transform transition-transform duration-500 group-hover:scale-110">
                {reason.icon}
              </div>
              <h3 className="text-xl font-bold text-brand-dark mb-4 tracking-wide">{reason.title}</h3>
              <p className="text-gray-600 leading-relaxed max-w-sm">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
