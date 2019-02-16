import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person'

const app = (props) => {
    const [personsState, setPersonsState] =  useState({
        persons: [
            { name: "Alice", age: 20 },
            { name: "Bob", age: 21 },
            { name: "Charlie", age: 19 }
        ]
    });

    const [otherState, setOtherState] = useState({
        otherState: "some other state"
    });

    const switchNameHandler = () => {
        setPersonsState(
            {
                persons: [
                    { name: "Agus", age: 20 },
                    { name: "Bob", age: 21 },
                    { name: "Charlie", age: 19 }
                ]
            }
        );
    }

    return (
        <div className="App">
            <h1>This is a sample react app</h1>
            <p>and it works</p>
            <button onClick={switchNameHandler}>Switch Name</button>
            <Person name={personsState.persons[0].name} age={personsState.persons[0].age} />
            <Person name={personsState.persons[1].name} age={personsState.persons[1].age}>Hobby: Playing Bass</Person>
            <Person name={personsState.persons[2].name} age={personsState.persons[2].age} />
        </div>
    );
}

export default app;