import { combineReducers } from 'redux';
import dialogsReducer from './dialogs-reducer';
import profileReducer from './profile-reducer';

export default combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer
})

