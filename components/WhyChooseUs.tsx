import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const WhyChooseUs: React.FC = () => {
  const { t } = useLanguage();
  
  const reasons = [
    {
      title: t('reason1Title'),
      description: t('reason1Desc'),
    },
    {
      title: t('reason2Title'),
      description: t('reason2Desc'),
    },
    {
      title: t('reason3Title'),
      description: t('reason3Desc'),
    },
  ];

  return (
    <section id="about" className="relative bg-brand-taupe py-20 lg:py-32 text-center">
       <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0px]" style={{ transform: 'translateY(-99%)' }}>
        <svg className="relative block w-[calc(100%+1.3px)] h-[100px] sm:h-[150px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M600,112.77C268.63,112.77,0,65.52,0,7.23V0h1200v7.23C1200,65.52,931.37,112.77,600,112.77Z" className="fill-current text-brand-light"></path>
        </svg>
      </div>

      <div className="container mx-auto px-4 sm:px-8 lg:px-16 relative z-1">
        <h2 className="text-4xl font-bold mb-16">{t('whyChooseUsTitle')}</h2>
        <div className="grid md:grid-cols-3 gap-12">
          {reasons.map((reason) => (
            <div key={reason.title}>
              <h3 className="text-xl font-semibold text-brand-gold mb-4">{reason.title}</h3>
              <p className="text-gray-700 leading-relaxed">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;