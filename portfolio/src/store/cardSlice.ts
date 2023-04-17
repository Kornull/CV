import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import { projectsData } from 'src/data/data';

import { ProjectType } from 'src/types';

type CardState = {
  cards: ProjectType[];
  cardsResult: ProjectType[];
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
};

export const cardsSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    setUpdateCards(state: CardState, action: PayloadAction<string>) {
      state.cardsResult = state.cards.filter(
        (card) => card.tech === action.payload
      );
    },
  },
});

export const { setUpdateCards } = cardsSlice.actions;
export default cardsSlice.reducer;
