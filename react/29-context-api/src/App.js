import './App.css';
import {useState} from "react";
import User from "./Components/User";
import UserContext from "./context/UserContext";
import ChangeUser from "./Components/ChangeUser";


function App() {
    const [user, setUser] = useState('Serge123')
    return (
        <UserContext.Provider value={{user, setUser}}>
            <div className="App">
                <User/>
                <ChangeUser/>
            </div>
        </UserContext.Provider>
    );
}

export default App;
