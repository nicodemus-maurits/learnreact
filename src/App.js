import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person'

class App extends Component {
    render() {
        return (
            <div className="App">
                <h1>This is a sample react app</h1>
                <p>and it works</p>

                <Person name="Alice" age="20" />
                <Person name="Bob" age="21">Hobby: Playing Bass</Person>
                <Person name="Charlie" age="19" />
            </div>
        );
    }
}

export default App;
