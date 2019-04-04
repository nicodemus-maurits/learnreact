import React, { Component } from 'react';
import classes from './App.css';
import Person from './Person/Person'

class App extends Component {
    state = {
        persons: [
            { id: "qwert", name: "Alice", age: 20 },
            { id: "asdfg", name: "Bob", age: 21 },
            { id: "yxcvb", name: "Charlie", age: 19 }
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

    nameChangedHandler = (event, id) => {
        const personIndex = this.state.persons.findIndex((param) => {
            return param.id === id;
        }); 
        const person = {...this.state.persons[personIndex]};

        person.name = event.target.value;

        const persons = [...this.state.persons];
        persons[personIndex] = person;

        this.setState(
            {persons: persons}
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
        let btnClass = '';
        let persons = null;
        if (this.state.showPersons) {
            persons = (
                <div>
                    {this.state.persons.map((person, index) => {
                        return <Person 
                            name ={person.name}
                            age = {person.age}
                            clickEvent={this.deletePersonHandler.bind(this, index)}
                            key={person.id}
                            changeParam={(event) => this.nameChangedHandler(event, person.id)}/>
                    })}
                </div>
            );

            btnClass = classes.Red;
        }

        const assignedClasses = [];
        if(this.state.persons.length <= 2) {
            assignedClasses.push(classes.red);
        }
        if(this.state.persons.length <= 1) {
            assignedClasses.push(classes.bold);
        }

        return (
            <div className={classes.App}>
                <h1>This is a sample react app</h1>
                <p className={assignedClasses.join(" ")}>and it works</p>
                <button 
                    className={btnClass} 
                    onClick={this.togglePersonsHandler}>Toggle Persons
                </button>

                {persons}
            </div>
        );
    }
}

export default App;
