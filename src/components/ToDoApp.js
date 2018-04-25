import React from 'react';
import TodosList from './Todos-list';

export default class TodoApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [],
            isEditing: false,
            isChecked: false
        };

        this.handleRemove = this.handleRemove.bind(this);
        this.deleteTask = this.deleteTask.bind(this);
        this.handleChecked = this.handleChecked.bind(this);
    }

    handleRemove() {
        if (this.state.todos.length > 0){
            let newState = this.state.todos.filter(item=>item.isChecked === false);
            this.setState({todos:newState});
        }
    }

    handleChecked(itemId,event) {

        let itemIndex = this.state.todos.findIndex(item => item.id === itemId);
        this.state.todos[itemIndex].isChecked = event.target.checked;
        this.setState(this.state.todos);

    }

    createTask(task) {
        this.state.todos.push({
            id: Date.now(),
            task: task,
            isChecked: false
        });
        this.setState({ todos: this.state.todos});
    }

    deleteTask(itemId){
        let newState = this.state.todos.filter(item=> item.id !== itemId);
        this.setState({ todos: newState });
    }

    handleCreate(event) {
        event.preventDefault();
        if (this.refs.createInput.value === "") return;
        this.createTask(this.refs.createInput.value);
        this.refs.createInput.value = '';
    }

    render () {
        return (
            <div>
                <h1>To Do</h1>

                <form onSubmit={e=>this.handleCreate(e)}>
                    <input type="text" placeholder="Choose a task" ref="createInput"  />
                    <button>Create</button>
                </form>

                <TodosList
                    todos={this.state.todos}
                    deleteTask={this.deleteTask}
                    handleRemove={this.handleRemove}
                    fnDeleteTask={(itemId)=>this.deleteTask(itemId)}
                    fnHandleChecked={(itemId,e)=>this.handleChecked(itemId,e)}
                />

                <button type="button" onClick={this.handleRemove}>Remove All</button>
            </div>
        );
    }
}
