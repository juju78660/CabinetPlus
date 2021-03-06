// Reducer...

const initialState = {
    currentUser : null,
    products : [],
    appError : ""
}

export default function (state = initialState, action) {
    // console.log("SWITCH ACTION:" + action.type + "\nVALUE:" + action.payload);
    switch(action.type){
        case 'DO_LOGIN':
            return {
                ...state,
                currentUser: action.payload,
            };

        case 'DO_LOGOUT':
            return {
                ...state,
                currentUser: null,
            };

        case 'DO_CREATE_ACCOUNT':
            return {
                ...state,
                currentUser: action.payload,
            };

        case 'FETCH_PRODUCT':
            return {
                ...state,
                products: action.payload,
            };

        case 'ON_ERROR':
            return {
                ...state,
                appError: action.payload,
            };
        
        default:
            return state;
    }
};