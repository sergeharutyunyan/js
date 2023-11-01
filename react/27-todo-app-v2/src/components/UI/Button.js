import React from 'react';
import style from './Button.module.css'

function Button(props) {
    const {children,  disabled = false} = props
    return (
        <>
            <button
                {...props}
                className={style.btn}
                disabled={disabled}
            >
                {children}
            </button>
        </>
    );
}

export default Button;
