import {createSelector, createSlice} from '@reduxjs/toolkit';
import {RootState} from '../store';
import {RecordsInfo, Record} from '../../types';
import {getRecordsInfo} from '../thunks/recordsThunks';

export interface RecordState {
  isRecordsLoading: boolean;
  recordsInfo: RecordsInfo | null;
}

const initialState: RecordState = {
  isRecordsLoading: false,
  recordsInfo: null,
};

export const recordSlice = createSlice({
  name: 'appSlice',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getRecordsInfo.pending, (state, _action) => {
        state.isRecordsLoading = true;
      })
      .addCase(getRecordsInfo.fulfilled, (state, action) => {
        state.isRecordsLoading = false;
        state.recordsInfo = action.payload;
      });
  },
});

// Action creators are generated for each case reducer function
export const {} = recordSlice.actions;

export const selectIsRecordLoading = createSelector(
  (state: RootState) => state.record,
  record => {
    return record.isRecordsLoading;
  },
);

export const selectDashboardInfo = createSelector(
  (state: RootState) => state.record,
  record => {
    return record.recordsInfo;
  },
);

export const selectRecords = createSelector(
  (state: RootState) => state.record,
  record => {
    if (
      !record.recordsInfo ||
      !record.recordsInfo.recordItemData ||
      !record.recordsInfo.recordItemData.length
    ) {
      return [] as Record[];
    }

    return record.recordsInfo.recordItemData;
  },
);

export default recordSlice.reducer;
