import React from 'react';

class Counter extends React.Component {
    state = {
        counter: 0
    };

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
                <button type="button" onClick = {() => this.handlerIncrement()}>+</button>
                <span>{this.state.counter}</span>
                <button type="button" onClick = {() => this.handlerDecrement()}>-</button>
            </div>
        );
    }
}

export default Counter;