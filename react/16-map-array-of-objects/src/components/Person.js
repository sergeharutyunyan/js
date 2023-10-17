import React from 'react';

function Person(props) {
    const {
        id,
        firstName,
        lastName,
        email,
        img
    } = props
    return (

            <tr>
                <td> {id} </td>
                <td><img src={img} alt=""/></td>
                <td>{firstName}</td>
                <td>{lastName}</td>
                <td>{email}</td>
            </tr>

    );
}

export default Person;
