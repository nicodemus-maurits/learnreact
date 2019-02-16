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

                <Person />
                <Person />
                <Person />
            </div>
        );
    }
}

export default App;
