import React from 'react';
import {RiDeleteBin2Line, RiTodoFill} from "react-icons/ri";
import style from './Todo.module.css'
import {FaCheck} from "react-icons/fa6";

function Todo(props) {
    const {todo, deleteTodo, toggleTodo} = props
    return (
        <div
            className={`${style.todoItem} ${todo.isCompleted ? style.completedTodo : ''} `}>
            <RiTodoFill className={style.todoIcon}/>
            <p className={style.todoItemText}>{todo.text}</p>
            <RiDeleteBin2Line className={style.todoDelete} onClick={() => deleteTodo(todo.id)}/>
            <FaCheck className={style.todoCompeted} onClick={() => toggleTodo(todo.id)}/>
        </div>
    );
}

export default Todo;
