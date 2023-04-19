import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import { projectsData } from 'src/data/data';

import { ProjectType } from 'src/types';

type CardState = {
  cards: ProjectType[];
  cardsResult: ProjectType[];
  cardCategories: string[];
  isOpenModal: boolean;
  isOpenHeader: boolean;
  cardDescr: ProjectType | null;
};

export const initialState: CardState = {
  cards: projectsData.projects,
  cardsResult: [
    {
      id: '',
      tech: '',
      title: '',
      image: '',
      link: '',
      github: '',
      stack: [],
    },
  ],
  cardCategories: ['all'],
  isOpenModal: true,
  isOpenHeader: false,
  cardDescr: {
    id: 'store',
    tech: 'typescript',
    title: 'Online store',
    image: 'src/assets/imageProjects/store.webp',
    link: 'https://kornull.github.io/Online-store/store/',
    github: 'https://github.com/Kornull/Online-store',
    stack: ['Typescript', 'Webpack', 'SCSS', 'LocalStorage', 'noUiSlider'],
  },
};

export const cardsSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    setUpdateCards(state: CardState, action: PayloadAction<string>) {
      if (action.payload === 'all') {
        state.cardsResult = state.cards;
      } else {
        state.cardsResult = state.cards.filter((card) => card.tech === action.payload);
      }
      state.cardCategories = [
        ...new Set([...state.cardCategories, ...state.cards.map((card) => card.tech)]),
      ];
    },
    setOpenModal(state: CardState, action: PayloadAction<boolean>) {
      state.isOpenModal = action.payload;
    },

    setDescrCard(state: CardState, action: PayloadAction<ProjectType>) {
      state.cardDescr = action.payload;
    },
  },
});

export const { setUpdateCards, setOpenModal, setDescrCard } = cardsSlice.actions;
export default cardsSlice.reducer;
