import axios from "axios";
import { API } from '../API';
import {GET_ALL_CONTACTS, CONTACT_ERROR, ADD_CONTACT, DELETE_CONTACT, SET_CURRENT, CLEAR_CURRENT, UPDATE_CONTACT, CLEAR_CONTACTS} from "./types";

export const getAllContacts = () => async (dispatch) => {
    try {
        const response = await axios.get(`${API}/contacts`);
        const data = response.data;
        dispatch({
            type: GET_ALL_CONTACTS,
            payload: data
        })
    } catch (error) {   
        console.log(error);
        dispatch({
            type: CONTACT_ERROR,
            payload: error
        })
    }
}

export const addContact = (contact) => async (dispatch) => {
    try {
        const response = await axios.post(`${API}/contacts`, JSON.stringify(contact), {
            headers: {
                'Content-Type': 'application/json',
            }
        });
        const data = response.data;
        dispatch({
            type: ADD_CONTACT,
            payload: data
        })
        dispatch(getAllContacts());
    } catch (error) {
        console.log(error);
        dispatch({
            type: CONTACT_ERROR,
            payload: error
        })
    }
}

export const updateContact = (contact) => async (dispatch) => {
    try {
        const response = await axios.put(`${API}/contacts/${contact.id}`,contact, {
            headers: {
                'Content-Type': 'application/json',
            }
        });
        const data = response.data;
        dispatch({
            type: UPDATE_CONTACT,
            payload: data
        })
        dispatch(getAllContacts());
    } catch (error) {
        console.log(error);
        dispatch({
            type: CONTACT_ERROR,
            payload: error
        })
    }
}

export const deleteContact = (id) => async (dispatch) => {
    try {
        console.log(id);
        await axios.delete(`${API}/contacts/${id}`);
        dispatch({
            type: DELETE_CONTACT,
            payload: id
        });
        dispatch(getAllContacts());
    } catch (error) {
        dispatch({
            type: CONTACT_ERROR,
            payload: error
        })
    }
}

export const setCurrent = (contact) => async (dispatch) => {
    dispatch({
        type: SET_CURRENT,
        payload: contact
    })
}

export const clearCurrent = () => async (dispatch) => {
    dispatch({
        type: CLEAR_CURRENT
    })
}

export const clearContacts = () => (dispatch) => {
    dispatch({
        type: CLEAR_CONTACTS
    })
}