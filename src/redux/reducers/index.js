import {combineReducers} from 'redux'
import auth from './auth';
import contacts from './contacts'

export default combineReducers({
    authState : auth,
    contactState: contacts,
});