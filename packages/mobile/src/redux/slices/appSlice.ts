import {createSelector, createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '../store';

export interface AppState {
  isLoading: boolean;
}

const initialState: AppState = {
  isLoading: false,
};

export const appSlice = createSlice({
  name: 'appSlice',
  initialState,
  reducers: {
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {setIsLoading} = appSlice.actions;

export const selectIsAppLoading = createSelector(
  (state: RootState) => state.app,
  app => {
    return app.isLoading;
  },
);

export default appSlice.reducer;
