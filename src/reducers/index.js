import { combineReducers } from 'redux';

import Auth from './Auth';
//import Navigation from './Navigation';
import Contact from './Contact';
import Chat from './Chat';
import chatR from './ChatReducer';




export default combineReducers({
    chatReducer: chatR,
    authentication: Auth,
   // nav: Navigation,
    contact: Contact,
    chat: Chat
});