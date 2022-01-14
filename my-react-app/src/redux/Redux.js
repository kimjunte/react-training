import {createStore} from "redux";


const initialAppState = {
    counter: 0,
    step: 1
};


const reducer = (state, action) => {
    // the reducer MUST return a new version of the state
    // it must perform a transformation, not a modification 
    // NEVER perform side-effects here!!!
    console.log(state);
    console.log(state.counter);
    console.log(state.step);
    switch (action.type) {
        case 'incrementCounter':
            return {...state, counter: state.counter + state.step}
        case 'changeStep':
            return {...state, step: action.payload}
        default:
            return state
    }
}

// unlike useReducer Redux permits only one store
// the store should be treated as if it were immutable
export const store = createStore(reducer, initialAppState)