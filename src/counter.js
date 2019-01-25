import React from 'react';

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0
        };

        this.handlerIncrement = this.handlerIncrement.bind(this);
        this.handlerIncrement = this.handlerIncrement.bind(this);
    }

    handlerIncrement() {
        this.setState({
            counter: this.state.counter + 1
        });
    }

    handlerDecrement() {
        this.setState({
            counter: this.state.counter - 1
        });
    }

    render() {
        return (
            <div>
                <button type='button' onClick = {this.handlerIncrement.bind(this)}>+</button>
                <span>{this.state.counter}</span>
                <button type='button' onClick = {this.handlerDecrement.bind(this)}>-</button>
            </div>
        );
    }
}

export default Counter;