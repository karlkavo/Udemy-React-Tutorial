import React, { Component } from 'react';

import './App.css';
// eslint-disable-next-line
import Person from './Person/Person';

class App extends Component {

  state = {
    persons: [
      { name: 'Karl', age: 48 },
      { name: 'Catherine', ag: 49 },
      { name: 'Jack', age: 28 }
    ]
  }

  switchNameHandler = () => {
    console.log('Was Clicked');
  }

  render() {
    return (
      <div className="App">

        <h1>Udemy React App Tutorial</h1>
        <button onClick={this.switchNameHandler}> Switch name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[0].name} age={this.state.persons[1].age} /><Person>My hobbies are walking</Person>
        <Person name={this.state.persons[0].name} age={this.state.persons[2].age} />


      </div>
    );

  }
}

export default App;
