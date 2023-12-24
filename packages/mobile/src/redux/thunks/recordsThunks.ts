import {createAsyncThunk} from '@reduxjs/toolkit';
import {
  RecordService,
  SaveUpdateRecordParams,
  SingleRecordsParams,
} from '../../services/recordService';

export const getRecordsInfo = createAsyncThunk('records/getInfo', async () => {
  return await RecordService.getInstance().getRecordInfo();
});

export const getRecordById = createAsyncThunk(
  'records/getRecordById',
  async ({recordId}: SingleRecordsParams) => {
    if (!recordId) {
      return null;
    }

    return await RecordService.getInstance().getRecordData({recordId});
  },
);

export const deleteRecordById = createAsyncThunk(
  'records/deleteRecordById',
  async ({recordId}: SingleRecordsParams) => {
    return await RecordService.getInstance().deleteRecord({recordId});
  },
);

export const saveRecord = createAsyncThunk(
  'records/saveRecord',
  async ({record}: SaveUpdateRecordParams) => {
    return await RecordService.getInstance().saveRecord({record});
  },
);

export const updateRecord = createAsyncThunk(
  'records/updateRecord',
  async ({recordId, record}: SaveUpdateRecordParams) => {
    return await RecordService.getInstance().updateRecord({recordId, record});
  },
);

export const getPreviousMonthsInfo = createAsyncThunk(
  'records/getPreviousMonthsInfo',
  async () => {
    return await RecordService.getInstance().getPreviousMonthsRecordInfo();
  },
);
