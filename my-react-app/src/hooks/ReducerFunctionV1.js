import {useReducer} from "react";

/* in prodcution the reducer would exist in a seperate file
 * the reducer accepts two arguments:
 *      1. a ref to the current state
 *      2. a ref to an action object; it describes what action has just occurred ("user clicked a button")
 * the reducer returns a new version of the state
 * 
 * the action object take the following form: {type: <what happened>, payload: <optional data>}
 */
const reducer = (state, action) => {
    switch (action.type) {
        case 'incremenet':
            return state + 1;
        default:
            return state;
    }
}

const ReducerFunctionV1 = () => {

    /*
     * useReducer is an alternative to 3rd party libraries like Redux and MobX
     * it provides for the centralisation of state and the means of updating it
     * it could used to manage ALL of the app's state but should not be
     * it should only be used to manage the state that cuts across business lines
     * NB: this example is trivial on purpose - you would not use useReducer fo this in production
     * 
     * userReducer accepts two arguments:
     *      1. a ref to a reducer function; A reducer function is responsible for updating the state
     *      2. a value representing the initial state
     * useReducer returns an array comprising two elements
     *      1. a ref to the state/store
     *      2. a ref to a dispatch function; it is responsible for sending messages to the reducer
     */
    const [state, dispatch] = useReducer(reducer, 0)

    return (
        <>
            <p>The counter is {state}</p>
            <button onClick={() => dispatch({type: "increment"})}>Incremenet counter</button>
        </>
    );
}


export default ReducerFunctionV1;