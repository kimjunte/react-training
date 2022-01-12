import React from 'react';

class Clock extends React.Component {
    constructor () {
        super() // <!-- we must call the super class constructor before doing anything else

        this.state = {
            time: new Date().toLocaleTimeString()
        }
        setInterval(() => {
            this.setState({time: new Date().toLocaleTimeString()})
        }, 1000)
    }
    render() {
        return (
            <p>The current time is {this.state.time}</p>
        );
    };
}

export default Clock;