import {useEffect, useReducer, useState} from "react";

const modifyCounter = (state, action) => {
    switch (action.type) {
        case 'increment':
            console.log("Incrementing");    
            return {...state, counter: state.counter + state.step};
        case 'decrement':
            console.log("Decrementing");    
            return {...state, counter: state.counter - state.step};
        case 'changeStep':
            return {...state, step: action.payload}
        default:
            return state;
    }
}

const intialCounter = {counter: 0, step: 1};
// use useContext to send intial state and dispatch

const ReducerFunctionV2 = () => {
    const [counter, dispatchCounter] = useReducer(modifyCounter, intialCounter) 
    return (
        <>
            <CounterDisplay counter={counter}/>
            <IncrementCounter dispatch={dispatchCounter}/>
            <DecrementCounter dispatch={dispatchCounter}/>
        </>
    );
}

const CounterDisplay = ({counter}) => {
    return (    
        <h1>Counter is {counter.counter}</h1>
    );
}

const DecrementCounter = ({dispatch}) => {

    return(
        <>
            <input placeholder="Step" onChange={e => dispatch({type: 'changeStep', payload: +e.target.value})}></input>
            <button onClick={() => dispatch({type:"decrement"})}>Decrement Counter</button>
        </>
    )
}
const IncrementCounter = ({dispatch}) => {

    return(
        <>
            <input placeholder="Step" onChange={e => dispatch({type: 'changeStep', payload: +e.target.value})}></input>
            <button onClick={() => dispatch({type:"increment"})}>Increment Counter</button>
        </>
    )

}
export default ReducerFunctionV2;