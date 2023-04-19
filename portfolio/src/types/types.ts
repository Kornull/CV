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
  SUMMARU = 'summary',
  STACK = 'stack',
  PROJECTS = 'projects',
  DATA_PROJECT = 'projects-data',
  DESCR = 'descr',
  WORK = 'work',
  WORK_TEXT = 'work-title',
  CONTACTS = 'contacts',
  PAGES = 'pages',
  NOT = 'not',
  HERE = 'here',
}

export enum LocalStore {
  LANG = 'portfolio-kor-lang',
  CATEGORY = 'portfolio-kor-category',
  ALL = 'all',
  EN = 'en',
  RU = 'ru',
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
