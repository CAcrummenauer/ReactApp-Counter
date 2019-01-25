import React from 'react';

class Power extends React.Component {
    state = {
        isToggleOn: false
    }

    handlerToggle() {
        console.log(this.state.isToggleOn);
        this.setState({
            isToggleOn: !this.state.isToggleOn
        });
    }

    render() {
        return <button type='button' onClick = {() => this.handlerToggle()}>{this.state.isToggleOn ? 'On': 'Off'}</button>
    }
}

export default Power;