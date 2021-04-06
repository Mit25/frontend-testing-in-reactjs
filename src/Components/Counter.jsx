import React from 'react';

export default class Counter extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }

    render() {
        return (
            <div>
                <div>
                    <span id='spn-counter-text'>The counter: </span>
                    <span id='spn-count'>{this.state.count}</span>
                </div>
                <button id='btn-increment' onClick={e => this.increment(e)}>Increment</button>
                <button id='btn-decrement' onClick={e => this.decrement(e)}>Decrement</button>
                <button id='btn-reset' onClick={e => this.reset(e)}>Reset</button>
            </div>
        )
    }

    makeIncrementer(amount, event) {
        this.setState({
            count: this.state.count + amount
        });
    }

    reset(event) {
        this.setState({
            count: 0
        });
    }

    increment = (event) => this.makeIncrementer(1, event);
    decrement = (event) => this.makeIncrementer(-1, event);

}

Counter.defaultProps = {

};