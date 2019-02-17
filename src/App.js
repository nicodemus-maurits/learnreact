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

    render() {
        const buttonStyle = {
            padding: '8px',
            cursor: 'pointer',
            background: 'white',
            border: '1px solid blue',
        };

        return (
            <div className="App">
                <h1>This is a sample react app</h1>
                <p>and it works</p>
                <button
                    style={buttonStyle} 
                    onClick={this.togglePersonsHandler}>Toggle Persons
                </button>

                {
                    this.state.showPersons ? 
                    <div>
                    <Person 
                        name={this.state.persons[0].name} 
                        age={this.state.persons[0].age} />
                    <Person 
                        name={this.state.persons[1].name} 
                        age={this.state.persons[1].age}
                        click={this.switchNameHandler.bind(this, "first method, recommended")}
                        changed={this.nameChangedHandler}>Hobby: Playing Bass</Person>
                    <Person 
                        name={this.state.persons[2].name} 
                        age={this.state.persons[2].age} />
                </div> : null
                }
            </div>
        );
    }
}

export default App;
