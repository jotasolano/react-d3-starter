import { configureStore, combineReducers } from '@reduxjs/toolkit';
import chartConfig from './reducers/chartConfig';

// store configures middlewares and reducers

// const reducers = combineReducers({
//   chartConfig
// })

const store = configureStore({
  reducer: {
    chartConfig,
  },
});

export default store;
