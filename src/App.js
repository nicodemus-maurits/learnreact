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
        ]
    }

    switchNameHandler = () => {
        
    }

    render() {
        return (
            <div className="App">
                <h1>This is a sample react app</h1>
                <p>and it works</p>
                <button onClick={this.switchNameHandler}>Switch Name</button>
                <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
                <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>Hobby: Playing Bass</Person>
                <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
            </div>
        );
    }
}

export default App;
