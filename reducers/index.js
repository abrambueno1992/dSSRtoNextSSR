import usersReducer from './userReducer';
import { combineReducers } from 'redux';
import authReducer from './authReducer';
import adminsReducer from './adminsReducer';

export default combineReducers({
    users: usersReducer,
    auth: authReducer,
    admins: adminsReducer
});