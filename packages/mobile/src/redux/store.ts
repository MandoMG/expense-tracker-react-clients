import {configureStore} from '@reduxjs/toolkit';
import appReducer from './slices/appSlice';
import recordReducer from './slices/recordSlice';
import categoryReducer from './slices/categorySlice';
import {listenerMiddleware} from './listeners/listenerMiddleware';

export const store = configureStore({
  reducer: {
    app: appReducer,
    record: recordReducer,
    category: categoryReducer,
  },
  middleware: getDefaultMiddleware => {
    const defaultMiddleware = getDefaultMiddleware().prepend(
      listenerMiddleware.middleware,
    );

    return defaultMiddleware;
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
