import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person'

class App extends Component {
    state = {
        persons: [
            { name: "Alice", age: 20 },
            { name: "Bob", age: 21 },
            { name: "Charlie", age: 19 }
        ],
        otherState: "Some other value",
        showPersons: false, 
    }

    switchNameHandler = (newName) => {
        this.setState(
            {
                persons: [
                    { name: newName, age: 20 },
                    { name: "Bob", age: 21 },
                    { name: "Charlie", age: 19 }
                ]
            }
        )
    }

    nameChangedHandler = (event) => {
        this.setState(
            {
                persons: [
                    { name: "newName", age: 20 },
                    { name: event.target.value, age: 21 },
                    { name: "Charlie", age: 19 }
                ]
            }
        )
    }

    togglePersonsHandler = () => {
        const doesShow = this.state.showPersons;
        this.setState({showPersons: !doesShow});
    }

    deletePersonHandler = (personIndex) => {
        // this basically works the same
        // const personsTemp = this.state.persons.slice();
        const personsTemp = [...this.state.persons];
        personsTemp.splice(personIndex, 1);
        this.setState({persons: personsTemp});
    }

    render() {
        const buttonStyle = {
            padding: '8px',
            cursor: 'pointer',
            background: 'white',
            border: '1px solid blue',
        };

        let persons = null;
        if (this.state.showPersons) {
            persons = (
                <div>
                    {this.state.persons.map((person, index) => {
                        return <Person 
                            name={person.name}
                            age= {person.age}
                            clickEvent={this.deletePersonHandler.bind(this, index)}/>
                    })}
                </div>
            );
        }

        return (
            <div className="App">
                <h1>This is a sample react app</h1>
                <p>and it works</p>
                <button
                    style={buttonStyle} 
                    onClick={this.togglePersonsHandler}>Toggle Persons
                </button>

                {persons}
            </div>
        );
    }
}

export default App;
