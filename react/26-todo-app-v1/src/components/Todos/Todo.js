import React from 'react';
import { RiTodoFill } from "react-icons/ri";
import style from './Todo.module.css'

function Todo(props) {
    const {todo, index, deleteTodo} = props
    return (
        <div
            className={style.todoItem}
            onDoubleClick={() => deleteTodo(index)}
        >
            <RiTodoFill className={style.todoIcon}/>
            <p className={style.todoItemText}>{todo}</p>
        </div>
    );
}

export default Todo;
