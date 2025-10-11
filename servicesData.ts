import { TranslationKey } from './contexts/LanguageContext';

export interface Service {
  id: string;
  titleKey: TranslationKey;
  descriptionKey: TranslationKey;
  image: string;
}

export const services: Service[] = [
  { 
    id: 'complete-renovations',
    titleKey: 'serviceCompleteRenovations',
    descriptionKey: 'serviceCompleteRenovationsDesc',
    image: 'https://firebasestorage.googleapis.com/v0/b/aedificia-nobile.firebasestorage.app/o/recursos%20web%2Fservicios%2FComplete%20Renovation%20Projects.jpg?alt=media' 
  },
  { 
    id: 'kitchen-renovations',
    titleKey: 'serviceKitchenRenovations',
    descriptionKey: 'serviceKitchenRenovationsDesc',
    image: 'https://firebasestorage.googleapis.com/v0/b/aedificia-nobile.firebasestorage.app/o/recursos%20web%2Fservicios%2Fcocinas.jpg?alt=media'
  },
  { 
    id: 'space-redistribution',
    titleKey: 'serviceSpaceRedistribution',
    descriptionKey: 'serviceSpaceRedistributionDesc',
    image: 'https://firebasestorage.googleapis.com/v0/b/aedificia-nobile.firebasestorage.app/o/recursos%20web%2Fservicios%2FSpace%20Redistribution.jpg?alt=media'
  },
  { 
    id: 'custom-terrace-design',
    titleKey: 'serviceCustomTerraceDesign',
    descriptionKey: 'serviceCustomTerraceDesignDesc',
    image: 'https://firebasestorage.googleapis.com/v0/b/aedificia-nobile.firebasestorage.app/o/recursos%20web%2Fservicios%2Fterraza%20dise%C3%B1o.jpg?alt=media'
  },
  { 
    id: 'painting-finishes',
    titleKey: 'servicePaintingFinishes',
    descriptionKey: 'servicePaintingFinishesDesc',
    image: 'https://firebasestorage.googleapis.com/v0/b/aedificia-nobile.firebasestorage.app/o/recursos%20web%2Fservicios%2FPainting%20and%20Finishes.jpg?alt=media'
  },
  { 
    id: 'bathroom-renovations',
    titleKey: 'serviceBathroomRenovations',
    descriptionKey: 'serviceBathroomRenovationsDesc',
    image: 'https://firebasestorage.googleapis.com/v0/b/aedificia-nobile.firebasestorage.app/o/recursos%20web%2Fservicios%2Fba%C3%B1os.jpg?alt=media'
  },
  { 
    id: 'roofs-pergolas',
    titleKey: 'serviceRoofsPergolas',
    descriptionKey: 'serviceRoofsPergolasDesc',
    image: 'https://firebasestorage.googleapis.com/v0/b/aedificia-nobile.firebasestorage.app/o/recursos%20web%2Fservicios%2Fpergolas.jpg?alt=media'
  },
];