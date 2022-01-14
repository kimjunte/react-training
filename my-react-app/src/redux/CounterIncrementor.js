import {useDispatch} from 'react-redux';

const CounterIncrementor = () => {
    const dispatch = useDispatch();
    console.log(dispatch)

    return (
        <button onClick={() => dispatch({type: 'incrementCounter'})}>Increment counter</button>

    );
}

export default CounterIncrementor;