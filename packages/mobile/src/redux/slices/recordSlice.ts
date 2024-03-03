import {createSelector, createSlice, isAnyOf} from '@reduxjs/toolkit';
import {RootState} from '../store';
import {
  Record,
  PreviousMonthsRecordInfo,
  SummaryData,
  BudgetSummaryItem, RecordsInfo,
} from '../../types';
import {
  getMonthRecordsData,
  getPreviousMonthsInfo,
  getRecordById,
  getRecordsInfo, saveRecord,
  updateRecord,
} from '../thunks/recordsThunks';

export interface RecordState {
  currentBudgetData: BudgetSummaryItem[];
  currentRecord: Record | null;
  hasError: boolean;
  isRecordsLoading: boolean;
  lastPreviousMonthRequestTimestamp: string;
  previousMonthsInfo: PreviousMonthsRecordInfo[] | null;
  recordItemData: Record[];
  summaryData: SummaryData | null;
  selectedMonthRecordData: RecordsInfo | null;
}

const initialState: RecordState = {
  currentBudgetData: [],
  currentRecord: null,
  hasError: false,
  isRecordsLoading: false,
  lastPreviousMonthRequestTimestamp: '',
  previousMonthsInfo: null,
  recordItemData: [],
  summaryData: null,
  selectedMonthRecordData: null
};

export const recordSlice = createSlice({
  name: 'recordSlice',
  initialState,
  reducers: {
    resetSelectedRecord: state => {
      state.currentRecord = null;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getRecordsInfo.fulfilled, (state, action) => {
        state.isRecordsLoading = false;
        state.summaryData = action.payload.summaryData;
        state.currentBudgetData = action.payload.currentBudgetData;
        state.recordItemData = action.payload.recordItemData;
      })
      .addCase(getRecordById.fulfilled, (state, action) => {
        state.isRecordsLoading = false;
        state.currentRecord = action.payload;
      })
      .addCase(getMonthRecordsData.fulfilled, (state, action) => {
        state.isRecordsLoading = false;
        state.selectedMonthRecordData = action.payload;
      })
      .addCase(getPreviousMonthsInfo.fulfilled, (state, action) => {
        state.isRecordsLoading = false;
        state.previousMonthsInfo = action.payload;
        state.lastPreviousMonthRequestTimestamp = new Date().toISOString();
      })
      .addMatcher(
        isAnyOf(updateRecord.fulfilled, saveRecord.fulfilled),
        (state, _action) => {
          state.isRecordsLoading = false;
        },
      )
      .addMatcher(
        action => action.type.endsWith('/fulfilled'),
        (state, action) => {
          console.log(action.type);
        },
      )
      .addMatcher(
        action => action.type.endsWith('/rejected'),
        (state, action) => {
          state.isRecordsLoading = false;
          console.log(action.type);
        },
      )
      .addMatcher(
        action => action.type.endsWith('/pending'),
        (state, _action) => {
          state.isRecordsLoading = true;
          state.hasError = false;
        },
      );
  },
});

// Action creators are generated for each case reducer function
export const {resetSelectedRecord} = recordSlice.actions;

export const selectIsRecordLoading = createSelector(
  (state: RootState) => state.record,
  record => {
    return record.isRecordsLoading;
  },
);

export const selectHasError = createSelector(
  (state: RootState) => state.record,
  record => {
    return record.hasError;
  },
);

export const selectCurrentRecord = createSelector(
  (state: RootState) => state.record,
  record => {
    return record.currentRecord;
  },
);

export const selectDashboardInfo = createSelector(
  (state: RootState) => state.record,
  record => {
    return {
      summaryData: record.summaryData,
      currentBudgetData: record.currentBudgetData,
      recordItemData: record.recordItemData,
    };
  },
);

export const selectRecords = createSelector(
  (state: RootState) => state.record,
  record => {
    if (!record.recordItemData || !record.recordItemData.length) {
      return [] as Record[];
    }

    return record.recordItemData;
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

export const selectSelectedMonthRecords = createSelector(
  (state: RootState) => state.record,
  record => {
    return record.selectedMonthRecordData?.recordItemData ?? [];
  },
)

export default recordSlice.reducer;
