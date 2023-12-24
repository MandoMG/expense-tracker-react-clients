import {createListenerMiddleware, TypedStartListening} from '@reduxjs/toolkit';
import {AppDispatch, RootState} from '../store';

export type AppStartListening = TypedStartListening<RootState, AppDispatch>;

export const listenerMiddleware = createListenerMiddleware();

export const startAppListening =
  listenerMiddleware.startListening as AppStartListening;
