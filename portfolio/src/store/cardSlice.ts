import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import { projectsData } from 'src/data/data';

import { LocalStore, ProjectType } from 'src/types';

if (!localStorage.getItem(LocalStore.CATEGORY)) {
  localStorage.setItem(LocalStore.CATEGORY, LocalStore.ALL);
}

type CardState = {
  cards: ProjectType[];
  cardsResult: ProjectType[];
  cardCategories: string[];
  isOpenModal: boolean;
  isOpenNavigate: boolean;
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
  isOpenModal: false,
  isOpenNavigate: false,
  cardDescr: null,
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
    setOpenMenu(state: CardState, action: PayloadAction<boolean>) {
      state.isOpenNavigate = action.payload;
    },
    setDescrCard(state: CardState, action: PayloadAction<ProjectType>) {
      state.cardDescr = action.payload;
    },
  },
});

export const { setUpdateCards, setOpenModal, setDescrCard, setOpenMenu } = cardsSlice.actions;
export default cardsSlice.reducer;
