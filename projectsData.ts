import { TranslationKey } from './contexts/LanguageContext';

export interface Project {
  id: string;
  titleKey: TranslationKey;
  images: string[];
}

export const projects: Project[] = [
    { 
      id: 'puente-romano',
      titleKey: 'projectPuenteRomano',
      images: [
        'https://firebasestorage.googleapis.com/v0/b/aedificia-nobile.firebasestorage.app/o/Trabajos%20terminados%2FPuente%20Romano%2FAedificia%20Nobile%207.jpg?alt=media',
        'https://firebasestorage.googleapis.com/v0/b/aedificia-nobile.firebasestorage.app/o/Trabajos%20terminados%2FPuente%20Romano%2FAedificia%20Nobile%208.jpg?alt=media',
        'https://firebasestorage.googleapis.com/v0/b/aedificia-nobile.firebasestorage.app/o/Trabajos%20terminados%2FPuente%20Romano%2FAedificia%20Nobile%2013.jpg?alt=media',
        'https://firebasestorage.googleapis.com/v0/b/aedificia-nobile.firebasestorage.app/o/Trabajos%20terminados%2FPuente%20Romano%2FAedificia%20Nobile%2014.jpg?alt=media',
        'https://firebasestorage.googleapis.com/v0/b/aedificia-nobile.firebasestorage.app/o/Trabajos%20terminados%2FPuente%20Romano%2FAedificia%20Nobile%2015.jpg?alt=media',
        'https://firebasestorage.googleapis.com/v0/b/aedificia-nobile.firebasestorage.app/o/Trabajos%20terminados%2FPuente%20Romano%2FAedificia%20Nobile%2016.jpg?alt=media',
        'https://firebasestorage.googleapis.com/v0/b/aedificia-nobile.firebasestorage.app/o/Trabajos%20terminados%2FPuente%20Romano%2FAedificia%20Nobile%2017.jpg?alt=media',
        'https://firebasestorage.googleapis.com/v0/b/aedificia-nobile.firebasestorage.app/o/Trabajos%20terminados%2FPuente%20Romano%2FAedificia%20Nobile%2018.jpg?alt=media',
        'https://firebasestorage.googleapis.com/v0/b/aedificia-nobile.firebasestorage.app/o/Trabajos%20terminados%2FPuente%20Romano%2FAedificia%20Nobile%2019.jpg?alt=media',
        'https://firebasestorage.googleapis.com/v0/b/aedificia-nobile.firebasestorage.app/o/Trabajos%20terminados%2FPuente%20Romano%2FAedificia%20Nobile%2020.jpg?alt=media',
        'https://firebasestorage.googleapis.com/v0/b/aedificia-nobile.firebasestorage.app/o/Trabajos%20terminados%2FPuente%20Romano%2FAedificia%20Nobile%2021.jpg?alt=media',
        'https://firebasestorage.googleapis.com/v0/b/aedificia-nobile.firebasestorage.app/o/Trabajos%20terminados%2FPuente%20Romano%2FAedificia%20Nobile%2022.jpg?alt=media',
        'https://firebasestorage.googleapis.com/v0/b/aedificia-nobile.firebasestorage.app/o/Trabajos%20terminados%2FPuente%20Romano%2FAedificia%20Nobile%2023.jpg?alt=media',
        'https://firebasestorage.googleapis.com/v0/b/aedificia-nobile.firebasestorage.app/o/Trabajos%20terminados%2FPuente%20Romano%2FAedificia%20Nobile%20143.jpg?alt=media',
        'https://firebasestorage.googleapis.com/v0/b/aedificia-nobile.firebasestorage.app/o/Trabajos%20terminados%2FPuente%20Romano%2FAedificia%20Nobile%20144.jpg?alt=media',
      ]
    },
    { 
      id: 'playa-alicate', 
      titleKey: 'projectPlayaAlicate', 
      images: [
        'https://firebasestorage.googleapis.com/v0/b/aedificia-nobile.firebasestorage.app/o/Trabajos%20terminados%2FAlicate%20playa%2FAedificia%20Nobile%2038.jpg?alt=media',
        'https://firebasestorage.googleapis.com/v0/b/aedificia-nobile.firebasestorage.app/o/Trabajos%20terminados%2FAlicate%20playa%2FAedificia%20Nobile%2039.jpg?alt=media',
        'https://firebasestorage.googleapis.com/v0/b/aedificia-nobile.firebasestorage.app/o/Trabajos%20terminados%2FAlicate%20playa%2FAedificia%20Nobile%2040.jpg?alt=media',
        'https://firebasestorage.googleapis.com/v0/b/aedificia-nobile.firebasestorage.app/o/Trabajos%20terminados%2FAlicate%20playa%2FAedificia%20Nobile%2041.jpg?alt=media',
        'https://firebasestorage.googleapis.com/v0/b/aedificia-nobile.firebasestorage.app/o/Trabajos%20terminados%2FAlicate%20playa%2FAedificia%20Nobile%2042.jpg?alt=media',
        'https://firebasestorage.googleapis.com/v0/b/aedificia-nobile.firebasestorage.app/o/Trabajos%20terminados%2FAlicate%20playa%2FAedificia%20Nobile%2043.jpg?alt=media',
        'https://firebasestorage.googleapis.com/v0/b/aedificia-nobile.firebasestorage.app/o/Trabajos%20terminados%2FAlicate%20playa%2FAedificia%20Nobile%2044.jpg?alt=media',
        'https://firebasestorage.googleapis.com/v0/b/aedificia-nobile.firebasestorage.app/o/Trabajos%20terminados%2FAlicate%20playa%2FAedificia%20Nobile%2045.jpg?alt=media',
      ]
    },
    { 
      id: 'apartamento-morera', 
      titleKey: 'projectApartamentoMorera', 
      images: [
        'https://firebasestorage.googleapis.com/v0/b/aedificia-nobile.firebasestorage.app/o/Trabajos%20terminados%2Fapartament%20morera%2FAedificia%20Nobile%2092.jpg?alt=media',
        'https://firebasestorage.googleapis.com/v0/b/aedificia-nobile.firebasestorage.app/o/Trabajos%20terminados%2Fapartament%20morera%2FAedificia%20Nobile%2093.jpg?alt=media',
        'https://firebasestorage.googleapis.com/v0/b/aedificia-nobile.firebasestorage.app/o/Trabajos%20terminados%2Fapartament%20morera%2FAedificia%20Nobile%2094.jpg?alt=media',
        'https://firebasestorage.googleapis.com/v0/b/aedificia-nobile.firebasestorage.app/o/Trabajos%20terminados%2Fapartament%20morera%2FAedificia%20Nobile%2095.jpg?alt=media',
        'https://firebasestorage.googleapis.com/v0/b/aedificia-nobile.firebasestorage.app/o/Trabajos%20terminados%2Fapartament%20morera%2FAedificia%20Nobile%2096.jpg?alt=media',
        'https://firebasestorage.googleapis.com/v0/b/aedificia-nobile.firebasestorage.app/o/Trabajos%20terminados%2Fapartament%20morera%2FAedificia%20Nobile%2097.jpg?alt=media',
        'https://firebasestorage.googleapis.com/v0/b/aedificia-nobile.firebasestorage.app/o/Trabajos%20terminados%2Fapartament%20morera%2FAedificia%20Nobile%2098.jpg?alt=media',
        'https://firebasestorage.googleapis.com/v0/b/aedificia-nobile.firebasestorage.app/o/Trabajos%20terminados%2Fapartament%20morera%2FAedificia%20Nobile%2099.jpg?alt=media',
        'https://firebasestorage.googleapis.com/v0/b/aedificia-nobile.firebasestorage.app/o/Trabajos%20terminados%2Fapartament%20morera%2FAedificia%20Nobile%20100.jpg?alt=media',
        'https://firebasestorage.googleapis.com/v0/b/aedificia-nobile.firebasestorage.app/o/Trabajos%20terminados%2Fapartament%20morera%2FAedificia%20Nobile%20101.jpg?alt=media',
        'https://firebasestorage.googleapis.com/v0/b/aedificia-nobile.firebasestorage.app/o/Trabajos%20terminados%2Fapartament%20morera%2FAedificia%20Nobile%20102.jpg?alt=media',
        'https://firebasestorage.googleapis.com/v0/b/aedificia-nobile.firebasestorage.app/o/Trabajos%20terminados%2Fapartament%20morera%2FAedificia%20Nobile%20103.jpg?alt=media',
        'https://firebasestorage.googleapis.com/v0/b/aedificia-nobile.firebasestorage.app/o/Trabajos%20terminados%2Fapartament%20morera%2FAedificia%20Nobile%20104.jpg?alt=media',
        'https://firebasestorage.googleapis.com/v0/b/aedificia-nobile.firebasestorage.app/o/Trabajos%20terminados%2Fapartament%20morera%2FAedificia%20Nobile%20105.jpg?alt=media',
        'https://firebasestorage.googleapis.com/v0/b/aedificia-nobile.firebasestorage.app/o/Trabajos%20terminados%2Fapartament%20morera%2FAedificia%20Nobile%20106.jpg?alt=media',
        'https://firebasestorage.googleapis.com/v0/b/aedificia-nobile.firebasestorage.app/o/Trabajos%20terminados%2Fapartament%20morera%2FAedificia%20Nobile%20107.jpg?alt=media',
        'https://firebasestorage.googleapis.com/v0/b/aedificia-nobile.firebasestorage.app/o/Trabajos%20terminados%2Fapartament%20morera%2FAedificia%20Nobile%20108.jpg?alt=media',
        'https://firebasestorage.googleapis.com/v0/b/aedificia-nobile.firebasestorage.app/o/Trabajos%20terminados%2Fapartament%20morera%2FAedificia%20Nobile%20109.jpg?alt=media',
        'https://firebasestorage.googleapis.com/v0/b/aedificia-nobile.firebasestorage.app/o/Trabajos%20terminados%2Fapartament%20morera%2FAedificia%20Nobile%20110.jpg?alt=media',
        'https://firebasestorage.googleapis.com/v0/b/aedificia-nobile.firebasestorage.app/o/Trabajos%20terminados%2Fapartament%20morera%2FAedificia%20Nobile%20111.jpg?alt=media',
        'https://firebasestorage.googleapis.com/v0/b/aedificia-nobile.firebasestorage.app/o/Trabajos%20terminados%2Fapartament%20morera%2FAedificia%20Nobile%20112.jpg?alt=media',
        'https://firebasestorage.googleapis.com/v0/b/aedificia-nobile.firebasestorage.app/o/Trabajos%20terminados%2Fapartament%20morera%2FAedificia%20Nobile%20130.jpg?alt=media',
        'https://firebasestorage.googleapis.com/v0/b/aedificia-nobile.firebasestorage.app/o/Trabajos%20terminados%2Fapartament%20morera%2FAedificia%20Nobile%20131.jpg?alt=media',
        'https://firebasestorage.googleapis.com/v0/b/aedificia-nobile.firebasestorage.app/o/Trabajos%20terminados%2Fapartament%20morera%2FAedificia%20Nobile%20132.jpg?alt=media',
        'https://firebasestorage.googleapis.com/v0/b/aedificia-nobile.firebasestorage.app/o/Trabajos%20terminados%2Fapartament%20morera%2FAedificia%20Nobile%20133.jpg?alt=media',
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