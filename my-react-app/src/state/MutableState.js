import React from 'react';

class MutuableState extends React.Component {
    constructor() {
        super();
        this.state = {
            philosophy: {
                philosopher: 'Hume',
                quotation: 'I think therefore I am'
            }
        };

        this.handleCorrectPhilosopher = this.handleCorrectPhilosopher.bind(this);
    }

    handleCorrectPhilosopher() {
        // DO NOT modify state directly!
        // this.state.philosophy.philosopher = "Descartes"

        // React does not do a deep compaison between the new state and the old
        // This means we must a copy of the existing state and modify it/add to it
        this.setState({philosophy: {...this.state.philosophy, philosopher: 'Descartes'}});
    }

    render() {
        const {philosopher, quotation} = this.state.philosophy;
        return (
            <>
                <p>{philosopher} said '{quotation}'</p>
                <button onClick={this.handleCorrectPhilosopher}>Correct the philosopher</button>
            </>
        );
    }

}

export default MutuableState;