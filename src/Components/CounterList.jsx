import React from 'react';
import Counter from "./Counter";

const createRange = num => Array.from(Array(num).keys());

export default class CounterList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            noOfCounters: 1
        }
    }

    render() {
        const counters = createRange(this.state.noOfCounters);

        return (
            <div>
                <button id='btn-add' onClick={e => this.addCounter(e)}>Add Counter</button>
                <button id='btn-reset' onClick={e => this.reset(e)}>Reset Counter List</button>
                <ul>
                    {counters.map(num => this.renderCounter(num))}
                </ul>
            </div>
        )
    }

    addCounter(event) {
        this.setState({
            noOfCounters: this.state.noOfCounters + 1
        });
    }

    reset(event) {
        this.setState({
            noOfCounters: 1
        });
    }

    renderCounter(index){
        return (
            <li key={index}>
                <Counter />
            </li>
        )
    }

}

CounterList.defaultProps = {

};