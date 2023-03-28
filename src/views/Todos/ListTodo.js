import React from 'react';
import './ListTodo.scss';
import AddTodo from './AddTodo';
import { toast } from 'react-toastify';

class ListTodo extends React.Component {
    state = {
        listTodos: [
            { id: '1', title: 'Doing homework' },
            { id: '2', title: 'Making videos' },
            { id: '3', title: 'Fixing bugs' },
        ],
        editTodo: {},
    };

    addNewTodo = (todo) => {
        this.setState({
            listTodos: [...this.state.listTodos, todo],
        });

        toast.success('Wow so easy!');
    };

    handleDeleteTodo = (todo) => {
        let currentTodos = this.state.listTodos;
        currentTodos = currentTodos.filter((item) => item.id !== todo.id);
        this.setState({
            listTodos: currentTodos,
        });
        toast.success('Delete success');
    };

    handleEditTodo = (todo) => {
        let { editTodo, listTodos } = this.state;
        let isEmptyObj = Object.keys(editTodo).length === 0;
        if (isEmptyObj === false && editTodo.id === todo.id) {
            let listTodosCopy = [...listTodos];
            let objIndex = listTodosCopy.findIndex((item) => item.id === todo.id);

            listTodosCopy[objIndex].name = editTodo.title;

            this.setState({
                listTodos: listTodosCopy,
                editTodo: {},
            });
            toast.success('Update todo success');
            return;
        } else {
            this.setState({
                editTodo: todo,
            });
        }
    };

    handleOnchangeEditTodo = (event) => {
        let editTodoCopy = { ...this.state.editTodo };
        editTodoCopy.title = event.target.value;
        this.setState({
            editTodo: editTodoCopy,
        });
    };
    render() {
        let { listTodos, editTodo } = this.state;
        let isEmptyObj = Object.keys(editTodo).length === 0;
        return (
            <>
                <p>Simple TODO Apps with React.js (LamLe &amp; lamlele)</p>
                <div className="list-todo-container">
                    <AddTodo addNewTodo={this.addNewTodo} />
                    <div className="list-todo-content">
                        {listTodos &&
                            listTodos.length > 0 &&
                            listTodos.map((item, index) => {
                                return (
                                    <div className="todo-child" key={item.id}>
                                        {isEmptyObj === true ? (
                                            <span>
                                                {' '}
                                                {index + 1} - {item.title}{' '}
                                            </span>
                                        ) : (
                                            <>
                                                {editTodo.id === item.id ? (
                                                    <span>
                                                        {index + 1} -{' '}
                                                        <input
                                                            value={editTodo.title}
                                                            onChange={(event) => this.handleOnchangeEditTodo(event)}
                                                        />
                                                    </span>
                                                ) : (
                                                    <span>
                                                        {index + 1} - {item.title}
                                                    </span>
                                                )}
                                            </>
                                        )}
                                        <button className="edit" onClick={() => this.handleEditTodo(item)}>
                                            {isEmptyObj === false && editTodo.id === item.id ? 'Save' : 'Edit'}
                                            Edit
                                        </button>
                                        <button className="delete" onClick={() => this.handleDeleteTodo(item)}>
                                            Delete
                                        </button>
                                    </div>
                                );
                            })}
                    </div>
                </div>
            </>
        );
    }
}

export default ListTodo;
