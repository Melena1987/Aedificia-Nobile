
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import ScrollRevealSection from './ScrollRevealSection';
import { projects } from '../projectsData';

interface ProjectsPageProps {
  onProjectSelect: (id: string) => void;
}

const ProjectsPage: React.FC<ProjectsPageProps> = ({ onProjectSelect }) => {
  const { t } = useLanguage();

  return (
    <div className="animate-fade-in bg-brand-light">
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24 text-center">
        <div className="container mx-auto px-4 sm:px-8 lg:px-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-brand-dark mb-4">{t('navProjects')}</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">{t('projectsSubtitle')}</p>
        </div>
      </section>

      <section className="pb-16 lg:pb-24">
        <div className="container mx-auto px-4 sm:px-8 lg:px-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ScrollRevealSection 
                key={project.id} 
                animation="fade-in-up" 
                delay={`delay-${(index % 3) * 150}`}
              >
                <div 
                  className="relative group overflow-hidden cursor-pointer shadow-lg rounded-lg"
                  onClick={() => onProjectSelect(project.id)}
                  role="button"
                  tabIndex={0}
                  onKeyPress={(e) => e.key === 'Enter' && onProjectSelect(project.id)}
                  aria-label={`View project ${t(project.titleKey)}`}
                >
                  <img 
                    src={project.images[0]} 
                    alt={t(project.titleKey)} 
                    className="w-full h-96 object-cover transform group-hover:scale-105 transition-transform duration-500" 
                    loading="lazy" 
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="text-white text-2xl font-semibold text-center px-4">{t(project.titleKey)}</h3>
                  </div>
                </div>
              </ScrollRevealSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectsPage;
