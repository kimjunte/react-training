import {useState, useEffect} from 'react';


const LifecycleFunction = () => {
    const [time, setTime] = useState(new Date().toLocaleTimeString());

    /*
     * the useEffect should be used to implement side-effects, e.g. fetching data
     * it accepts:
     *      1. a call back that wraps the side-effect code
     *      2. an array of props and/or state that control the execution of the side effect 
     *          - an empty array means that the side-effect should on be executed after first render.
     *          - an empty array is equivalent to componentDidMount in a class component
     *          - if the side-effect is depended on some prop/state then that prop/item of state should be included in the array
     *          - if you want to execute mutliple side-effects then call useEffect multiple times
     *          - if you want to simultte componentWillUnmount(clean up) then you should return a function from the callback
     * 
     * componentDidMount => useEffect with empty array
     * componentDidUpdate => useEffect with non-empty array
     * componentWillUnmount: retrun a function from the useEffect callback
     * 
     */
    useEffect(() => {
        const intervalId = setInterval(()=> {
            setTime(new Date().toLocaleTimeString());
            console.log("DANGER");
        }, 1000)
        return () => clearInterval(intervalId) // <!-- the code here will be executed before the side-effect is executed again
    }, [])

    // DO NOT DO THIS!!!! - as time is dependent on time change causing memory leaks, create many set interval every seconds
    // useEffect(() => {
    //     setInterval(()=> {
    //         setTime(new Date().toLocaleTimeString());
    //         console.log("DANGER");
    //     }, 1000)
    // }, [time])

    return (
        <p>The current time is {time}</p>
    )
}

export default LifecycleFunction;