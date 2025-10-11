import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Project } from '../projectsData';

interface ProjectDetailPageProps {
  project: Project;
  onBack: () => void;
}

const ArrowButton: React.FC<{ direction: 'left' | 'right'; onClick: () => void }> = ({ direction, onClick }) => {
  const icon = direction === 'left' ? (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
    </svg>
  ) : (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
    </svg>
  );

  return (
    <button
      onClick={onClick}
      className={`absolute top-1/2 -translate-y-1/2 ${direction === 'left' ? 'left-2' : 'right-2'} bg-black bg-opacity-30 text-white rounded-full p-2 hover:bg-opacity-50 transition-opacity z-10`}
      aria-label={direction === 'left' ? 'Previous image' : 'Next image'}
    >
      {icon}
    </button>
  );
};

const ProjectDetailPage: React.FC<ProjectDetailPageProps> = ({ project, onBack }) => {
  const { t } = useLanguage();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % project.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + project.images.length) % project.images.length);
  };

  return (
    <div className="animate-fade-in bg-brand-light pt-32 pb-16 lg:pt-40 lg:pb-24">
      <div className="container mx-auto px-4 sm:px-8 lg:px-16">
        <header className="flex items-center mb-8">
          <button onClick={onBack} className="text-gray-700 hover:text-brand-dark transition-colors flex items-center mr-8 text-lg">
            &lt; {t('backButton')}
          </button>
          <h1 className="text-3xl lg:text-4xl font-bold text-brand-dark">{t(project.titleKey)}</h1>
        </header>

        <main>
          <div className="relative mb-4 shadow-lg rounded-lg overflow-hidden">
            <img 
              src={project.images[currentImageIndex]} 
              alt={`${t(project.titleKey)} - image ${currentImageIndex + 1}`}
              className="w-full h-auto max-h-[70vh] object-contain bg-brand-taupe"
            />
            {project.images.length > 1 && (
              <>
                <ArrowButton direction="left" onClick={prevImage} />
                <ArrowButton direction="right" onClick={nextImage} />
              </>
            )}
          </div>
          
          {project.images.length > 1 && (
            <div className="flex space-x-2 p-2 overflow-x-auto">
              {project.images.map((image, index) => (
                <button 
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-24 h-24 flex-shrink-0 rounded-md overflow-hidden transition-all duration-200 ${currentImageIndex === index ? 'ring-2 ring-brand-gold ring-offset-2' : 'opacity-70 hover:opacity-100'}`}
                  aria-label={`View image ${index + 1}`}
                >
                  <img src={image} alt={`Thumbnail ${index + 1}`} className="w-full h-full object-cover"/>
                </button>
              ))}
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default ProjectDetailPage;