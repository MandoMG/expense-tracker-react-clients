import { startAppListening } from './listenerMiddleware';
import {
  deleteRecordById,
  getRecordsInfo,
  saveRecord,
  updateRecord,
} from '../thunks/recordsThunks';
import { ListenerEffectAPI, PayloadAction } from '@reduxjs/toolkit';
import { getDashboardInfo } from '../thunks/dashboardThunks';

const refreshGetRecordsInfo = (
  action: PayloadAction,
  store: ListenerEffectAPI<any, any>,
) => {
  store.dispatch(getRecordsInfo());
  store.dispatch(getDashboardInfo());
};

startAppListening({
  actionCreator: deleteRecordById.fulfilled,
  effect: refreshGetRecordsInfo,
});

startAppListening({
  actionCreator: saveRecord.fulfilled,
  effect: (action, api) => {
    refreshGetRecordsInfo(action, api);
  },
});

startAppListening({
  actionCreator: updateRecord.fulfilled,
  effect: (action, api) => {
    refreshGetRecordsInfo(action, api);
  },
});
