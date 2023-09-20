const App = ({initialButtonText, initialClassesList}) => {
// const App = (props) => {
    // const {initialButtonText} = props;
    // console.log('Called')
    // console.log(props)
    // const [buttonText, setButtonText] = React.useState('Click me');
    // const [buttonText, setButtonText] = React.useState(props.initialButtonText);
    const [buttonText, setButtonText] = React.useState(initialButtonText);
    const [classesList, setClassesList] = React.useState(initialClassesList);
    console.log(buttonText)
    const onButtonClick = () => {
        setButtonText(`Hello from React ${Math.floor(Math.random() * 100)}`);
        setClassesList(`green-btn`);
        // console.log(buttonText)
    }
    return (
        <div className="app">
            <button className={classesList}
                    onClick={onButtonClick}>
                {buttonText}
            </button>
        </div>
    );
}

const container = document.getElementById('app');

const root = ReactDOM.createRoot(container);
root.render(<App initialButtonText="Click me" initialClassesList=""/>);
