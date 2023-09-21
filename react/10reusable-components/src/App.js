import "./App.css";
import MyComponent from "./components/MyComponent"
import OtherComponent from "./components/OtherComponent";

/*
function MyComponent() {
    return (
        <div>
            <h1>Hello from reusable component</h1>
            <button>Like!</button>
        </div>
    );
}
*/


function App() {
    return (
        <div className="App">
            <MyComponent/>
            <OtherComponent/>
            <MyComponent/>
            <OtherComponent/>
            <MyComponent/>
        </div>
    );
}

export default App;
