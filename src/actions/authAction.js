import axios from "axios";
import { API } from '../API';
import {REGISTER_USER, LOGIN_USER, AUTH_ERROR, LOAD_USER, LOGOUT} from "./types";
import SetAuthToken from '../utils/SetAuthToken';

// Load User
export const loadUser = () => async (dispatch) => {
	if (localStorage.getItem("token")) {
		SetAuthToken(localStorage.getItem("token"));
	}
	try {
		const response = await axios.get(`${API}/auth`);
		dispatch({
			type: LOAD_USER,
			payload: response.data,
		});
	} catch (error) {
        console.log(error)
		dispatch({
			type: AUTH_ERROR,
		});
	}
};

export const registerUser = (user) => async (dispatch) => {
    try {
        const response = await axios.post(`${API}/users`, JSON.stringify(user), {
            headers: {
                'Content-Type': 'application/json',
            }}
        );
        const data = response.data;
        dispatch({
            type: REGISTER_USER,
            payload: data
        })
        dispatch(loadUser());
    } catch (error) {
        console.log(error);
        dispatch({
            type: AUTH_ERROR,
            payload: error
        })
    }
}

export const loginUser = (user) => async (dispatch) => {
    try {
        const response = await axios.post(`${API}/auth`, JSON.stringify(user), {
            headers: {
                'Content-Type': 'application/json',
            }}
        );
        const data = response.data;
        dispatch({
            type: LOGIN_USER,
            payload: data
        })
        dispatch(loadUser());
    } catch (error) {
        console.log(error);
        dispatch({
            type: AUTH_ERROR,
            payload: error
        })
    }
}

export const logout = () => async (dispatch) => {
    try {
        dispatch({
            type: LOGOUT
        })
    } catch (error) {
        console.log(error);
        dispatch({
            type: AUTH_ERROR,
            payload: error
        })
    }
}