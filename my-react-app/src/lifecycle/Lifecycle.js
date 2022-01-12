import React from 'react';

class Lifecycle extends React.Component {
    constructor () {
        super() // <!-- we must call the super class constructor before doing anything else
        console.log("Component under construction...")
        this.state = {
            time: new Date().toLocaleTimeString()
        }
        this.intervalID = null;
    }

    /*
     * Side-effectes should be performed inside the lifecycle methods
     * Side-effects incl. e.g. setting intervals, reading from/writing to storage/API
     */

    // a component is mounted once it has been rendered to the DOM
    // normally you'll use this method to fetch data from an API here
    componentDidMount() {
        console.log("Component mounted");
        this.intervalID = setInterval(() => {
            this.setState({time: new Date().toLocaleTimeString()})
        }, 1000)

    }
    
    // this method is called after each re-render
    // you would use this method to write data back to storage/API
    componentDidUpdate() {
        console.log("Component updated");
    }

    // this method is called just before the component is removed from the DOM
    componentWillUnmount() {
        // do clean up
        console.log("Component about to be unmounted...")
        clearInterval(this.intervalID)
    }

    render() {
        console.log("Component is rendered...")
        return (
            <p>The current time is {this.state.time}</p>
        );
    };
}

export default Lifecycle;