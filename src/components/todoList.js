import React from 'react';

class TodoList extends React.Component {
    state = {
        text: '',
        list: []
    }

    handlerInputText(e) {
        //preventDefault(e);
        this.setState({
            text: e.target.value
        });
    }

    handlerButton() {
        console.log('Entrou no button');
        var list = this.state.list;
        list.push(this.state.text);
        this.setState({
            list
        });
    }

    render() {
        return (
            <div>
                <input type='text' onChange = {(e) => this.handlerInputText(e)} />
                <button type='button' onClick = {() => this.handlerButton()}>Adicionar</button>
                {
                    this.state.list.map((valor, index) => (<li key={index}>{valor}</li>))
                }
            </div>
        );
    }
}

export default TodoList;