import { initialState } from './store';

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'contacts/addContacts':
      return { ...state, contacts: [...state.contacts, action.payload]} ;

    case 'contacts/deleteContacts':
      return {
        ...state,
        contacts: state.contacts.filter(contact => {
          return contact.id !== action.payload;
        }),
      };
    case 'filter/changeFilter':
      return { ...state, filter: action.payload };

    default:
      return state;
  }
};
