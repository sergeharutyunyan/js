import React from 'react';
import Todo from "./Todo";
import style from './TodoList.module.css'

function TodoList({todos, deleteTodo, toggleTodo}) {

    return (
        <div className={style.todoListContainer}>
            {!todos.length && <h2>Todo List is empty</h2>}
            {todos.map((todo) =>
                (<Todo
                    key={todo.id}
                    deleteTodo={deleteTodo}
                    todo={todo}
                    toggleTodo={toggleTodo}
                />)
            )}
        </div>
    )
}

export default TodoList;
