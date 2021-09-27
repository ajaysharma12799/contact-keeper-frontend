import {REGISTER_USER, LOGIN_USER, AUTH_ERROR, LOAD_USER, LOGOUT} from "../actions/types";

const initialState = {
    token: localStorage.getItem("token"),
    isAuthenticated: null,
    user: null,
    loading: true,
    error: null
};

// eslint-disable-next-line
export default function(state = initialState, action) {
    const {type, payload} = action;
    switch (type) {
        case REGISTER_USER:
        case LOGIN_USER:
            localStorage.setItem("token", payload.token)
            return {
                ...state,
                ...payload,
                isAuthenticated: true,
                loading: false
            };
        
        case LOAD_USER:
            console.log(`${JSON.stringify(payload)}   payload from loaduser`);
            return {
                ...state,
                user: payload,
                loading: false,
                isAuthenticated: true
            };
        
        case AUTH_ERROR:
        case LOGOUT: 
            localStorage.removeItem("token");
            return {
                ...state,
                error: payload,
                token: null,
                isAuthenticated: false,
                user: null,
                loading: false
            };

        default:
            return state;
    }
}