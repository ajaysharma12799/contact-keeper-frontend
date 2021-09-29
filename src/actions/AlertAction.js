import { SET_ALERT, REOMVE_ALERT } from './types';
import {v4 as uuidv4} from "uuid";

export const setAlert = (message, type) => async (dispatch) => {
    const id = uuidv4();
    dispatch({
        type: SET_ALERT,
        payload: {message, type, id}
    });

    setTimeout(
		() =>
			dispatch({
				type: REOMVE_ALERT,
				payload: id,
			}),
		5000
	);
}