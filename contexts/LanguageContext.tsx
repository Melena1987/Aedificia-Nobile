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
    serviceCompleteRenovations: 'Complete Renovation Projects',
    serviceCompleteRenovationsDesc: 'We handle your renovation from start to finish. From planning and design to construction and final touches, we deliver comprehensive projects that transform your entire home.',
    serviceKitchenRenovations: 'Kitchen Renovations',
    serviceKitchenRenovationsDesc: 'We create modern, functional, and personalized kitchens. We optimize space and select the best materials to build the kitchen of your dreams.',
    serviceSpaceRedistribution: 'Space Redistribution',
    serviceSpaceRedistributionDesc: 'We optimize your home\'s layout to maximize space and functionality. We redesign interiors to create open, bright, and better-utilized environments.',
    serviceCustomTerraceDesign: 'Custom Terrace Design',
    serviceCustomTerraceDesignDesc: 'We transform your outdoor areas into functional and stylish living spaces. We design and build custom terraces, outdoor kitchens, and relaxation areas.',
    servicePaintingFinishes: 'Painting and Finishes',
    servicePaintingFinishesDesc: 'We renew your spaces with high-quality painting services and impeccable finishes. We use the best materials and techniques to ensure a durable and aesthetic result.',
    serviceBathroomRenovations: 'Bathroom Renovations',
    serviceBathroomRenovationsDesc: 'We design and renovate bathrooms to create relaxing and elegant spaces. We handle everything from plumbing and tiling to fixtures and lighting.',
    serviceRoofsPergolas: 'Roofs and Pergolas',
    serviceRoofsPergolasDesc: 'We build and repair roofs, and install elegant pergolas to enhance your outdoor spaces, providing both beauty and functionality.',
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
    projectPuenteRomano: 'Puente Romano',
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
    privacyPolicy: 'Privacy policy',

    // Cookie Banner
    cookieBannerText: 'We use cookies to enhance your browsing experience. By continuing to use our site, you agree to our use of cookies.',
    cookieAccept: 'Accept',

    // Privacy Policy
    privacyPolicyTitle: 'Privacy Policy',
    privacyPolicyLastUpdated: 'Last updated: August 1, 2025',
    privacyPolicyIntro: "Aedificia Nobile ('we', 'us', or 'our') is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.",
    privacyPolicyDataControllerTitle: 'Data Controller',
    privacyPolicyDataControllerText: 'The data controller responsible for your personal data is Aedificia Nobile. Contact details:',
    privacyPolicyDataControllerAddress: 'Address: San Pedro de Alcántara, Málaga, España',
    privacyPolicyDataControllerEmail: 'Email: aedificianobile@yahoo.com',
    privacyPolicyDataControllerPhone: 'Phone: +34610926670',
    privacyPolicyDataCollectionTitle: 'Information We Collect',
    privacyPolicyDataCollectionText: 'We collect information that you voluntarily provide to us through the contact form on our website. This personal data includes: Name and Surname, Email Address, Phone Number, Address, Subject, and the content of your message.',
    privacyPolicyDataUsageTitle: 'How We Use Your Information',
    privacyPolicyDataUsageText: 'We use the information collected via our contact form solely for the following purposes:',
    privacyPolicyDataUsagePoint1: 'To respond to your inquiries and provide you with the information you have requested.',
    privacyPolicyDataUsagePoint2: 'To prepare and send quotes for our services.',
    privacyPolicyDataUsagePoint3: 'To communicate with you regarding your project or potential project.',
    privacyPolicyDataSharingTitle: 'Disclosure of Your Information',
    privacyPolicyDataSharingText: 'We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties. Your data is used exclusively for communication between you and Aedificia Nobile.',
    privacyPolicyUserRightsTitle: 'Your Data Protection Rights',
    privacyPolicyUserRightsText: 'You have the right to access, rectify, or erase your personal data, as well as other rights recognized by law. You can exercise these rights by sending a written request to our email address.',
    privacyPolicyCookiesTitle: 'Cookies Policy',
    privacyPolicyCookiesText: 'Our website uses essential cookies to improve your browsing experience and ensure the basic functionalities of the site. A cookie is a small text file stored in your browser. By using our website, you consent to the use of these cookies.',
    privacyPolicyContactTitle: 'Contact Us',
    privacyPolicyContactText: 'If you have any questions or comments about this Privacy Policy, please contact us at:'
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
    serviceCompleteRenovations: 'Proyectos de Reforma Integral',
    serviceCompleteRenovationsDesc: 'Nos encargamos de su reforma de principio a fin. Desde la planificación y el diseño hasta la construcción y los toques finales, entregamos proyectos integrales que transforman su hogar por completo.',
    serviceKitchenRenovations: 'Reformas de Cocinas',
    serviceKitchenRenovationsDesc: 'Creamos cocinas modernas, funcionales y personalizadas. Optimizamos el espacio y seleccionamos los mejores materiales para construir la cocina de sus sueños.',
    serviceSpaceRedistribution: 'Redistribución de Espacios',
    serviceSpaceRedistributionDesc: 'Optimizamos la distribución de tu vivienda para maximizar el espacio y la funcionalidad. Rediseñamos interiores para crear ambientes abiertos, luminosos y mejor aprovechados.',
    serviceCustomTerraceDesign: 'Diseño de Terrazas a Medida',
    serviceCustomTerraceDesignDesc: 'Transformamos sus áreas exteriores en espacios funcionales y con estilo. Diseñamos y construimos terrazas a medida, cocinas exteriores y zonas de relajación.',
    servicePaintingFinishes: 'Pintura y Acabados',
    servicePaintingFinishesDesc: 'Renovamos tus espacios con servicios de pintura de alta calidad y acabados impecables. Utilizamos los mejores materiales y técnicas para asegurar un resultado duradero y estético.',
    serviceBathroomRenovations: 'Reformas de Baños',
    serviceBathroomRenovationsDesc: 'Diseñamos y reformamos baños para crear espacios relajantes y elegantes. Nos encargamos de todo, desde la fontanería y el alicatado hasta los sanitarios y la iluminación.',
    serviceRoofsPergolas: 'Techos y Pérgolas',
    serviceRoofsPergolasDesc: 'Construimos y reparamos tejados, e instalamos pérgolas elegantes para mejorar sus espacios exteriores, aportando belleza y funcionalidad.',
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
    projectMarbellaCountryClub: 'Marbella Country Club',
    projectPiedraBlanca: 'Piedra Blanca',
    projectPiscinaLaResina: 'Piscina La Resina',
    projectPuenteRomano: 'Puente Romano',
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
    privacyPolicy: 'Política de privacidad',

    // Cookie Banner
    cookieBannerText: 'Utilizamos cookies para mejorar su experiencia de navegación. Al continuar utilizando nuestro sitio, acepta nuestro uso de cookies.',
    cookieAccept: 'Aceptar',

    // Privacy Policy
    privacyPolicyTitle: 'Política de Privacidad',
    privacyPolicyLastUpdated: 'Última actualización: 1 de agosto de 2025',
    privacyPolicyIntro: "Aedificia Nobile ('nosotros' o 'nuestro') se compromete a proteger su privacidad. Esta Política de Privacidad explica cómo recopilamos, usamos, divulgamos y protegemos su información cuando visita nuestro sitio web.",
    privacyPolicyDataControllerTitle: 'Responsable del Tratamiento de Datos',
    privacyPolicyDataControllerText: 'El responsable del tratamiento de sus datos personales es Aedificia Nobile. Datos de contacto:',
    privacyPolicyDataControllerAddress: 'Dirección: San Pedro de Alcántara, Málaga, España',
    privacyPolicyDataControllerEmail: 'Email: aedificianobile@yahoo.com',
    privacyPolicyDataControllerPhone: 'Teléfono: +34610926670',
    privacyPolicyDataCollectionTitle: 'Información que Recopilamos',
    privacyPolicyDataCollectionText: 'Recopilamos la información que usted nos proporciona voluntariamente a través del formulario de contacto en nuestro sitio web. Estos datos personales incluyen: Nombre y Apellido, Dirección de correo electrónico, Número de teléfono, Dirección, Asunto y el contenido de su mensaje.',
    privacyPolicyDataUsageTitle: 'Cómo Usamos Su Información',
    privacyPolicyDataUsageText: 'Utilizamos la información recopilada a través de nuestro formulario de contacto únicamente para los siguientes fines:',
    privacyPolicyDataUsagePoint1: 'Para responder a sus consultas y proporcionarle la información que ha solicitado.',
    privacyPolicyDataUsagePoint2: 'Para preparar y enviar presupuestos de nuestros servicios.',
    privacyPolicyDataUsagePoint3: 'Para comunicarnos con usted en relación con su proyecto o posible proyecto.',
    privacyPolicyDataSharingTitle: 'Divulgación de Su Información',
    privacyPolicyDataSharingText: 'No vendemos, intercambiamos ni transferimos de ningún otro modo su información de identificación personal a terceros. Sus datos se utilizan exclusivamente para la comunicación entre usted y Aedificia Nobile.',
    privacyPolicyUserRightsTitle: 'Sus Derechos de Protección de Datos',
    privacyPolicyUserRightsText: 'Usted tiene derecho a acceder, rectificar o suprimir sus datos personales, así como otros derechos reconocidos por la ley. Puede ejercer estos derechos enviando una solicitud por escrito a nuestra dirección de correo electrónico.',
    privacyPolicyCookiesTitle: 'Política de Cookies',
    privacyPolicyCookiesText: 'Nuestro sitio web utiliza cookies esenciales para mejorar su experiencia de navegación y garantizar las funcionalidades básicas del sitio. Una cookie es un pequeño archivo de texto que se almacena en su navegador. Al utilizar nuestro sitio web, usted acepta el uso de estas cookies.',
    privacyPolicyContactTitle: 'Contacto',
    privacyPolicyContactText: 'Si tiene alguna pregunta o comentario sobre esta Política de Privacidad, por favor contáctenos en:'
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