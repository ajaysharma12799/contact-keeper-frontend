import {GET_ALL_CONTACTS, CONTACT_ERROR, ADD_CONTACT, DELETE_CONTACT, SET_CURRENT, CLEAR_CURRENT, UPDATE_CONTACT} from "../actions/types";

const initialState = {
    contacts: null,
    loading: true,
    error: null,
    current: null,
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
        
        case UPDATE_CONTACT:
            return {
                ...state,
                contact: state.contacts.map(contact => contact._id === payload._id ? payload : contact),
                loading: false
            };
        
        case SET_CURRENT: 
            return {
                ...state,
                current: payload,
                loading: false
            };
        
        case CLEAR_CURRENT:
            return {
                ...state,
                current: null
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