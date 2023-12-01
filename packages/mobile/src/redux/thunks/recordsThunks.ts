import {createAsyncThunk} from '@reduxjs/toolkit';
import {RecordService} from '../../services/recordService';

export const getRecordsInfo = createAsyncThunk('records/getInfo', async () => {
  return await RecordService.getInstance().getRecordInfo();
});

export const getPreviousMonthsInfo = createAsyncThunk('records/getPreviousMonthsInfo', async () => {
  return await RecordService.getInstance().getPreviousMonthsRecordInfo();
});
