import {useState} from "react";
import './App.css';
import Button from "./components/Button";
import Counter from "./components/Counter";

function App() {
    const [count, setCount] = useState(0)
    const incrementCount = () => {
        setCount(count + 1)
    }
    const resetAll = () => {
        setCount(0)
    }
    return (
        <div className="App">
            <Counter count={count}/>
            <Button text="Click me!" onClick={incrementCount}/>
            <Button text="Click me!" onClick={incrementCount}/>
            <Button text="Click me!" onClick={incrementCount}/>
            <Button text="Click me!" onClick={incrementCount}/>
            <Button text="Resset" onClick={resetAll}/>
        </div>
    );
}

export default App;
