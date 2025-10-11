import { TranslationKey } from './contexts/LanguageContext';

export interface Service {
  id: string;
  titleKey: TranslationKey;
  descriptionKey: TranslationKey;
  image: string;
}

export const services: Service[] = [
  { 
    id: 'consulting',
    titleKey: 'serviceConsulting',
    descriptionKey: 'serviceConsultingDesc',
    image: 'https://firebasestorage.googleapis.com/v0/b/aedificia-nobile.firebasestorage.app/o/recursos%20web%2Fservicios%2FComplete%20Renovation%20Projects.jpg?alt=media' 
  },
  { 
    id: 'bath-kitchen',
    titleKey: 'serviceBathKitchen',
    descriptionKey: 'serviceBathKitchenDesc',
    image: 'https://firebasestorage.googleapis.com/v0/b/aedificia-nobile.firebasestorage.app/o/recursos%20web%2Fservicios%2Fcocinas.jpg?alt=media'
  },
  { 
    id: 'redistribution',
    titleKey: 'serviceRedistribution',
    descriptionKey: 'serviceRedistributionDesc',
    image: 'https://firebasestorage.googleapis.com/v0/b/aedificia-nobile.firebasestorage.app/o/recursos%20web%2Fservicios%2FSpace%20Redistribution.jpg?alt=media'
  },
  { 
    id: 'custom-design',
    titleKey: 'serviceCustomDesign',
    descriptionKey: 'serviceCustomDesignDesc',
    image: 'https://firebasestorage.googleapis.com/v0/b/aedificia-nobile.firebasestorage.app/o/recursos%20web%2Fservicios%2Fterraza%20dise%C3%B1o.jpg?alt=media'
  },
  { 
    id: 'painting',
    titleKey: 'servicePainting',
    descriptionKey: 'servicePaintingDesc',
    image: 'https://firebasestorage.googleapis.com/v0/b/aedificia-nobile.firebasestorage.app/o/recursos%20web%2Fservicios%2FPainting%20and%20Finishes.jpg?alt=media'
  },
  { 
    id: 'installations',
    titleKey: 'serviceInstallations',
    descriptionKey: 'serviceInstallationsDesc',
    image: 'https://firebasestorage.googleapis.com/v0/b/aedificia-nobile.firebasestorage.app/o/recursos%20web%2Fservicios%2Fba%C3%B1os.jpg?alt=media'
  },
  { 
    id: 'windows',
    titleKey: 'serviceWindows',
    descriptionKey: 'serviceWindowsDesc',
    image: 'https://firebasestorage.googleapis.com/v0/b/aedificia-nobile.firebasestorage.app/o/recursos%20web%2Fservicios%2Fpergolas.jpg?alt=media'
  },
];
