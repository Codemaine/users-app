const initialState = {
  contacts: []
};

const contactsReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_CONTACT":
          console.log(action.payload)
            return {...state, contacts: [...state.contacts, action.payload]};
        case "DELETE_CONTACT":
          let undeletedContacts = state.contacts.filter(contact => contact.id !== action.payload);
            return {...state, contacts: undeletedContacts}
        case "EDIT_CONTACT":
          return{...state,contacts:state.contacts.map
            (contact => contact.id === action.payload.id ? action.payload: contact),}
            
        default:
            return state;
    }
};
export default contactsReducer;