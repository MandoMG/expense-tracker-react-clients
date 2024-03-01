import {startAppListening} from './listenerMiddleware';
import {
  deleteCategoryById,
  getCategoriesInfo,
  saveCategory,
  updateCategory,
} from '../thunks/categoriesThunks';
import {ListenerEffectAPI, PayloadAction} from '@reduxjs/toolkit';
import {resetSelectedCategory} from "../slices/categorySlice";

const refreshGetCategoriesInfo = (
  action: PayloadAction,
  store: ListenerEffectAPI<any, any>,
) => {
  store.dispatch(resetSelectedCategory());
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

startAppListening({
  actionCreator: updateCategory.fulfilled,
  effect: (action, api) => {
    refreshGetCategoriesInfo(action, api);
  },
});
