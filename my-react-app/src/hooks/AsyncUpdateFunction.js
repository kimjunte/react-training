import {useState} from 'react';

const AsyncUpdateFunction = () => {
    const [counter, setCounter] = useState(0);

    const handleIncrement = () => {
        // this won't work - setCounter is async
        // setCounter(counter + 1);
        // setCounter(counter + 1);
        // setCounter(counter + 1);

        setCounter(counter => counter +1);
        setCounter(counter => counter +1);
        setCounter(counter => counter +1);
    }

    return(
        <>
            <p>The counter is {counter}</p>
            <button onClick={handleIncrement}>Increment Counter</button>
        </>
    )
}

export default AsyncUpdateFunction;