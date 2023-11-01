import {v4 as uuidv4} from 'uuid';
import React, {useState,} from "react";
import './App.css';
import TodoForm from "./components/Todos/TodoForm";
import TodoList from "./components/Todos/TodoList";
import TodosActions from "./components/Todos/TodosActions";


function App() {
    const [todos, setTodos] = useState([])

    const addTodoHandler = (text) => {
        if (text.length > 0) {
            const newTodo = {
                text,
                isCompleted: false,
                id: uuidv4(),
            }
            setTodos([...todos, newTodo])
        }


    }

    const deleteTodoHandler = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id))
    }
    const toggleTodoHandler = (id) => {
        setTodos(todos.map((todo) => {
            return todo.id === id
                ? {...todo, isCompleted: !todo.isCompleted}
                : {...todo}
        }))
    }

    const resetTodosHandler = () => {
        setTodos([])
    }
    const deleteCompetedTodosHandler = () => {
        setTodos(todos.filter((todo) => !todo.isCompleted))
    }

    const competedTodosCount = todos.filter((todo) => todo.isCompleted).length

    return (
        <div className="App">
            <TodoForm addTodo={addTodoHandler}/>
            {!!todos.length &&
                <TodosActions
                    completedTodosExist={!!competedTodosCount}
                    resetTodos={resetTodosHandler}
                    deleteCompetedTodos={deleteCompetedTodosHandler}
                />
            }
            <TodoList
                todos={todos}
                deleteTodo={deleteTodoHandler}
                toggleTodo={toggleTodoHandler}/>
            {competedTodosCount > 0 &&
                <h2>{`You have completed ${competedTodosCount}  ${competedTodosCount > 1 ? 'todos' : 'todo'}`}</h2>
            }
        </div>
    );
}

export default App;
