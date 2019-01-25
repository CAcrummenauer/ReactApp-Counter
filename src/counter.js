import React from 'react';

class Counter extends React.Component {
    state = {
        counter: 0,
    };

    render() {
        const handlerIncrement = () => {
            this.setState({
                counter: this.state.counter + 1
            });
        }
    
        const handlerDecrement = () => {
            this.setState({
                counter: this.state.counter - 1
            })
        }
        
        return (
            <div>
                <button type="button" onClick = {handlerIncrement}>+</button>
                <span>{this.state.counter}</span>
                <button type="button" onClick = {handlerDecrement}>-</button>
            </div>
        );
    }
}

export default Counter;