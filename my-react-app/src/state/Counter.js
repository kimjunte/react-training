import React from 'react';

class Counter extends React.Component {
    constructor () {
        super() // <!-- we must call the super class constructor before doing anything else
        this.state = {
            counter: 0
        };
        
        // for the handleIncrement method we must bind this to the current instance of this class
        this.handleIncrement = this.handleIncrement.bind(this);
    }

    handleIncrement () {
        // in a handler method this refs the HTML element that generates the event - the button in this case
        // we must bind this to the current object - see the constructor
        console.log("button clicked");
        this.setState({counter: this.state.counter + 1});
    }

    render() {
        return (
            <>
                <p>The counter is {this.state.counter}</p>
                {/* 
                    the handler name must be camelCase, so onClick not onclick 
                    we must ref a handler function, not call it
                */}
                <button onClick={this.handleIncrement}>Increment counter</button>
            </>
        );
    };
}

export default Counter;