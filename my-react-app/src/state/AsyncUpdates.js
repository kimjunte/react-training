import React from 'react';

class AsyncUpdates extends React.Component {
    constructor () {
        super() // <!-- we must call the super class constructor before doing anything else
        this.state = {
            counter: 0
        };
        
        this.handleIncrement = this.handleIncrement.bind(this);
    }

    handleIncrement () {
        // the setState method is effectively async
        // the first call to setState might not have completed before the second one
        // the second call to setState might not have completed the third one
        // this.setState({counter: this.state.counter + 1});
        // this.setState({counter: this.state.counter + 1});
        // this.setState({counter: this.state.counter + 1});

        // if the new value is dependent on the old...
        // then you should call the version of setState that accepts a callback
        // the callback is passed the current state and returns a new stable object
        // the state arg is guaranteed to be up-to-date
        this.setState(state => ({counter: state.counter + 1}))
        this.setState(state => ({counter: state.counter + 1}))
        this.setState(state => ({counter: state.counter + 1}))
    }

    render() {
        return (
            <>
                <p>The counter is {this.state.counter}</p>
                <button onClick={this.handleIncrement}>Increment counter</button>
            </>
        );
    };
}

export default AsyncUpdates;