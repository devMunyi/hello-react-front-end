import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import greetingReducer from './reducers';

/* eslint-disable comma-dangle */

export default configureStore(
  {
    reducer: {
      greetingDetails: greetingReducer,
    },
  },
  applyMiddleware(logger)
);
