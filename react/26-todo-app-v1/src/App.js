import './App.css';
import TodoForm from "./components/Todos/TodoForm";
import TodoList from "./components/Todos/TodoList";
import {useState} from "react";

function App() {
    const [todos, setTodos] = useState([])

    const addTodoHandler = (text) => {
        setTodos([...todos, text])
    }

    const deleteTodoHandler = (index) => {
        setTodos(todos.filter((_, idx) => idx !== index))
    }
    return (
        <div className="App">
            <TodoForm addTodo={addTodoHandler}/>
            {/*      {
                todos.length === 0 ? <h2>Todo List is empty</h2>
                    : <TodoList todos={todos}/>
            }
*/}
            <TodoList todos={todos} deleteTodo={deleteTodoHandler}/>
        </div>
    );
}

export default App;
