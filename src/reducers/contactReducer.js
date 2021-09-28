import {GET_ALL_CONTACTS, CONTACT_ERROR, ADD_CONTACT, DELETE_CONTACT} from "../actions/types";

const initialState = {
    contacts: null,
    loading: true,
    error: null,
    contact: null
}

// eslint-disable-next-line
export default function(state = initialState, action) {
    const {type, payload} = action;

    switch (type) {
        case GET_ALL_CONTACTS:
            console.log(`${JSON.stringify(payload)}`);
            return {
                ...state,
                contacts: payload,
                loading: false,
                contact: null
            }; 
        
        case ADD_CONTACT: 
            return {
                ...state,
                loading: false,
                contact: payload
            };
        
        case DELETE_CONTACT:
            console.log(payload);
            return {
                ...state,
                contacts: state.contacts.filter(contact => contact._id !== payload),
                loading: false
            };
        
        case CONTACT_ERROR: 
            return {
                ...state,
                loading: false,
                contact: null,
                error: payload
            };
    
        default:
            return state;
    }
}