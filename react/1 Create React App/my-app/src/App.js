import './App.css';
import React, {StrictMode} from "react";

const Header = () => {
    return <h2>Hello World</h2>
}

/*const Field = () => {
    const holder = 'Enter Here';
    const styledField = {
        width: '300px'
    }
    return <input
            type="text"
            placeholder={holder}
            style={styledField}/>
}*/

class Field extends React.Component {
    render() {
        const holder = 'Enter Here';
        const styledField = {
            width: '300px'
        }
        return <input
            type="text"
            placeholder={holder}
            style={styledField}/>
    }
}

const BTN = () => {
    const text = 'Log in';
    const logged = false;

    /*const res = () => {
        return 'Log in'
    }*/
    /*    const span = <span>Log in</span>*/
    return <button>{logged ? 'Enter' : text}</button>
}

function App() {
    return (
        <div className="App">
            <StrictMode>
                <Header/>
            </StrictMode>
            <Field/>
            <BTN/>
        </div>
    );
}

export {Header};

export default App;
