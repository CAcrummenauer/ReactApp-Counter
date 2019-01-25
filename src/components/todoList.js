import React from 'react';

class TodoList extends React.Component {
    state = {
        text: '',
        list: []
    }

    handlerInputText(e) {
        //preventDefault(e);
        console.log(e.target.value);
    }

    render() {
        return (
            <div>
                <input type='text' onChange = {(e) => this.handlerInputText(e)} />
                <button type='button'>Adicionar</button>
            </div>
        );
    }
}

export default TodoList;