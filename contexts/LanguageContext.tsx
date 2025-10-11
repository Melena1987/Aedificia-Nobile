import React, { createContext, useState, useContext, ReactNode } from 'react';

// Define translations
const translations = {
  en: {
    // Header
    navHome: 'Home',
    navAbout: 'About us',
    navServices: 'Services',
    navProjects: 'Finished projects',
    navContact: 'Contact us',
    backButton: 'Back',

    // Hero
    heroTitle: 'Complete reform and renovation projects',
    heroButton: 'Request a quote',

    // Transform Section
    transformTitle: 'We transform your spaces into the home of your dreams.',
    transformText: 'At Aedificia Nobile, we specialize in complete and personalized renovations to create functional and aesthetic spaces that adapt to you. From bathrooms and kitchens to redistributions and design, we bring your ideas to reality with the utmost quality and care.',
    ourServicesButton: 'Our services',

    // Why Choose Us
    whyChooseUsTitle: 'Why choose us?',
    reason1Title: 'Free In-Home Consultations',
    reason1Desc: 'We visit you to evaluate your project at no cost. Explore your renovation options from the comfort of your home.',
    reason2Title: 'Recognized Quality Service',
    reason2Desc: 'We guarantee exceptional results backed by customer satisfaction and years of experience in the industry.',
    reason3Title: 'Licensed and Insured Professionals',
    reason3Desc: 'Our team consists of certified experts, ensuring safe and high-quality work in every detail.',

    // Services Section
    servicesTitle: 'Our services',
    serviceConsulting: 'Consulting and preliminary design',
    serviceConsultingDesc: 'We offer expert advice and preliminary design to ensure your project starts on a solid foundation. We work with you to define objectives, budgets, and a clear action plan.',
    serviceBathKitchen: 'Bathroom and kitchen renovations',
    serviceBathKitchenDesc: 'We transform two of the most important spaces in your home. We create functional, modern, and personalized kitchens and bathrooms that adapt to your lifestyle and needs.',
    serviceRedistribution: 'Space redistribution',
    serviceRedistributionDesc: 'We optimize your home\'s layout to maximize space and functionality. We redesign interiors to create open, bright, and better-utilized environments.',
    serviceCustomDesign: 'Custom design',
    serviceCustomDesignDesc: 'We develop unique and exclusive design projects that reflect your personality and tastes. From material selection to decoration, we take care of every detail to create your ideal space.',
    servicePainting: 'Painting and Finishes',
    servicePaintingDesc: 'We renew your spaces with high-quality painting services and impeccable finishes. We use the best materials and techniques to ensure a durable and aesthetic result.',
    serviceInstallations: 'Electrical and plumbing installations',
    serviceInstallationsDesc: 'We carry out complete and safe installations of electrical and plumbing systems, complying with all current regulations. We guarantee efficient and durable systems for your home.',
    serviceWindows: 'Window and door replacement',
    serviceWindowsDesc: 'We improve the energy efficiency and aesthetics of your home by replacing windows and doors. We offer a wide variety of materials and styles to suit your preferences and budget.',
    seeAllServicesButton: 'See all services',

    // Testimonials
    testimonialsTitle: 'Satisfied Clients',
    testimonial1Quote: 'Thanks to Aedificia Nobile, they transformed my home. Their team was professional, punctual, and the results exceeded all my expectations. Highly recommended!',
    testimonial1Name: 'Juan Pérez',
    testimonial2Quote: "I couldn't be happier with my new kitchen. From the design to the finishes, everything was perfect. Aedificia Nobile brought my dream to life.",
    testimonial2Name: 'María Gómez',
    testimonial3Quote: 'My bathroom renovation turned out spectacular. Flawless work, completed on time and attention to every detail. I will definitely hire them again.',
    testimonial3Name: 'Carlos Rodríguez',
    seeProjectsButton: 'See Our Completed Projects',

    // Projects Page
    projectsSubtitle: 'Below we invite you to see some of our recently completed projects.',
    projectPlayaAlicate: 'Alicate Beach',
    projectApartamentoMorera: 'Morera Apartment',
    projectBahiaAlcantara: 'Alcántara Bay',
    projectBahiaMarbella: 'Marbella Bay',
    projectElHigueron: 'El Higuerón',
    projectMarbellaCountryClub: 'Marbella Country Club',
    projectPiedraBlanca: 'Piedra Blanca',
    projectPiscinaLaResina: 'La Resina Pool',
    projectTorreReal: 'Torre Real',

    // Contact Section
    contactTitle: 'Tell Us About Your Project',
    contactSubtitle: 'Fill out the form or call us for an in-home consultation.',
    serviceAreas: 'Service Areas:',
    formName: 'Name *',
    formSurname: 'Surname *',
    formEmail: 'Email *',
    formPhone: 'Phone number',
    formAddress: 'Address',
    formSubject: 'Subject *',
    formMessage: 'Your message *',
    sendButton: 'Send',

    // Footer
    contactUsButton: 'Contact us',
    privacyPolicy: 'Privacy policy'
  },
  es: {
    // Header
    navHome: 'Inicio',
    navAbout: 'Sobre nosotros',
    navServices: 'Servicios',
    navProjects: 'Proyectos terminados',
    navContact: 'Contáctanos',
    backButton: 'Atrás',

    // Hero
    heroTitle: 'Proyectos completos de reformas y renovaciones',
    heroButton: 'Solicitar presupuesto',
    
    // Transform Section
    transformTitle: 'Transformamos tus espacios en el hogar de tus sueños.',
    transformText: 'En Aedificia Nobile, nos especializamos en reformas completas y personalizadas para crear espacios funcionales y estéticos que se adapten a ti. Desde baños y cocinas hasta redistribuciones y diseño, llevamos tus ideas a la realidad con la máxima calidad y cuidado.',
    ourServicesButton: 'Nuestros servicios',

    // Why Choose Us
    whyChooseUsTitle: '¿Por qué elegirnos?',
    reason1Title: 'Consultas Gratuitas a Domicilio',
    reason1Desc: 'Te visitamos para evaluar tu proyecto sin coste alguno. Explora tus opciones de renovación desde la comodidad de tu hogar.',
    reason2Title: 'Servicio de Calidad Reconocida',
    reason2Desc: 'Garantizamos resultados excepcionales respaldados por la satisfacción de nuestros clientes y años de experiencia en el sector.',
    reason3Title: 'Profesionales Licenciados y Asegurados',
    reason3Desc: 'Nuestro equipo está formado por expertos certificados, asegurando un trabajo seguro y de alta calidad en cada detalle.',

    // Services Section
    servicesTitle: 'Nuestros servicios',
    serviceConsulting: 'Consultoría y diseño previo',
    serviceConsultingDesc: 'Ofrecemos asesoramiento experto y diseño preliminar para que tu proyecto comience con una base sólida. Trabajamos contigo para definir objetivos, presupuestos y un plan de acción claro.',
    serviceBathKitchen: 'Reformas de baños y cocinas',
    serviceBathKitchenDesc: 'Transformamos dos de los espacios más importantes de tu hogar. Creamos cocinas y baños funcionales, modernos y personalizados que se adaptan a tu estilo de vida y necesidades.',
    serviceRedistribution: 'Redistribución de espacios',
    serviceRedistributionDesc: 'Optimizamos la distribución de tu vivienda para maximizar el espacio y la funcionalidad. Rediseñamos interiores para crear ambientes abiertos, luminosos y mejor aprovechados.',
    serviceCustomDesign: 'Diseño personalizado',
    serviceCustomDesignDesc: 'Desarrollamos proyectos de diseño únicos y exclusivos que reflejan tu personalidad y gustos. Desde la elección de materiales hasta la decoración, cuidamos cada detalle para crear tu espacio ideal.',
    servicePainting: 'Pintura y Acabados',
    servicePaintingDesc: 'Renovamos tus espacios con servicios de pintura de alta calidad y acabados impecables. Utilizamos los mejores materiales y técnicas para asegurar un resultado duradero y estético.',
    serviceInstallations: 'Instalaciones eléctricas y de fontanería',
    serviceInstallationsDesc: 'Realizamos instalaciones completas y seguras de sistemas eléctricos y de fontanería, cumpliendo con todas las normativas vigentes. Garantizamos sistemas eficientes y duraderos para tu hogar.',
    serviceWindows: 'Cambio de ventanas y puertas',
    serviceWindowsDesc: 'Mejoramos la eficiencia energética y la estética de tu hogar con el cambio de ventanas y puertas. Ofrecemos una amplia variedad de materiales y estilos para que se ajusten a tus preferencias y presupuesto.',
    seeAllServicesButton: 'Ver todos los servicios',
    
    // Testimonials
    testimonialsTitle: 'Clientes Satisfechos',
    testimonial1Quote: 'Gracias a Aedificia Nobile, transformaron mi hogar. Su equipo fue profesional, puntual y los resultados superaron todas mis expectativas. ¡Muy recomendados!',
    testimonial1Name: 'Juan Pérez',
    testimonial2Quote: 'No podría estar más feliz con mi nueva cocina. Desde el diseño hasta los acabados, todo fue perfecto. Aedificia Nobile hizo mi sueño realidad.',
    testimonial2Name: 'María Gómez',
    testimonial3Quote: 'La renovación de mi baño quedó espectacular. Un trabajo impecable, cumpliendo los plazos y con atención a cada detalle. Sin duda, volveré a contratarlos.',
    testimonial3Name: 'Carlos Rodríguez',
    seeProjectsButton: 'Ver Nuestros Proyectos Terminados',

    // Projects Page
    projectsSubtitle: 'A continuación te invitamos a ver algunos proyectos realizados recientemente.',
    projectPlayaAlicate: 'Playa Alicate',
    projectApartamentoMorera: 'Apartamento Morera',
    projectBahiaAlcantara: 'Bahía Alcántara',
    projectBahiaMarbella: 'Bahía Marbella',
    projectElHigueron: 'El Higuerón',
    projectMarbellaCountryClub: 'Club de campo de Marbella',
    projectPiedraBlanca: 'Piedra Blanca',
    projectPiscinaLaResina: 'Piscina La Resina',
    projectTorreReal: 'Torre Real',

    // Contact Section
    contactTitle: 'Cuéntanos sobre tu proyecto',
    contactSubtitle: 'Completa el formulario o llámanos para una consulta a domicilio.',
    serviceAreas: 'Zonas de Servicio:',
    formName: 'Nombre *',
    formSurname: 'Apellido *',
    formEmail: 'Email *',
    formPhone: 'Número de teléfono',
    formAddress: 'Dirección',
    formSubject: 'Asunto *',
    formMessage: 'Tu mensaje *',
    sendButton: 'Enviar',

    // Footer
    contactUsButton: 'Contáctanos',
    privacyPolicy: 'Política de privacidad'
  }
};

type Language = 'en' | 'es';
export type TranslationKey = keyof typeof translations.en;

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: TranslationKey) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('es');

  const t = (key: TranslationKey): string => {
    return translations[language][key] || translations.en[key];
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};