import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';

interface AppState {
  texts: string[];
}

const initialState: AppState = {
  texts: [],
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    addText: (state, action: PayloadAction<string>) => {
      state.texts.push(action.payload);
    },
    deleteText: (state, action: PayloadAction<number>) => {
      state.texts.splice(action.payload, 1);
    },
  },
});

export const { addText, deleteText } = appSlice.actions;
export const selectTexts = (state: RootState) => state.app.texts;
export default appSlice.reducer;