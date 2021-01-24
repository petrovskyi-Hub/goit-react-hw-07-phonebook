import { configureStore, combineReducers } from '@reduxjs/toolkit';

import { items, isLoading, error } from './Contacts/contacts-reducer';
import { filterReducer } from './Filter/filter-reducer';

const store = configureStore({
  reducer: {
    contacts: combineReducers({
      items,
      isLoading,
      error,
      filter: filterReducer,
    }),
  },
  // middleware,
  devTools: process.env.NODE_ENV === 'development',
});

export default store;
