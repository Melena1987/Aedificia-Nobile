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
    image: 'https://picsum.photos/seed/consulting/800/600' 
  },
  { 
    id: 'bath-kitchen',
    titleKey: 'serviceBathKitchen',
    descriptionKey: 'serviceBathKitchenDesc',
    image: 'https://picsum.photos/seed/kitchenReno/800/600'
  },
  { 
    id: 'redistribution',
    titleKey: 'serviceRedistribution',
    descriptionKey: 'serviceRedistributionDesc',
    image: 'https://picsum.photos/seed/bedroom/800/600'
  },
  { 
    id: 'custom-design',
    titleKey: 'serviceCustomDesign',
    descriptionKey: 'serviceCustomDesignDesc',
    image: 'https://picsum.photos/seed/outdoorkitchen/800/600'
  },
  { 
    id: 'painting',
    titleKey: 'servicePainting',
    descriptionKey: 'servicePaintingDesc',
    image: 'https://picsum.photos/seed/painting/800/600'
  },
  { 
    id: 'installations',
    titleKey: 'serviceInstallations',
    descriptionKey: 'serviceInstallationsDesc',
    image: 'https://picsum.photos/seed/bathroomInstall/800/600'
  },
  { 
    id: 'windows',
    titleKey: 'serviceWindows',
    descriptionKey: 'serviceWindowsDesc',
    image: 'https://picsum.photos/seed/windows/800/600'
  },
];
