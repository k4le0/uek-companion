



const INITIAL = {
    chatVisible: false,
    selectedIndex: 2,
};

export default (state = INITIAL, action) => {
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


