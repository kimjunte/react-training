import {useSelector} from 'react-redux';

const CounterDisplay = () => {

    // useSelector is a react-redux hook
    // it accepts a function that is passed a reference to store and returns a branch of it
    const counter = useSelector(state => {
        console.log(state);
        return state.counter;
    });

    return (
        <p>The counter is {counter}</p>
    );
    return false;
}

export default CounterDisplay;