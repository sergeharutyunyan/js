import './App.css';
import Info from "./components/Info";
// import styles from './components/info.module.css'
function App() {
    return (
        <div className="App">
            <Info/>
            <div className="info">
                <h1>App component heading</h1>
                <button className="my-button">App component button</button>
            </div>
        </div>
    );
}

export default App;
