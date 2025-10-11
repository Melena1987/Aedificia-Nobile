import { TranslationKey } from './contexts/LanguageContext';

export interface Project {
  id: string;
  titleKey: TranslationKey;
  images: string[];
}

export const projects: Project[] = [
    { 
      id: 'playa-alicate', 
      titleKey: 'projectPlayaAlicate', 
      images: [
        'https://i.imgur.com/rS1Q24A.jpeg',
        'https://i.imgur.com/835ySKt.jpeg',
        'https://i.imgur.com/dAmrU7Y.jpeg',
        'https://i.imgur.com/K073a4m.jpeg',
      ]
    },
    { 
      id: 'apartamento-morera', 
      titleKey: 'projectApartamentoMorera', 
      images: [
        'https://i.imgur.com/dAmrU7Y.jpeg',
        'https://i.imgur.com/rS1Q24A.jpeg',
        'https://i.imgur.com/gK9q0Ff.jpeg',
      ]
    },
    { 
      id: 'bahia-alcantara', 
      titleKey: 'projectBahiaAlcantara', 
      images: [
        'https://i.imgur.com/gK9q0Ff.jpeg',
        'https://i.imgur.com/N8a1g4s.jpeg',
        'https://i.imgur.com/835ySKt.jpeg',
        'https://i.imgur.com/c6w3d3u.jpeg',
      ] 
    },
    { 
      id: 'bahia-marbella', 
      titleKey: 'projectBahiaMarbella', 
      images: [
        'https://i.imgur.com/K073a4m.jpeg',
        'https://i.imgur.com/eB3sS62.jpeg',
        'https://i.imgur.com/iC5e3gT.jpeg',
        'https://i.imgur.com/JQL1kYh.jpeg',
      ] 
    },
    { 
      id: 'el-higueron', 
      titleKey: 'projectElHigueron', 
      images: [
        'https://i.imgur.com/N8a1g4s.jpeg',
        'https://i.imgur.com/yGpdG21.jpeg',
      ] 
    },
    { 
      id: 'marbella-country-club', 
      titleKey: 'projectMarbellaCountryClub', 
      images: [
        'https://i.imgur.com/835ySKt.jpeg',
        'https://i.imgur.com/rS1Q24A.jpeg',
        'https://i.imgur.com/dAmrU7Y.jpeg',
        'https://i.imgur.com/gK9q0Ff.jpeg',
        'https://i.imgur.com/K073a4m.jpeg',
      ] 
    },
    { 
      id: 'piedra-blanca', 
      titleKey: 'projectPiedraBlanca', 
      images: [
        'https://i.imgur.com/c6w3d3u.jpeg',
        'https://i.imgur.com/N8a1g4s.jpeg',
      ] 
    },
    { 
      id: 'piscina-la-resina', 
      titleKey: 'projectPiscinaLaResina', 
      images: [
        'https://i.imgur.com/yGpdG21.jpeg',
        'https://i.imgur.com/eB3sS62.jpeg',
        'https://i.imgur.com/iC5e3gT.jpeg',
      ] 
    },
    { 
      id: 'torre-real', 
      titleKey: 'projectTorreReal', 
      images: [
        'https://i.imgur.com/eB3sS62.jpeg',
        'https://i.imgur.com/iC5e3gT.jpeg',
        'https://i.imgur.com/JQL1kYh.jpeg',
        'https://i.imgur.com/dAmrU7Y.jpeg',
        'https://i.imgur.com/K073a4m.jpeg',
        'https://i.imgur.com/rS1Q24A.jpeg',
        'https://i.imgur.com/gK9q0Ff.jpeg',
      ] 
    },
];
