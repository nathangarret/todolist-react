import React from 'react';
import '../App.css';

const Todo = ({ todo, removeTodo, completeTodo }) => {
    return (
        <div
            className="todo"
            style={{ textDecoration: todo.isCompleted ? "line-through" : ""}}>
            <div className="content">
                <p>{todo.text}</p>
                <p className="category">({todo.category})</p>
            </div>
            <div>
                <button type="submit" className="complete" onClick={() => completeTodo(todo.id)}>Completar</button>
                <button type="submit" className="remove" onClick={() => removeTodo(todo.id)}>X</button>
            </div>
        </div>
    );
};

export default Todo;