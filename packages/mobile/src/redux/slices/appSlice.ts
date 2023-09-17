import {createSelector, createSlice} from '@reduxjs/toolkit';
import {RootState} from '../store';
import {getDashboardInfo} from '../thunks/dashboardThunks';
import {DashboardInfo} from '../../types';

export interface AppState {
  isLoading: boolean;
  dashboardInfo: DashboardInfo | null;
}

const initialState: AppState = {
  isLoading: false,
  dashboardInfo: null,
};

export const appSlice = createSlice({
  name: 'appSlice',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getDashboardInfo.pending, (state, _action) => {
        state.isLoading = true;
      })
      .addCase(getDashboardInfo.fulfilled, (state, action) => {
        state.isLoading = false;
        state.dashboardInfo = action.payload;
      });
  },
});

// Action creators are generated for each case reducer function
export const {} = appSlice.actions;

export const selectIsAppLoading = createSelector(
  (state: RootState) => state.app,
  app => {
    return app.isLoading;
  },
);

export const selectDashboardInfo = createSelector(
  (state: RootState) => state.app,
  app => {
    return app.dashboardInfo;
  },
);

export default appSlice.reducer;
