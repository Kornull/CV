export enum LanguageQuery {
  RU = 'ru',
  EN = 'en',
  LANG = 'lang',
  BTN_MORE = 'buttons.more',
  BTN_CLOSE = 'buttons.close',
  ABOUT = 'about',
  ABOUT_FULL = 'about-full',
  SKILLS = 'skills',
  PROJECTS = 'projects',
}

export type ProjectType = {
  id: string;
  title: string;
  image: string;
  link: string;
  github: string;
  stack: string[];
};

export type dataProjects = {
  projects: ProjectType[];
};
