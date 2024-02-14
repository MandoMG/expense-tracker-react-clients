import {configureStore} from '@reduxjs/toolkit';
import appReducer from './slices/appSlice';
import recordReducer from './slices/recordSlice';
import categoryReducer from './slices/categorySlice';
import './listeners';

export const store = configureStore({
  reducer: {
    app: appReducer,
    record: recordReducer,
    category: categoryReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
