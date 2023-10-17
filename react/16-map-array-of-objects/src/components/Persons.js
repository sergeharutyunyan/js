import React from 'react';
import Person from "./Person";
import persons from "../data/persons";
function Persons(props) {
    return (
        <table>
            <tbody>
            {
                persons.map((person) => {
                    /*     const {
                             id,
                             email,
                             firstName,
                             img,
                             lastName
                         } = person
                         return <Person
                             id={id}
                             email={email}
                             firstName={firstName}
                             img={img}
                             lastName={lastName}
                         />*/
                    /*         return <Person person={person}/> */


                    return <Person {...person} key={person.id}/>

                })
            }
            </tbody>
        </table>
    );
}

export default Persons;
