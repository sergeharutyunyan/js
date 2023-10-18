import {useState} from "react";
import './App.css';
import Button from "./components/Button";
import Reset from "./components/Reset";
import Counter from "./components/Counter";

function App() {
    const [count, setCount] = useState(0)
    const incrementCount = () => {
        setCount(count + 1)
    }
    const resetCount = () => {
        setCount(0)
    }
    return (
        <div className="App">
            <Counter count={count}/>
            <Button text="Click me!" onClick={incrementCount}/>
            <Button text="Click me!" onClick={incrementCount}/>
            <Button text="Click me!" onClick={incrementCount}/>
            <Button text="Click me!" onClick={incrementCount}/>
            {/*{count > 0 &&*/}
            {!!count && <Reset onClick={resetCount}/>}
        </div>
    );
}

export default App;
