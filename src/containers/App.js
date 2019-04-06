import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons'
import Cockpit from '../components/Cockpit/Cockpit'

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
        let persons = null;
        if (this.state.showPersons) {
            persons = 
                    <Persons 
                    persons={this.state.persons} 
                    clicked={this.deletePersonHandler}
                    changed={this.nameChangedHandler}/>
            ;
        }

        return (
            <div className={classes.App}>
                <Cockpit 
                    title={this.props.appTitle}
                    showPersons={this.state.showPersons}
                    persons={this.state.persons} 
                    clicked={this.togglePersonsHandler}/>
                {persons}
            </div>
        );
    }
}

export default App;
