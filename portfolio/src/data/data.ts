import { dataProjects } from 'src/types';

export const projectsData: dataProjects = {
  projects: [
    {
      id: 'tracker',
      title: 'Project Tracker',
      image: '/src/assets/imageProjects/tracker.png',
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
      title: 'Rick and Morty API',
      image: '/src/assets/imageProjects/tracker.png',
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