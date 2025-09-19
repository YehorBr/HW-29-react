export const addContacts = (newContact) => {
  return {
    type: "contacts/addContacts",
    payload: newContact,
  };
};

export const deleteContacts = (contactId) => {
  return {
    type: "contacts/deleteContacts",
    payload: contactId,
  };
};

export const filterContacts = (filteredWord) =>{
    return{
        type:"filter/changeFilter",
        payload: filteredWord,
    }
}