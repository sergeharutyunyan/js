import React from 'react';

function Reset({onClick}) {
    return (
        <div>
            <button
                style={{
                    backgroundColor: 'lightgreen'
                }}
                onClick={onClick}
            >Reset
            </button>
        </div>
    );
}

export default Reset;
