/*function Button({count, onClick}) {
    return (
        <>
            <button onClick={()=> onClick(count + 1)}>Click me!</button>
        </>
    );
}*/


function Button({ onClick, text}) {
    return (
        <>
            <button onClick={onClick}>{text}</button>
        </>
    );
}
export default Button;
