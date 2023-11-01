import React from 'react';
import style from './Button.module.css'
function Button(props) {
    const{text, type} = props
    return (
        <>
        <button className={style.btn} type={type}>{text}</button>
        </>
    );
}

export default Button;
