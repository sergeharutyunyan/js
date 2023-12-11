import React from 'react';

function UserName(props) {
    console.log(props)
    return (
        props.children('Serge123')
    );
}

export default UserName;
