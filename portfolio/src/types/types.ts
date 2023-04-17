export enum LanguageQuery {
  RU = 'ru',
  EN = 'en',
  LANG = 'lang',
  BTN_MORE = 'buttons.more',
  BTN_CLOSE = 'buttons.close',
  BTN_READ = 'buttons.read',
  ABOUT = 'about',
  ABOUT_FULL = 'about-full',
  SKILLS = 'skills',
  STACK = 'stack',
  PROJECTS = 'projects',
  DATA_PROJECT = 'projects-data',
  DESCR = 'descr',
  WORK = 'work',
}

export type ProjectType = {
  id: string;
  tech: string;
  title: string;
  image: string;
  link: string;
  github: string;
  stack: string[];
};

export type DataProjectsType = {
  projects: ProjectType[];
};
