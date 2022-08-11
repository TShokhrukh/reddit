import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { isDev } from 'common/root';
import logger from 'redux-logger';

export const store = configureStore({
  reducer: {
    
  },
  middleware: getDefaultMiddleware().concat(isDev() ? [logger] : []),
  devTools: isDev()
});