import {createSelector, createSlice} from '@reduxjs/toolkit';
import {RootState} from '../store';
import {RecordsInfo, Record, PreviousMonthsRecordInfo} from '../../types';
import {getPreviousMonthsInfo, getRecordsInfo} from '../thunks/recordsThunks';

export interface RecordState {
  isRecordsLoading: boolean;
  recordsInfo: RecordsInfo | null;
  previousMonthsInfo: PreviousMonthsRecordInfo[] | null;
  lastPreviousMonthRequestTimestamp: string;
}

const initialState: RecordState = {
  isRecordsLoading: false,
  recordsInfo: null,
  previousMonthsInfo: null,
  lastPreviousMonthRequestTimestamp: '',
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
      })
      .addCase(getPreviousMonthsInfo.fulfilled, (state, action) => {
        state.isRecordsLoading = false;
        state.previousMonthsInfo = action.payload;
        state.lastPreviousMonthRequestTimestamp = new Date().toISOString();
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

export const selectPreviousMonthsData = createSelector(
  (state: RootState) => state.record,
  record => {
    return {
      previousMonthsInfo: record.previousMonthsInfo,
      timestamp: new Date(record.lastPreviousMonthRequestTimestamp),
    };
  },
);

export default recordSlice.reducer;
