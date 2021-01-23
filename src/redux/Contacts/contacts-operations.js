// import { createAsyncThunk } from '@reduxjs/toolkit';
import * as contactsAPI from '../../services/contacts-api';
import {
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
  addContactsRequest,
  addContactsSuccess,
  addContactsError,
  deleteContactsRequest,
  deleteContactsSuccess,
  deleteContactsError,
} from './contacts-actions';

// export const fetchBooks = createAsyncThunk(
//   'books/fetchBooks',
//   async (_, { rejectWithValue }) => {
//     try {
//       const books = await bookShelfAPI.fetchBooks();
//       return books;
//     } catch (error) {
//       return rejectWithValue(error);
//     }
//   },
// );

export const fetchContacts = () => async dispatch => {
  dispatch(fetchContactsRequest());

  try {
    const contacts = await contactsAPI.getContacts();
    dispatch(fetchContactsSuccess(contacts));
  } catch (error) {
    dispatch(fetchContactsError(error));
  }
};

export const addContact = contact => async dispatch => {
  dispatch(addContactsRequest());

  try {
    const data = await contactsAPI.postContact(contact);

    dispatch(addContactsSuccess(data));
  } catch (error) {
    dispatch(addContactsError(error));
  }
};

export const deleteContact = contactID => async dispatch => {
  dispatch(deleteContactsRequest());

  try {
    const id = await contactsAPI.deleteContact(contactID);
    dispatch(deleteContactsSuccess(id));
  } catch (error) {
    dispatch(deleteContactsError(error));
  }
};
