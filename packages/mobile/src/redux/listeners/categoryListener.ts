import {startAppListening} from './listenerMiddleware';
import {
  deleteCategoryById,
  getCategoriesInfo,
  saveCategory,
} from '../thunks/categoriesThunks';
import {ListenerEffectAPI, PayloadAction} from '@reduxjs/toolkit';

const refreshGetCategoriesInfo = (
  action: PayloadAction,
  store: ListenerEffectAPI<any, any>,
) => {
  store.dispatch(getCategoriesInfo());
};

startAppListening({
  actionCreator: saveCategory.fulfilled,
  effect: refreshGetCategoriesInfo,
});

startAppListening({
  actionCreator: deleteCategoryById.fulfilled,
  effect: (action, api) => {
    refreshGetCategoriesInfo(action, api);
  },
});
