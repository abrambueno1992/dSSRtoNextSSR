import { FETCH_CURRENT_USER } from '../actions';
import { ERROR } from '../actions';

export default function (state = null, action) {
    switch (action.type) {
        case FETCH_CURRENT_USER:
            return action.payload.data || false;
        case ERROR:
            return action.payload
        default:
            return state;
    }
}