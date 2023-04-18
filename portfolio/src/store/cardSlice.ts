import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import { projectsData } from 'src/data/data';

import { ProjectType } from 'src/types';

type CardState = {
  cards: ProjectType[];
  cardsResult: ProjectType[];
  cardCategories: string[];
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
  },
});

export const { setUpdateCards } = cardsSlice.actions;
export default cardsSlice.reducer;
