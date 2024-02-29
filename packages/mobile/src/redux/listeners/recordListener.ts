import {startAppListening} from './listenerMiddleware';
import {
  deleteRecordById,
  getRecordsInfo,
  saveRecord,
  updateRecord,
} from '../thunks/recordsThunks';
import {ListenerEffectAPI, PayloadAction} from '@reduxjs/toolkit';

const refreshGetRecordsInfo = (
  action: PayloadAction,
  store: ListenerEffectAPI<any, any>,
) => {
  console.log('Dispatched by this action: ', action.type);
  store.dispatch(getRecordsInfo());
};

startAppListening({
  actionCreator: deleteRecordById.fulfilled,
  effect: refreshGetRecordsInfo,
});

startAppListening({
  actionCreator: saveRecord.fulfilled,
  effect: refreshGetRecordsInfo,
});

startAppListening({
  actionCreator: updateRecord.fulfilled,
  effect: (action, api) => {
    refreshGetRecordsInfo(action, api);
  },
});
