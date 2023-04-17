import { DataProjectsType } from 'src/types';

export const projectsData: DataProjectsType = {
  projects: [
    {
      id: 'tracker',
      tech: 'react',
      title: 'Project Tracker',
      image: 'src/assets/imageProjects/tracker.png',
      link: 'https://kornull-project-tracker.netlify.app/',
      github: 'https://github.com/Kornull/Project-tracker',
      stack: [
        'React',
        'Typescript',
        'Redux Toolkit',
        'RTK Query',
        'Localization(i18next)',
        'SCSS.modules',
        'MAterial UI',
      ],
    },
    {
      id: 'rick',
      tech: 'react',
      title: 'Rick and Morty API',
      image: 'src/assets/imageProjects/rick.png',
      link: 'https://kornull.netlify.app/',
      github: 'https://github.com/Kornull/Rick-and-Morty-React',
      stack: [
        'React',
        'Typescript',
        'Redux Toolkit',
        'useContext',
        'SCSS.modules',
        'useForm',
        'Unit-testing',
        'Jest',
      ],
    },
    {
      id: 'rick',
      tech: 'javascript',
      title: 'Rick and Morty API',
      image: 'src/assets/imageProjects/rick.png',
      link: 'https://kornull.netlify.app/',
      github: 'https://github.com/Kornull/Rick-and-Morty-React',
      stack: [
        'React',
        'Typescript',
        'Redux Toolkit',
        'useContext',
        'SCSS.modules',
        'useForm',
        'Unit-testing',
        'Jest',
      ],
    },
  ],
};
