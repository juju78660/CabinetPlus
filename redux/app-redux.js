
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

//
// Initial State...
//

const initialState = {
    username: "NONE",
};

//
// Reducer...
//

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case "setUsername": 
            return { ...state, username: action.value };

        default: 
            return state;
    }
};

//
// Store...
//

const store = createStore(reducer, applyMiddleware(thunkMiddleware));
export { store };

//
// Action Creators...
//

const setUsername = (username) => {
    return {
        type: "setUsername",
        value: username,
    };
}


export { setUsername};