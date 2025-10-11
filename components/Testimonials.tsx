import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const QuoteIcon: React.FC<{className?: string}> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M6 17h3l2-4V7H5v6h3l-2 4zm8 0h3l2-4V7h-6v6h3l-2 4z"/>
  </svg>
);

interface TestimonialsProps {
  onNavigateToProjects: () => void;
}

const Testimonials: React.FC<TestimonialsProps> = ({ onNavigateToProjects }) => {
  const { t } = useLanguage();

  const testimonials = [
    {
      quote: t('testimonial1Quote'),
      name: t('testimonial1Name'),
    },
    {
      quote: t('testimonial2Quote'),
      name: t('testimonial2Name'),
    },
    {
      quote: t('testimonial3Quote'),
      name: t('testimonial3Name'),
    },
  ];

  return (
    <section 
      id="projects"
      className="bg-cover bg-center bg-fixed py-20 lg:py-32"
      style={{ backgroundImage: "url('https://firebasestorage.googleapis.com/v0/b/aedificia-nobile.firebasestorage.app/o/recursos%20web%2Ffondo%20clientes%20satisfechos.jpg?alt=media')" }}
    >
      <div className="absolute inset-0 bg-white bg-opacity-80"></div>
      <div className="container mx-auto px-4 sm:px-8 lg:px-16 relative z-1 text-center">
        <h2 className="text-4xl font-bold mb-16 text-brand-dark">{t('testimonialsTitle')}</h2>
        <div className="grid md:grid-cols-3 gap-12">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="flex flex-col items-center">
              <QuoteIcon className="w-12 h-12 text-gray-400 mb-4" />
              <p className="text-gray-600 italic mb-6">"{testimonial.quote}"</p>
              <p className="font-bold text-brand-gold">{testimonial.name}</p>
            </div>
          ))}
        </div>
        <button onClick={onNavigateToProjects} className="mt-16 inline-block bg-brand-dark text-white font-semibold py-3 px-10 hover:bg-gray-700 transition-colors duration-300">
          {t('seeProjectsButton')}
        </button>
      </div>
    </section>
  );
};

export default Testimonials;