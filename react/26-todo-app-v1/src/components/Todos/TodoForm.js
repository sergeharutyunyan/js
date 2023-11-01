import React, {useState} from 'react';
import Button from '../UI/Button';
import style from './TodoForm.module.css'

function TodoForm({addTodo}) {
    const [text, setText] = useState('')
    const onSubmitHandler = (event) => {
        event.preventDefault()
        addTodo(text)
        setText('')
    }
    return (
        <>
            <h2 className={style.title}>Todo App</h2>
            <form
                className={style.todoForm}
                onSubmit={onSubmitHandler}
            >
                <input
                    className={style.todoInput}
                    type="text"
                    placeholder='Enter new todo'
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
                <Button type='submit' text='Submit'/>
            </form>
        </>
    );
}

export default TodoForm;
