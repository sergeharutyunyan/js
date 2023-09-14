import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


// const elem = <h2>Hello world</h2>

/*const elem = React.createElement('h2', {className:"My"}, 'Hello world')

const element = {
  type: 'h2',
  props:{
    className: 'greeting',
    children: 'Hello world'
  }
}*/
/*const text = 'Hello world';
const elem = (
    <div>
      <h2 className="myTitle">Some Text {text} { 2 * 3}</h2>
      <input type="text"/>
      <button tabIndex={0}>Submit</button>
    </div>
);*/
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
