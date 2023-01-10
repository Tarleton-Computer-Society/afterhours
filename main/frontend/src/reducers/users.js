import { SET_CURRENT_USER } from '../actions/types';
export const setCurrentUser = decoded => {
    return {
        type: SET_CURRENT_USER,
        payload: decoded
    }
}
