import { FETCH_ADMINS, ERROR } from '../actions';

export default (state = [], action) => {
    switch (action.type) {
        case FETCH_ADMINS:
            return action.payload.data;
        case ERROR:
            return action.payload
        default:
            return state;
    }
};