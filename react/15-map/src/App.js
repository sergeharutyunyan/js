import {useState} from "react";
import './App.css';
import Button from "./components/Button";
import Counter from "./components/Counter";

const text = [
    'Click me',
    'Click me please',
    'Hit me',
    'Press me',
]

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
            {/* <Button text={text[0]} onClick={incrementCount}/>
            <Button text={text[1]} onClick={incrementCount}/>
            <Button text={text[2]} onClick={incrementCount}/>
            <Button text={text[3]} onClick={incrementCount}/>*/}

            {
                text.map((text, index)=>{
                   return <Button key={index} text={text} onClick={incrementCount}/>
                })
            }
            <Button text="Resset" onClick={resetAll}/>
        </div>
    );
}

export default App;
