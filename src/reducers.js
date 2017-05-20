import { combineReducers } from 'redux';

const chatReducer = (state = {
    chatVisible: false,
    selectedIndex: 2,
}, action) => {
    switch (action.type) {
        case "CHANGE":
            state = {
                ...state,
                chatVisible: action.payload,

            };
            break;
        case "SELECT":
            state = {
                ...state,
                selectedIndex: action.payload,

            };
            break;
    }
    return state;
};

export default combineReducers({
    chatReducer
});