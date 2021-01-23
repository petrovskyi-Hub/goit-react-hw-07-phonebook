import { configureStore, combineReducers } from '@reduxjs/toolkit';

import { items, isLoading } from './Contacts/contacts-reducer';
import { filterReducer } from './Filter/filter-reducer';

const store = configureStore({
  reducer: {
    contacts: combineReducers({
      items: items,
      isLoading: isLoading,
      filter: filterReducer,
    }),
  },
  // middleware,
  devTools: process.env.NODE_ENV === 'development',
});

export default store;
