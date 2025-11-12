import { createSlice } from '@reduxjs/toolkit';
import { addContact, deleteContact, getAllContacts } from './operation';

export const initialState = {
  contacts: {
    items: [],
    isLoading: false,
    error: null,
  },
  filter: '',
};

const contactSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: builder => {
    builder.addCase(getAllContacts.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(getAllContacts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.contacts.items = action.payload;
    });
    builder.addCase(getAllContacts.rejected, (state, action) => {
      state.isError = true;
    });

    builder.addCase(addContact.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(addContact.fulfilled, (state, action) => {
      state.isLoading = false;
      state.contacts.items.push(action.payload);
    });
    builder.addCase(addContact.rejected, (state, action) => {
      state.isError = true;
    });

    builder.addCase(deleteContact.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(deleteContact.fulfilled, (state, action) => {
      state.isLoading = false;
      state.contacts.items = state.contacts.items.filter(
        contact => contact.id !== action.payload.id
      );
    });
    builder.addCase(deleteContact.rejected, state => {
      state.isError = true;
    });
  },
});

export const contactReducer = contactSlice.reducer;
