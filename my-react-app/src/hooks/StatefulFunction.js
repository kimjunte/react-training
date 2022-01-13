import {useState} from 'react';

const StatefulFunction = () => {
    /*
     * useState is used to add items of state to a functional component
     * it accepts one arg = the initial value for the item of state
     * it returns an array comprosing:
     *     1. a ref to the item of state
     *     2. a function that is used to update the item of state   
     */
    const [time, setTime] = useState(new Date().toLocaleTimeString());


    /*
     * DANGER!
     * Calling setTime triggers a re-render
     * Re-rendering a functional component means calling the function again
     * THat means all the code inside the function is executed every time the component is re-rendered
     * We're setting an new interval every second!!!
     */
    // setInterval(() => {
    //    setTime(new Date().toLocaleTimeString());
    //    console.log("Danger")
    // })

    return (
        <p>The current time is {time}</p>
    );
}

export default StatefulFunction;