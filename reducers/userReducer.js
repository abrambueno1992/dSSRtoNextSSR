import { FETCH_USERS, ERROR } from '../actions';

export default (state = [], action) => {
    switch (action.type) {
        case FETCH_USERS:
            return action.payload;
        case ERROR:
            return action.payload
        default:
            return state;
    }
};